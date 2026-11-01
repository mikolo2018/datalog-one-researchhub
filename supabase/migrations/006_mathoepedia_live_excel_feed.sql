-- Refreshable Excel feed for Mathoepedia quiz sessions.
alter table public.matho_quiz_sessions add column if not exists excel_token_hash text;
