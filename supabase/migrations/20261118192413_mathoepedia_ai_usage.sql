create table if not exists public.matho_ai_usage (
  id bigint generated always as identity primary key,
  fingerprint text not null,
  mode text not null check (mode in ('hint', 'explain', 'teacher-summary', 'quiz-plan')),
  question_code text,
  created_at timestamptz not null default now()
);

alter table public.matho_ai_usage enable row level security;
revoke all on table public.matho_ai_usage from public, anon, authenticated, service_role;
grant select, insert on table public.matho_ai_usage to service_role;
grant usage, select on sequence public.matho_ai_usage_id_seq to service_role;

create policy "AI usage is server-only"
  on public.matho_ai_usage for all
  to anon, authenticated
  using (false)
  with check (false);

create index if not exists matho_ai_usage_fingerprint_created_idx
  on public.matho_ai_usage (fingerprint, created_at desc);
