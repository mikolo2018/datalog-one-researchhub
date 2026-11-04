-- Server-only registry for Paystack plans created for the active merchant account.
create table if not exists public.paystack_plan_mappings(
  item_slug text primary key,
  plan_code text not null unique,
  amount_kobo bigint not null check(amount_kobo>0),
  interval text not null check(interval in ('daily','weekly','monthly','quarterly','biannually','annually')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.paystack_plan_mappings enable row level security;
drop policy if exists "paystack plan mappings server only" on public.paystack_plan_mappings;
create policy "paystack plan mappings server only" on public.paystack_plan_mappings for all to anon,authenticated using(false) with check(false);
revoke all on public.paystack_plan_mappings from anon,authenticated;
grant all on public.paystack_plan_mappings to service_role;
