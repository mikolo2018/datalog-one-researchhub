-- Optimize inherited MVP policies and foreign-key joins; keep lead data service-role only.

drop policy if exists "profiles own read" on public.profiles;
drop policy if exists "profiles own update" on public.profiles;
drop policy if exists "projects own all" on public.projects;
drop policy if exists "topic packs own all" on public.topic_packs;
drop policy if exists "diagnostics own all" on public.diagnostics;
drop policy if exists "consultations own all" on public.consultations;
drop policy if exists "payments own read" on public.payments;
drop policy if exists "subscriptions own read" on public.subscriptions;
drop policy if exists "referrals referrer read" on public.referrals;
drop policy if exists "rewards own read" on public.rewards;

create policy "profiles own read" on public.profiles for select to authenticated using ((select auth.uid())=id);
create policy "profiles own update" on public.profiles for update to authenticated using ((select auth.uid())=id) with check ((select auth.uid())=id);
create policy "projects own all" on public.projects for all to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "topic packs own all" on public.topic_packs for all to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "diagnostics own all" on public.diagnostics for all to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "consultations own all" on public.consultations for all to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "payments own read" on public.payments for select to authenticated using ((select auth.uid())=user_id);
create policy "subscriptions own read" on public.subscriptions for select to authenticated using ((select auth.uid())=user_id);
create policy "referrals referrer read" on public.referrals for select to authenticated using ((select auth.uid())=referrer_id);
create policy "rewards own read" on public.rewards for select to authenticated using ((select auth.uid())=user_id);

create policy "institutional enquiries admin only" on public.institutional_enquiries for all to authenticated using (false) with check (false);
create policy "newsletter subscribers admin only" on public.newsletter_subscribers for all to authenticated using (false) with check (false);

create index if not exists consultations_diagnostic_idx on public.consultations(diagnostic_id);
create index if not exists consultations_user_idx on public.consultations(user_id);
create index if not exists course_enrollments_payment_idx on public.course_enrollments(payment_id);
create index if not exists diagnostics_project_idx on public.diagnostics(project_id);
create index if not exists diagnostics_user_idx on public.diagnostics(user_id);
create index if not exists entitlements_payment_idx on public.entitlements(source_payment_id);
create index if not exists experts_profile_idx on public.experts(profile_id);
create index if not exists payments_user_idx on public.payments(user_id);
create index if not exists projects_user_idx on public.projects(user_id);
create index if not exists referrals_referred_user_idx on public.referrals(referred_user_id);
create index if not exists referrals_referrer_idx on public.referrals(referrer_id);
create index if not exists rewards_referral_idx on public.rewards(referral_id);
create index if not exists rewards_user_idx on public.rewards(user_id);
create index if not exists topic_packs_user_idx on public.topic_packs(user_id);
