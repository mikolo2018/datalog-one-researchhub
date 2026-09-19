-- Datalog commercial platform: orders, entitlements, learning, leads and private uploads

alter table public.subscriptions add column if not exists provider_subscription_code text;
alter table public.subscriptions add column if not exists provider_customer_code text;
alter table public.subscriptions add column if not exists next_charge_at timestamptz;
create unique index if not exists subscriptions_user_plan_key on public.subscriptions(user_id,plan);

create table if not exists public.commerce_orders(
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  order_number text not null unique,
  payment_id uuid not null unique references public.payments(id) on delete restrict,
  item_slug text not null,
  item_name text not null,
  item_kind text not null check(item_kind in ('digital_product','course','membership','service','diagnostic','topic_pack')),
  total_kobo bigint not null check(total_kobo>0),
  status text not null default 'paid' check(status in ('pending','paid','fulfilled','refunded','cancelled')),
  customer_email text,
  customer_name text,
  phone text,
  created_at timestamptz not null default now(),
  fulfilled_at timestamptz
);

create table if not exists public.entitlements(
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  item_slug text not null,
  item_kind text not null,
  status text not null default 'active' check(status in ('active','expired','revoked')),
  source_payment_id uuid references public.payments(id) on delete set null,
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  unique(user_id,item_slug)
);

create table if not exists public.course_enrollments(
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_slug text not null,
  status text not null default 'active' check(status in ('active','completed','paused','cancelled')),
  progress int not null default 0 check(progress between 0 and 100),
  payment_id uuid references public.payments(id) on delete set null,
  enrolled_at timestamptz not null default now(),
  completed_at timestamptz,
  unique(user_id,course_slug)
);

create table if not exists public.service_orders(
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  order_number text not null unique,
  service_slug text not null,
  customer_name text not null,
  customer_email text not null,
  phone text,
  project_title text not null,
  description text not null,
  deadline date,
  budget_range text,
  file_path text,
  status text not null default 'submitted' check(status in ('submitted','reviewing','quoted','in_progress','delivered','closed','cancelled')),
  quoted_amount_kobo bigint,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.opportunities(
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  organisation text,
  source_url text not null,
  summary text,
  deadline date,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.experts(
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  display_name text not null,
  specialty text not null,
  bio text,
  booking_item_slug text,
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.institutional_enquiries(
  id uuid primary key default gen_random_uuid(),
  organisation text not null,
  contact_name text not null,
  email text not null,
  phone text,
  organisation_type text,
  needs text not null,
  status text not null default 'new' check(status in ('new','contacted','proposal_sent','won','lost')),
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers(
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  status text not null default 'active' check(status in ('active','unsubscribed')),
  subscribed_at timestamptz not null default now()
);

create table if not exists public.referral_withdrawals(
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  amount_kobo bigint not null check(amount_kobo>0),
  status text not null default 'requested' check(status in ('requested','approved','paid','declined')),
  created_at timestamptz not null default now()
);

create index if not exists commerce_orders_user_created_idx on public.commerce_orders(user_id,created_at desc);
create index if not exists entitlements_user_status_idx on public.entitlements(user_id,status);
create index if not exists course_enrollments_user_idx on public.course_enrollments(user_id);
create index if not exists service_orders_user_created_idx on public.service_orders(user_id,created_at desc);
create index if not exists service_orders_status_created_idx on public.service_orders(status,created_at desc);
create index if not exists opportunities_published_deadline_idx on public.opportunities(is_published,deadline);
create index if not exists referral_withdrawals_user_idx on public.referral_withdrawals(user_id,created_at desc);

alter table public.commerce_orders enable row level security;
alter table public.entitlements enable row level security;
alter table public.course_enrollments enable row level security;
alter table public.service_orders enable row level security;
alter table public.opportunities enable row level security;
alter table public.experts enable row level security;
alter table public.institutional_enquiries enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.referral_withdrawals enable row level security;

drop policy if exists "commerce orders own read" on public.commerce_orders;
drop policy if exists "entitlements own read" on public.entitlements;
drop policy if exists "course enrollments own read" on public.course_enrollments;
drop policy if exists "service orders own read" on public.service_orders;
drop policy if exists "published opportunities public read" on public.opportunities;
drop policy if exists "approved experts public read" on public.experts;
drop policy if exists "referral withdrawals own read" on public.referral_withdrawals;
drop policy if exists "referral withdrawals own insert" on public.referral_withdrawals;

create policy "commerce orders own read" on public.commerce_orders for select to authenticated using((select auth.uid())=user_id);
create policy "entitlements own read" on public.entitlements for select to authenticated using((select auth.uid())=user_id);
create policy "course enrollments own read" on public.course_enrollments for select to authenticated using((select auth.uid())=user_id);
create policy "service orders own read" on public.service_orders for select to authenticated using((select auth.uid())=user_id);
create policy "published opportunities public read" on public.opportunities for select to anon,authenticated using(is_published=true);
create policy "approved experts public read" on public.experts for select to anon,authenticated using(is_approved=true);
create policy "referral withdrawals own read" on public.referral_withdrawals for select to authenticated using((select auth.uid())=user_id);
create policy "referral withdrawals own insert" on public.referral_withdrawals for insert to authenticated with check((select auth.uid())=user_id);

grant select on public.commerce_orders,public.entitlements,public.course_enrollments,public.service_orders,public.referral_withdrawals to authenticated;
grant insert on public.referral_withdrawals to authenticated;
grant select on public.opportunities,public.experts to anon,authenticated;

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('client-files','client-files',false,10485760,array['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv','application/zip','application/octet-stream'])
on conflict(id) do update set public=false,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;

drop policy if exists "clients upload own project files" on storage.objects;
drop policy if exists "clients read own project files" on storage.objects;
drop policy if exists "clients delete own project files" on storage.objects;

create policy "clients upload own project files" on storage.objects for insert to authenticated with check(bucket_id='client-files' and (storage.foldername(name))[1]=(select auth.uid())::text);
create policy "clients read own project files" on storage.objects for select to authenticated using(bucket_id='client-files' and (storage.foldername(name))[1]=(select auth.uid())::text);
create policy "clients delete own project files" on storage.objects for delete to authenticated using(bucket_id='client-files' and (storage.foldername(name))[1]=(select auth.uid())::text);

revoke execute on function public.handle_new_user() from public,anon,authenticated;
