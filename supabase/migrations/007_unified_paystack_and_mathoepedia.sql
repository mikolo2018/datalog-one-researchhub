-- Unified Paystack ledger, linked service deposits and Mathoepedia subscriptions.

alter table public.payments add column if not exists provider_transaction_id bigint;
alter table public.payments add column if not exists paid_at timestamptz;
alter table public.payments add column if not exists channel text;
alter table public.payments add column if not exists failure_reason text;
create unique index if not exists payments_provider_transaction_key on public.payments(provider_transaction_id) where provider_transaction_id is not null;
create index if not exists payments_status_created_idx on public.payments(status,created_at desc);

alter table public.service_orders add column if not exists payment_id uuid references public.payments(id) on delete set null;
alter table public.service_orders add column if not exists payment_status text not null default 'unpaid';
alter table public.service_orders add column if not exists deposit_paid_at timestamptz;
do $$ begin
  if not exists(select 1 from pg_constraint where conname='service_orders_payment_status_check') then
    alter table public.service_orders add constraint service_orders_payment_status_check check(payment_status in ('unpaid','pending','paid','failed','refunded'));
  end if;
end $$;
create index if not exists service_orders_payment_idx on public.service_orders(payment_id);

alter table public.matho_access_requests add column if not exists payment_id uuid references public.payments(id) on delete set null;
alter table public.matho_access_requests add column if not exists paid_at timestamptz;
alter table public.matho_access_requests add column if not exists subscription_status text;
do $$ begin
  if not exists(select 1 from pg_constraint where conname='matho_access_requests_subscription_status_check') then
    alter table public.matho_access_requests add constraint matho_access_requests_subscription_status_check check(subscription_status is null or subscription_status in ('pending','active','attention','cancelled'));
  end if;
end $$;
create index if not exists matho_access_requests_payment_idx on public.matho_access_requests(payment_id);

alter table public.subscriptions add column if not exists request_id uuid references public.matho_access_requests(id) on delete set null;
alter table public.subscriptions add column if not exists source_payment_id uuid references public.payments(id) on delete set null;
alter table public.subscriptions add column if not exists provider_plan_code text;
create unique index if not exists subscriptions_provider_code_key on public.subscriptions(provider_subscription_code) where provider_subscription_code is not null;
create unique index if not exists subscriptions_request_key on public.subscriptions(request_id) where request_id is not null;
create index if not exists subscriptions_source_payment_idx on public.subscriptions(source_payment_id);

alter table public.commerce_orders drop constraint if exists commerce_orders_item_kind_check;
alter table public.commerce_orders add constraint commerce_orders_item_kind_check check(item_kind in ('digital_product','course','membership','service','diagnostic','topic_pack','mathoepedia'));

drop policy if exists "matho access requests server only" on public.matho_access_requests;
drop policy if exists "matho teacher access server only" on public.matho_teacher_access;
create policy "matho access requests server only" on public.matho_access_requests for all to anon,authenticated using(false) with check(false);
create policy "matho teacher access server only" on public.matho_teacher_access for all to anon,authenticated using(false) with check(false);
revoke all on public.matho_access_requests,public.matho_teacher_access from anon,authenticated;
grant all on public.matho_access_requests,public.matho_teacher_access to service_role;
