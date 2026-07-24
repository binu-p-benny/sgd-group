-- Run this once in your Supabase project's SQL Editor
-- (Project → SQL Editor → New query → paste → Run)

create extension if not exists "pgcrypto";

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('contact', 'enquiry', 'career')),
  name text not null,
  email text not null,
  phone text,
  message text,
  role text,
  cv_path text,
  created_at timestamptz not null default now()
);

create index if not exists submissions_created_at_idx on submissions (created_at desc);

alter table submissions enable row level security;
-- No policies are added on purpose: the app only ever talks to this table
-- using the Supabase service role key (server-side only), which bypasses
-- RLS. The public/anon key therefore has zero access to this table.

-- Private bucket for career-application CVs (accessed only via signed URLs
-- generated server-side with the service role key).
insert into storage.buckets (id, name, public)
values ('cvs', 'cvs', false)
on conflict (id) do nothing;
