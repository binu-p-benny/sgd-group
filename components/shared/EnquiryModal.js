"use client";

import { useState, useEffect } from 'react';
import styles from './EnquiryModal.module.css';

export default function EnquiryModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to a backend / email service
    setSubmitted(true);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Enquire Now">
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {submitted ? (
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

            <form className={styles.form} onSubmit={handleSubmit}>
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
              <button type="submit" className={styles.submitBtn}>Send Enquiry</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
