// Supabase Edge Function — Paddle webhook receiver.
//
// Deploy with:
//   supabase functions deploy paddle-webhook --no-verify-jwt
//
// Then set secrets:
//   supabase secrets set \
//     PADDLE_NOTIFICATION_SECRET=pdl_ntfset_... \
//     SUPABASE_URL=https://<project>.supabase.co \
//     SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
//
// Finally, in Paddle → Developer Tools → Notifications, add a webhook
// pointing at https://<project>.supabase.co/functions/v1/paddle-webhook
// and subscribe to the events below.

// @ts-ignore - Deno runtime types
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

// deno-lint-ignore no-explicit-any
const env = (Deno as any).env as { get(k: string): string | undefined };

const NOTIF_SECRET = env.get("PADDLE_NOTIFICATION_SECRET");
const SB_URL = env.get("SUPABASE_URL")!;
const SB_SRK = env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(SB_URL, SB_SRK, {
  auth: { persistSession: false },
});

// Paddle signs webhooks with HMAC-SHA256. Header format:
//   Paddle-Signature: ts=<unix>;h1=<hex>
async function verify(raw: string, header: string | null): Promise<boolean> {
  if (!NOTIF_SECRET || !header) return false;
  const parts = Object.fromEntries(header.split(";").map((p) => p.split("=") as [string, string]));
  if (!parts.ts || !parts.h1) return false;
  const payload = `${parts.ts}:${raw}`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(NOTIF_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  const hex = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hex === parts.h1;
}

async function upsertSubscription(userId: string, sub: Record<string, unknown>) {
  // Load current profile jsonb, overlay subscription, save back.
  const { data } = await supabase
    .from("user_progress")
    .select("profile")
    .eq("user_id", userId)
    .maybeSingle();
  const profile = (data?.profile as Record<string, unknown>) ?? {};
  const next = { ...profile, subscription: sub };
  await supabase
    .from("user_progress")
    .upsert({ user_id: userId, profile: next });
}

serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const raw = await req.text();
  const header = req.headers.get("paddle-signature");
  if (!(await verify(raw, header))) {
    return new Response("Invalid signature", { status: 401 });
  }
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  const type = String(body.event_type ?? "");
  const data = body.data as Record<string, unknown> | undefined;
  const customData = (data?.custom_data ?? {}) as Record<string, unknown>;
  const userId = String(customData.supabase_user_id ?? "");

  if (!userId) {
    // Nothing we can attach — acknowledge and move on.
    return new Response("ok (no user)", { status: 200 });
  }

  const now = Date.now();

  switch (type) {
    case "subscription.activated":
    case "subscription.created": {
      await upsertSubscription(userId, {
        status: "active",
        provider: "paddle",
        subscriptionId: data?.id ?? null,
        customerId: data?.customer_id ?? null,
        currentPeriodEnd: parseBillingEnd(data) ?? null,
      });
      break;
    }
    case "subscription.updated": {
      await upsertSubscription(userId, {
        status: mapPaddleStatus(String(data?.status ?? "active")),
        provider: "paddle",
        subscriptionId: data?.id ?? null,
        currentPeriodEnd: parseBillingEnd(data) ?? null,
      });
      break;
    }
    case "subscription.canceled":
    case "subscription.past_due": {
      await upsertSubscription(userId, {
        status: type === "subscription.past_due" ? "past_due" : "canceled",
        provider: "paddle",
        subscriptionId: data?.id ?? null,
      });
      break;
    }
    case "transaction.completed": {
      // One-time payment finished — treat as renewal confirmation.
      await upsertSubscription(userId, {
        status: "active",
        provider: "paddle",
        currentPeriodEnd: now + 365 * 86_400_000,
      });
      break;
    }
    default:
      break;
  }

  return new Response("ok", { status: 200 });
});

function mapPaddleStatus(s: string): string {
  switch (s) {
    case "active": return "active";
    case "trialing": return "trialing";
    case "past_due": return "past_due";
    case "canceled":
    case "cancelled": return "canceled";
    default: return s;
  }
}

function parseBillingEnd(data?: Record<string, unknown>): number | null {
  const period = data?.current_billing_period as Record<string, unknown> | undefined;
  const ends = period?.ends_at;
  if (typeof ends === "string") {
    const t = Date.parse(ends);
    if (!Number.isNaN(t)) return t;
  }
  return null;
}
