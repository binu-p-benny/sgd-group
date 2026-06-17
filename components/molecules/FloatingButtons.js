"use client";

import { useState } from 'react';
import styles from './FloatingButtons.module.css';
import EnquiryModal from '@/components/shared/EnquiryModal';

export default function FloatingButtons() {
  const [enquireOpen, setEnquireOpen] = useState(false);

  return (
    <>
      {/* ── Left: Download Brochure ── */}
      <a href="#" className={styles.brochureTab} aria-label="Download Brochure">
        <span className={styles.brochureText}>Download Brochure</span>
        <svg className={styles.brochureIcon} viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15V3m0 12-4-4m4 4 4-4" />
          <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
        </svg>
      </a>

      {/* ── Right: Enquire Now floating widget ── */}
      {/*
        Figma: Frame 16 — 197 × 187 px, fixed right
          ├─ Frame 17 (icon) — 98 × 98 px, centered horizontally, top: 38 px
          │    └─ chat bubbles image + 3 white dots
          └─ Frame 15 (pill) — 151 × 35 px, left: 23 px, top: 142 px
               background: #F5F4EF, border-radius: 44 px
               text: "ENQUIRE NOW", Inter SemiBold 14 px, letter-spacing 0.7 px
      */}
      <button type="button" onClick={() => setEnquireOpen(true)} className={styles.enquireWidget} aria-label="Enquire Now">
        {/* Chat bubbles icon — matches Figma image 23 */}
        <div className={styles.enquireIconWrap}>
          <svg className={styles.enquireIcon} viewBox="0 0 98 98" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Left bubble */}
            <rect x="14" y="28" width="40" height="32" rx="8" fill="#351D0D" />
            <polygon points="18,58 18,70 30,58" fill="#351D0D" />
            {/* Right bubble (front) */}
            <rect x="36" y="36" width="46" height="34" rx="8" fill="#351D0D" />
            <polygon points="76,68 76,80 62,68" fill="#351D0D" />
            {/* Three dots on right bubble */}
            <circle cx="50" cy="53" r="3.2" fill="#F5F4EF" />
            <circle cx="59" cy="53" r="3.2" fill="#F5F4EF" />
            <circle cx="68" cy="53" r="3.2" fill="#F5F4EF" />
          </svg>
        </div>

        {/* Pill label */}
        <span className={styles.enquireLabel}>Enquire Now</span>
      </button>

      {enquireOpen && <EnquiryModal onClose={() => setEnquireOpen(false)} />}
    </>
  );
}