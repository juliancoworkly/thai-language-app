"use client";

import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { isPaddleConfigured, openCheckout } from "@/lib/paddle";

export function CheckoutButton({ className }: { className?: string }) {
  const { user } = useAuth();
  const [launching, setLaunching] = useState(false);

  if (!isPaddleConfigured) {
    return (
      <button
        disabled
        className={
          className ??
          "w-full cursor-not-allowed rounded-full bg-mint-500 px-6 py-3 font-semibold text-ink-900 opacity-60"
        }
      >
        Pay with card (Paddle — connect to finish)
      </button>
    );
  }

  async function handleClick() {
    setLaunching(true);
    try {
      await openCheckout({
        email: user?.email,
        customData: user?.id ? { supabase_user_id: user.id } : undefined,
      });
    } finally {
      setTimeout(() => setLaunching(false), 800);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={launching}
      className={
        className ??
        "w-full rounded-full bg-mint-500 px-6 py-3 font-semibold text-ink-900 hover:bg-mint-400 disabled:opacity-60"
      }
    >
      {launching ? "Opening checkout…" : "Subscribe for ฿1,000/year →"}
    </button>
  );
}
