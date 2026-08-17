-- DATALOG ONE MVP: profile bootstrap + row-level security
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, full_name, referral_code)
  values(new.id, coalesce(new.raw_user_meta_data->>'full_name',''), upper(substr(md5(new.id::text),1,8)))
  on conflict (id) do nothing;
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table profiles enable row level security;
alter table projects enable row level security;
alter table topic_packs enable row level security;
alter table diagnostics enable row level security;
alter table consultations enable row level security;
alter table payments enable row level security;
alter table subscriptions enable row level security;
alter table referrals enable row level security;
alter table rewards enable row level security;

create policy "profiles own read" on profiles for select using (auth.uid()=id);
create policy "profiles own update" on profiles for update using (auth.uid()=id);
create policy "projects own all" on projects for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "topic packs own all" on topic_packs for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "diagnostics own all" on diagnostics for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "consultations own all" on consultations for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "payments own read" on payments for select using (auth.uid()=user_id);
create policy "subscriptions own read" on subscriptions for select using (auth.uid()=user_id);
create policy "referrals referrer read" on referrals for select using (auth.uid()=referrer_id);
create policy "rewards own read" on rewards for select using (auth.uid()=user_id);