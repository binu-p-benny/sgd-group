import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { adminLogout, setSubmissionHidden } from '@/lib/actions/admin';
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
        <form action={adminLogout}>
          <button type="submit" className={styles.logoutBtn}>Log out</button>
        </form>
      </div>

      <div className={styles.tabs}>
        <Link href="/admin" className={styles.tab} data-active={!showHidden}>Active</Link>
        <Link href="/admin?view=hidden" className={styles.tab} data-active={showHidden}>Hidden</Link>
      </div>

      {error && <p className={styles.error}>Could not load submissions: {error.message}</p>}

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Message</th>
              <th>CV</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id}>
                <td>{new Date(s.created_at).toLocaleString()}</td>
                <td><span className={styles.badge} data-type={s.type}>{s.type}</span></td>
                <td>{s.name}</td>
                <td><a href={`mailto:${s.email}`}>{s.email}</a></td>
                <td>{s.phone ? <a href={`tel:${s.phone}`}>{s.phone}</a> : '—'}</td>
                <td>{s.role || '—'}</td>
                <td className={styles.message}>{s.message || '—'}</td>
                <td>
                  {s.cv_path && cvUrlMap[s.cv_path] ? (
                    <a href={cvUrlMap[s.cv_path]} target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
                <td>
                  <form action={setSubmissionHidden}>
                    <input type="hidden" name="id" value={s.id} />
                    <input type="hidden" name="hidden" value={showHidden ? 'false' : 'true'} />
                    <button type="submit" className={styles.actionBtn}>
                      {showHidden ? 'Restore' : 'Remove'}
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {submissions.length === 0 && (
          <p className={styles.empty}>
            {showHidden ? 'No hidden submissions.' : 'No submissions yet.'}
          </p>
        )}
      </div>
    </main>
  );
}
