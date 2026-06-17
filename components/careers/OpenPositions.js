"use client";

import { useState, useEffect } from 'react';
import styles from './OpenPositions.module.css';

export default function OpenPositions({ openings }) {
  const [activeRole, setActiveRole] = useState(null);

  const openModal = (role) => setActiveRole(role);
  const closeModal = () => setActiveRole(null);

  return (
    <section className="section container">
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <p className={styles.eyebrow}>Open Positions</p>
        <h2 className="text-h2" style={{ marginBottom: '3rem', maxWidth: 500 }}>We're hiring.</h2>

        <div className={styles.list}>
          {openings.map((job) => (
            <div key={job.role} className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.tags}>
                  <span className={styles.tagType}>{job.type}</span>
                  <span className={styles.tagLocation}>{job.location}</span>
                </div>
                <h3 className="text-h3" style={{ marginBottom: '0.5rem' }}>{job.role}</h3>
                <p className={styles.cardDesc}>{job.desc}</p>
              </div>
              <button className={styles.applyBtn} onClick={() => openModal(job.role)}>
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {/* General application */}
        <div className={styles.general}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: '0.75rem' }}>Don't see your role?</h3>
            <p style={{ opacity: 0.65 }}>Send us your CV and we'll keep you in mind for future openings.</p>
          </div>
          <button className={styles.generalBtn} onClick={() => openModal('General Application')}>
            Send Your CV
          </button>
        </div>
      </div>

      {activeRole && <ApplyModal role={activeRole} onClose={closeModal} />}
    </section>
  );
}

function ApplyModal({ role, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

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
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Apply for ${role}`}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {submitted ? (
          <div className={styles.success}>
            <h3 className={styles.modalTitle}>Application received</h3>
            <p className={styles.modalSub}>Thanks for applying for <strong>{role}</strong>. Our team will review your details and get back to you.</p>
            <button className={styles.submitBtn} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <p className={styles.modalEyebrow}>Apply for</p>
              <h3 className={styles.modalTitle}>{role}</h3>
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
                <label>Upload CV (PDF, DOC)</label>
                <label className={styles.fileInput}>
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                  />
                  <span className={styles.fileBtn}>Choose file</span>
                  <span className={styles.fileName}>{fileName || 'No file selected'}</span>
                </label>
              </div>
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <label>Message (optional)</label>
                <textarea name="message" rows={2} placeholder="Tell us a bit about yourself..." />
              </div>
              <button type="submit" className={styles.submitBtn}>Submit Application</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
