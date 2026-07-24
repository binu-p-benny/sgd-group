-- Run this in the Supabase SQL Editor for existing projects.
-- Adds a second soft flag: is_deleted. The "Delete Permanently" button in
-- the admin Hidden tab sets this so the row disappears from the admin UI
-- entirely (Active and Hidden), but the row is NEVER removed from the
-- database with SQL DELETE — it stays recoverable via the Supabase
-- dashboard if ever needed.

alter table submissions
  add column if not exists is_deleted boolean not null default false;

create index if not exists submissions_is_deleted_idx on submissions (is_deleted);
