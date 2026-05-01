-- Supabase schema + RLS for BudgetOS
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  user_id uuid not null unique references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  type text not null,
  balance numeric(12,2) default 0,
  created_at timestamptz default now()
);
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  kind text not null check (kind in ('income','expense')),
  created_at timestamptz default now()
);
create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  account_id uuid references accounts(id) on delete set null,
  category_id uuid references categories(id) on delete set null,
  date date not null,
  description text not null,
  amount numeric(12,2) not null,
  type text not null check (type in ('income','expense')),
  notes text,
  created_at timestamptz default now()
);
create table if not exists budgets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  category_id uuid references categories(id) on delete cascade,
  month date not null,
  amount numeric(12,2) not null,
  created_at timestamptz default now()
);
create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  amount numeric(12,2) not null,
  billing_cycle text not null,
  category_id uuid references categories(id) on delete set null,
  next_payment_date date,
  status text not null default 'active',
  created_at timestamptz default now()
);
create table if not exists goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  target_amount numeric(12,2) not null,
  current_amount numeric(12,2) default 0,
  deadline date,
  notes text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table accounts enable row level security;
alter table categories enable row level security;
alter table transactions enable row level security;
alter table budgets enable row level security;
alter table subscriptions enable row level security;
alter table goals enable row level security;

create policy "owner access" on profiles for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "owner access" on accounts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "owner access" on categories for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "owner access" on transactions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "owner access" on budgets for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "owner access" on subscriptions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "owner access" on goals for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
