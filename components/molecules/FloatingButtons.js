"use client";

import styles from './FloatingButtons.module.css';

export default function FloatingButtons() {
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
      <a href="#contact" className={styles.enquireWidget} aria-label="Enquire Now">
        {/* Chat bubbles icon — matches Figma image 23 */}
        <div className={styles.enquireIconWrap}>
          <svg className={styles.enquireIcon} viewBox="0 0 98 98" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Back bubble */}
            <rect x="8" y="8" width="62" height="52" rx="13" fill="#351D0D" />
            {/* Front bubble */}
            <rect x="24" y="26" width="62" height="52" rx="13" fill="#1a0e06" />
            {/* Tail for front bubble */}
            <polygon points="24,68 24,82 38,68" fill="#1a0e06" />
            {/* Three dots */}
            <circle cx="43" cy="53" r="4" fill="#FFFFFF" />
            <circle cx="55" cy="53" r="4" fill="#FFFFFF" />
            <circle cx="67" cy="53" r="4" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Pill label */}
        <span className={styles.enquireLabel}>Enquire Now</span>
      </a>
    </>
  );
}