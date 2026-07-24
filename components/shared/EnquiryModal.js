"use client";

import { useEffect, useActionState } from 'react';
import { submitEnquiry } from '@/lib/actions/submissions';
import styles from './EnquiryModal.module.css';

const initialState = { error: null, success: false };

export default function EnquiryModal({ onClose }) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);

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

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Enquire Now">
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {state.success ? (
          <div className={styles.success}>
            <h3 className={styles.modalTitle}>Thank you!</h3>
            <p className={styles.modalSub}>We've received your enquiry and will get back to you shortly.</p>
            <button className={styles.submitBtn} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <p className={styles.modalEyebrow}>Get in Touch</p>
              <h3 className={styles.modalTitle}>Enquire Now</h3>
              <p className={styles.modalSub}>Tell us what you're looking for and our team will reach out.</p>
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
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <label>Your Enquiry</label>
                <textarea name="message" rows={3} placeholder="e.g. Sliding windows for a 3BHK villa..." required />
              </div>
              {state.error && <p className={`${styles.fieldFull} ${styles.errorMsg}`}>{state.error}</p>}
              <button type="submit" className={styles.submitBtn} disabled={pending}>
                {pending ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
