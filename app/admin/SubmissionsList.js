"use client";

import { useState } from 'react';
import { setSubmissionHidden, permanentlyDeleteSubmission } from '@/lib/actions/admin';
import { formatDate } from '@/lib/formatDate';
import styles from './admin.module.css';

function confirmDelete(name) {
  return window.confirm(
    `Permanently remove ${name}'s submission from the admin panel?\n\nThis can't be undone from here.`
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6L18 18M18 6L6 18" />
    </svg>
  );
}

export default function SubmissionsList({ submissions, cvUrlMap, showHidden }) {
  const [activeId, setActiveId] = useState(null);
  const active = submissions.find((s) => s.id === activeId) || null;
  const emptyMessage = showHidden ? 'No hidden submissions.' : 'No submissions yet.';

  return (
    <>
      {/* ── Desktop table ── */}
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
                <td>{formatDate(s.created_at)}</td>
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
                  <div className={styles.rowActions}>
                    <form action={setSubmissionHidden}>
                      <input type="hidden" name="id" value={s.id} />
                      <input type="hidden" name="hidden" value={showHidden ? 'false' : 'true'} />
                      <button type="submit" className={styles.actionBtn}>
                        {showHidden ? 'Restore' : 'Remove'}
                      </button>
                    </form>
                    {showHidden && (
                      <form
                        action={permanentlyDeleteSubmission}
                        onSubmit={(e) => {
                          if (!confirmDelete(s.name)) e.preventDefault();
                        }}
                      >
                        <input type="hidden" name="id" value={s.id} />
                        <button type="submit" className={styles.deleteBtn}>
                          Delete Permanently
                        </button>
                      </form>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {submissions.length === 0 && <p className={styles.empty}>{emptyMessage}</p>}
      </div>

      {/* ── Mobile card list ── */}
      <div className={styles.cardList}>
        {submissions.map((s) => (
          <div key={s.id} className={styles.card}>
            <div className={styles.cardInfo}>
              <span className={styles.badge} data-type={s.type}>{s.type}</span>
              <p className={styles.cardName}>{s.name}</p>
              <p className={styles.cardMeta}>{formatDate(s.created_at)}</p>
            </div>
            <button
              type="button"
              className={styles.viewBtn}
              aria-label={`View details for ${s.name}`}
              onClick={() => setActiveId(s.id)}
            >
              <EyeIcon />
            </button>
          </div>
        ))}
        {submissions.length === 0 && <p className={styles.empty}>{emptyMessage}</p>}
      </div>

      {/* ── Mobile detail overlay ── */}
      {active && (
        <div className={styles.detailOverlay} onClick={() => setActiveId(null)}>
          <div
            className={styles.detailPanel}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} submission details`}
          >
            <button className={styles.closeBtn} onClick={() => setActiveId(null)} aria-label="Close">
              <CloseIcon />
            </button>

            <span className={styles.badge} data-type={active.type}>{active.type}</span>
            <h2 className={styles.detailName}>{active.name}</h2>
            <p className={styles.detailDate}>{formatDate(active.created_at)}</p>

            <div className={styles.detailField}>
              <span className={styles.detailLabel}>Email</span>
              <a href={`mailto:${active.email}`} className={styles.detailValue}>{active.email}</a>
            </div>

            <div className={styles.detailField}>
              <span className={styles.detailLabel}>Phone</span>
              {active.phone ? (
                <a href={`tel:${active.phone}`} className={styles.detailValue}>{active.phone}</a>
              ) : (
                <span className={styles.detailValue}>—</span>
              )}
            </div>

            {active.role && (
              <div className={styles.detailField}>
                <span className={styles.detailLabel}>Role</span>
                <span className={styles.detailValue}>{active.role}</span>
              </div>
            )}

            {active.message && (
              <div className={styles.detailField}>
                <span className={styles.detailLabel}>Message</span>
                <span className={styles.detailValue}>{active.message}</span>
              </div>
            )}

            {active.cv_path && cvUrlMap[active.cv_path] && (
              <div className={styles.detailField}>
                <span className={styles.detailLabel}>CV</span>
                <a
                  href={cvUrlMap[active.cv_path]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailValue}
                >
                  Download CV
                </a>
              </div>
            )}

            <form action={setSubmissionHidden} onSubmit={() => setActiveId(null)}>
              <input type="hidden" name="id" value={active.id} />
              <input type="hidden" name="hidden" value={showHidden ? 'false' : 'true'} />
              <button type="submit" className={styles.detailActionBtn}>
                {showHidden ? 'Restore' : 'Remove'}
              </button>
            </form>

            {showHidden && (
              <form
                action={permanentlyDeleteSubmission}
                onSubmit={(e) => {
                  if (!confirmDelete(active.name)) {
                    e.preventDefault();
                    return;
                  }
                  setActiveId(null);
                }}
              >
                <input type="hidden" name="id" value={active.id} />
                <button type="submit" className={styles.detailDeleteBtn}>
                  Delete Permanently
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
