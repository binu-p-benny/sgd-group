-- Run this in the Supabase SQL Editor for existing projects.
-- Allows submissions.type to also accept 'brochure' — leads captured
-- from the "Download Brochure" form before the PDF download starts.

alter table submissions drop constraint if exists submissions_type_check;
alter table submissions add constraint submissions_type_check
  check (type in ('contact', 'enquiry', 'career', 'brochure'));
