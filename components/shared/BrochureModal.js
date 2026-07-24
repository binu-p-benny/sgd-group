"use client";

import { useEffect, useActionState } from 'react';
import { submitBrochureRequest } from '@/lib/actions/submissions';
import styles from './BrochureModal.module.css';

const initialState = { error: null, success: false };
const BROCHURE_PATH = '/test.pdf';

export default function BrochureModal({ onClose }) {
  const [state, formAction, pending] = useActionState(submitBrochureRequest, initialState);

  // Lock background scroll + close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Kick off the download automatically once the lead is saved
  useEffect(() => {
    if (!state.success) return;
    const link = document.createElement('a');
    link.href = BROCHURE_PATH;
    link.download = 'SGD-Group-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [state.success]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Download Brochure">
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {state.success ? (
          <div className={styles.success}>
            <h3 className={styles.modalTitle}>Thank you!</h3>
            <p className={styles.modalSub}>Your download should start automatically.</p>
            <a href={BROCHURE_PATH} download="SGD-Group-Brochure.pdf" className={styles.submitBtn}>
              Download Brochure
            </a>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <p className={styles.modalEyebrow}>Get the Brochure</p>
              <h3 className={styles.modalTitle}>Download Brochure</h3>
              <p className={styles.modalSub}>Share your details and the download will start right away.</p>
            </div>

            <form className={styles.form} action={formAction}>
              <div className={styles.field}>
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className={styles.field}>
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <label>Email</label>
                <input type="email" name="email" placeholder="you@email.com" required />
              </div>
              {state.error && <p className={`${styles.fieldFull} ${styles.errorMsg}`}>{state.error}</p>}
              <button type="submit" className={styles.submitBtn} disabled={pending}>
                {pending ? 'Submitting...' : 'Download Brochure'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
