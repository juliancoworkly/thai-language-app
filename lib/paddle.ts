"use client";

import { initializePaddle, type Paddle } from "@paddle/paddle-js";

const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;
const env = (process.env.NEXT_PUBLIC_PADDLE_ENV ?? "sandbox") as
  | "sandbox"
  | "production";

export const isPaddleConfigured = Boolean(token && priceId);
export const paddlePriceId = priceId ?? null;

let paddlePromise: Promise<Paddle | undefined> | null = null;

function getPaddle(): Promise<Paddle | undefined> {
  if (!token) return Promise.resolve(undefined);
  if (!paddlePromise) {
    paddlePromise = initializePaddle({
      environment: env,
      token,
      eventCallback: (event) => {
        // Paddle fires events during the checkout lifecycle; surface for debug
        // (and we rely on the webhook for authoritative state, not this).
        if (typeof window !== "undefined") {
          (window as unknown as { __paddleLastEvent?: unknown }).__paddleLastEvent = event;
        }
      },
    });
  }
  return paddlePromise;
}

export async function openCheckout(opts: {
  email?: string;
  customData?: Record<string, unknown>;
}) {
  if (!priceId) return;
  const paddle = await getPaddle();
  if (!paddle) return;
  paddle.Checkout.open({
    items: [{ priceId, quantity: 1 }],
    customer: opts.email ? { email: opts.email } : undefined,
    customData: opts.customData,
    settings: {
      displayMode: "overlay",
      theme: "light",
    },
  });
}
