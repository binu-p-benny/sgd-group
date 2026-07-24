"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './FloatingButtons.module.css';
import EnquiryModal from '@/components/shared/EnquiryModal';
import BrochureModal from '@/components/shared/BrochureModal';

const WHATSAPP_NUMBER = '919778151162';
const PHONE_NUMBER = '+919778151162';

export default function FloatingButtons() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  return (
    <>
      {/* ── Left: Download Brochure ── */}
      <button
        type="button"
        onClick={() => setBrochureOpen(true)}
        className={styles.brochureTab}
        aria-label="Download Brochure"
      >
        <span className={styles.brochureText}>Download Brochure</span>
        <svg className={styles.brochureIcon} viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15V3m0 12-4-4m4 4 4-4" />
          <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
        </svg>
      </button>

      {/* ── Right: Enquire Now floating widget ── */}
      {/*
        Figma: Frame 16 — 197 × 187 px, fixed right
          ├─ Frame 17 (icon) — 98 × 98 px, centered horizontally, top: 38 px
          │    └─ chat bubbles image + 3 white dots
          └─ Frame 15 (pill) — 151 × 35 px, left: 23 px, top: 142 px
               background: #F5F4EF, border-radius: 44 px
               text: "ENQUIRE NOW", Inter SemiBold 14 px, letter-spacing 0.7 px
      */}
      <button
        type="button"
        onClick={() => setEnquireOpen(true)}
        className={styles.enquireWidget}
        aria-label="Enquire Now"
      >
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

      {/* ── Mobile-only sticky bottom action bar ── */}
      <div className={styles.mobileActionBar}>
        <button type="button" onClick={() => setEnquireOpen(true)} className={styles.actionItem} aria-label="Enquire Now">
          <svg className={styles.actionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>Enquire Now</span>
        </button>

        <a href={`tel:${PHONE_NUMBER}`} className={styles.actionItem} aria-label="Call Us">
          <svg className={styles.actionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call Us</span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionItem}
          aria-label="WhatsApp"
        >
          <svg className={styles.actionIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>

      {enquireOpen && <EnquiryModal onClose={() => setEnquireOpen(false)} />}
      {brochureOpen && <BrochureModal onClose={() => setBrochureOpen(false)} />}
    </>
  );
}