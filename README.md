This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Backend: form submissions

The contact form, the "Enquire Now" modal, and the careers "Apply Now" modal all save to a
Supabase (Postgres) database via Next.js Server Actions in `lib/actions/submissions.js`.
Submissions (plus uploaded CVs) can be viewed at `/admin`, which is protected by a password.

### One-time setup

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** in the Supabase dashboard, paste the contents of
   [`db/schema.sql`](db/schema.sql), and run it. This creates the `submissions` table and a
   private `cvs` storage bucket for CV uploads.
3. In **Project Settings → API**, copy the **Project URL** and the **service_role** key
   (not the `anon` key — the service role key is secret and must never be exposed to the browser).
4. Copy `.env.example` to `.env.local` and fill in:
   - `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` — from step 3
   - `ADMIN_PASSWORD` — the password you'll use to log into `/admin`
   - `ADMIN_SESSION_SECRET` — any long random string (e.g. `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
5. Run `npm run dev` and submit a test enquiry, then visit `/admin` to confirm it shows up.

### Deploying (Vercel)

Add the same four environment variables in the Vercel project's **Settings → Environment
Variables**, then redeploy. Since the frontend is already connected to this git repo, pushing
to the branch Vercel tracks (or merging to `main`) will build and deploy the backend along with
it — no separate hosting is needed. Vercel's free tier is enough to let a client test the site
before it's handed off to their own server.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
