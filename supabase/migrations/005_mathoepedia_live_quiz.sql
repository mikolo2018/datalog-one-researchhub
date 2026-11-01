-- Live Mathoepedia quiz sessions and learner performance records.
-- Tables are server-only: the service role is used by protected Next.js routes.

create table if not exists public.matho_quiz_sessions(
  id uuid primary key default gen_random_uuid(),
  join_code text not null unique check(join_code ~ '^[A-Z0-9]{6}$'),
  title text not null,
  category text not null default 'All',
  difficulty text not null default 'All' check(difficulty in ('All','Foundation','Bridge','Competition')),
  question_ids integer[] not null check(cardinality(question_ids) between 4 and 50),
  seconds_per_question integer not null default 60 check(seconds_per_question between 20 and 300),
  status text not null default 'live' check(status in ('live','closed')),
  created_at timestamptz not null default now(),
  closed_at timestamptz
);

create table if not exists public.matho_quiz_participants(
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.matho_quiz_sessions(id) on delete cascade,
  pupil_name text not null check(char_length(pupil_name) between 2 and 100),
  class_name text,
  token_hash text not null,
  score integer,
  total integer,
  percentage numeric(5,2),
  feedback jsonb not null default '{}'::jsonb,
  joined_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.matho_quiz_answers(
  id bigint generated always as identity primary key,
  session_id uuid not null references public.matho_quiz_sessions(id) on delete cascade,
  participant_id uuid not null references public.matho_quiz_participants(id) on delete cascade,
  question_id integer not null,
  topic text not null,
  difficulty text not null,
  selected_answer text,
  correct_answer text not null,
  is_correct boolean not null,
  response_ms integer check(response_ms is null or response_ms >= 0),
  submitted_at timestamptz not null default now(),
  unique(participant_id,question_id)
);

create index if not exists matho_quiz_sessions_code_status_idx on public.matho_quiz_sessions(join_code,status);
create index if not exists matho_quiz_participants_session_idx on public.matho_quiz_participants(session_id,completed_at);
create index if not exists matho_quiz_answers_session_topic_idx on public.matho_quiz_answers(session_id,topic);

alter table public.matho_quiz_sessions enable row level security;
alter table public.matho_quiz_participants enable row level security;
alter table public.matho_quiz_answers enable row level security;

revoke all on public.matho_quiz_sessions,public.matho_quiz_participants,public.matho_quiz_answers from anon,authenticated;
grant all on public.matho_quiz_sessions,public.matho_quiz_participants,public.matho_quiz_answers to service_role;
grant usage,select on sequence public.matho_quiz_answers_id_seq to service_role;

drop policy if exists "matho quiz sessions server only" on public.matho_quiz_sessions;
drop policy if exists "matho quiz participants server only" on public.matho_quiz_participants;
drop policy if exists "matho quiz answers server only" on public.matho_quiz_answers;
create policy "matho quiz sessions server only" on public.matho_quiz_sessions for all to anon,authenticated using(false) with check(false);
create policy "matho quiz participants server only" on public.matho_quiz_participants for all to anon,authenticated using(false) with check(false);
create policy "matho quiz answers server only" on public.matho_quiz_answers for all to anon,authenticated using(false) with check(false);
