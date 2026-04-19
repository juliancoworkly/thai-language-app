"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { setCloudUser, syncOnLogin } from "@/lib/storage";

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  syncing: boolean;
}

const Ctx = createContext<AuthState>({
  user: null,
  session: null,
  loading: true,
  syncing: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    syncing: false,
  });

  useEffect(() => {
    if (!supabase) {
      setState({ user: null, session: null, loading: false, syncing: false });
      return;
    }

    let cancelled = false;

    async function applySession(session: Session | null) {
      if (cancelled) return;
      const user = session?.user ?? null;
      setState((s) => ({ ...s, user, session, loading: false }));
      if (user) {
        setState((s) => ({ ...s, syncing: true }));
        try {
          await syncOnLogin(user.id);
        } finally {
          if (!cancelled) setState((s) => ({ ...s, syncing: false }));
        }
      } else {
        setCloudUser(null);
      }
    }

    supabase.auth.getSession().then(({ data }) => applySession(data.session));

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      applySession(session);
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
