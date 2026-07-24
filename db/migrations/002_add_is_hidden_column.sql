-- Run this in the Supabase SQL Editor for existing projects.
-- Adds a soft-hide flag to submissions instead of ever deleting rows.

alter table submissions
  add column if not exists is_hidden boolean not null default false;

create index if not exists submissions_is_hidden_idx on submissions (is_hidden);
