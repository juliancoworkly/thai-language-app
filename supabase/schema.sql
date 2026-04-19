-- Paste this whole file into Supabase → SQL Editor → New query → Run.
-- Safe to re-run; each statement is idempotent.

-- 1) One row of progress per user.
create table if not exists public.user_progress (
  user_id uuid references auth.users on delete cascade primary key,
  cards jsonb not null default '{}'::jsonb,
  seen_sentences text[] not null default '{}',
  seen_words text[] not null default '{}',
  stats jsonb not null default
    '{"reviewsToday":0,"lastReviewDay":"","totalReviews":0}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2) Row-level security: every user sees only their own row.
alter table public.user_progress enable row level security;

drop policy if exists "read own progress" on public.user_progress;
create policy "read own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

drop policy if exists "insert own progress" on public.user_progress;
create policy "insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "update own progress" on public.user_progress;
create policy "update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id);

drop policy if exists "delete own progress" on public.user_progress;
create policy "delete own progress"
  on public.user_progress for delete
  using (auth.uid() = user_id);

-- 3) Auto-touch updated_at on every update.
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists user_progress_updated_at on public.user_progress;
create trigger user_progress_updated_at
  before update on public.user_progress
  for each row execute function public.touch_updated_at();
