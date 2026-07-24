import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { adminLogout } from '@/lib/actions/admin';
import SubmissionsList from './SubmissionsList';
import styles from './admin.module.css';

export const metadata = {
  title: 'Submissions | Admin',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminPage({ searchParams }) {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect('/admin/login');

  const { view } = await searchParams;
  const showHidden = view === 'hidden';

  let submissions = [];
  let error = null;
  const cvUrlMap = {};

  try {
    const supabase = supabaseAdmin();
    const result = await supabase
      .from('submissions')
      .select('*')
      .eq('is_hidden', showHidden)
      .eq('is_deleted', false)
      .order('created_at', { ascending: false });

    submissions = result.data ?? [];
    error = result.error;

    const cvPaths = submissions.filter((s) => s.cv_path).map((s) => s.cv_path);
    if (cvPaths.length > 0) {
      const { data: signedUrls } = await supabase.storage
        .from('cvs')
        .createSignedUrls(cvPaths, 60 * 60);
      signedUrls?.forEach((entry, i) => {
        if (entry.signedUrl) cvUrlMap[cvPaths[i]] = entry.signedUrl;
      });
    }
  } catch (err) {
    error = err;
  }

  return (
    <main className={styles.wrap}>
      <div className={styles.header}>
        <h1>Form Submissions</h1>
        <div className={styles.headerActions}>
          <a
            href={`/admin/export${showHidden ? '?view=hidden' : ''}`}
            className={styles.exportBtn}
          >
            Export to Excel
          </a>
          <form action={adminLogout}>
            <button type="submit" className={styles.logoutBtn}>Log out</button>
          </form>
        </div>
      </div>

      <div className={styles.tabs}>
        <Link href="/admin" className={styles.tab} data-active={!showHidden}>Active</Link>
        <Link href="/admin?view=hidden" className={styles.tab} data-active={showHidden}>Hidden</Link>
      </div>

      {error && <p className={styles.error}>Could not load submissions: {error.message}</p>}

      <SubmissionsList submissions={submissions} cvUrlMap={cvUrlMap} showHidden={showHidden} />
    </main>
  );
}
