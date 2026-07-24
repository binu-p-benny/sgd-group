"use client";

import { useState } from 'react';
import styles from './post.module.css';

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={styles.faq}>
      <div className={styles.faqInner}>
        <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((item, i) => (
            <div key={item.q} className={styles.faqItem}>
              <button
                type="button"
                className={styles.faqQuestion}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className={`${styles.faqIcon} ${openIndex === i ? styles.faqIconOpen : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="5" y1="12" x2="19" y2="12" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className={`${styles.faqAnswer} ${openIndex === i ? styles.faqAnswerOpen : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
