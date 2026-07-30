"use client";

import { useState } from 'react';
import styles from '@/components/products/Overview.module.css';

const accordionItems = [
  {
    title: 'A mechanism for every opening',
    body: 'From vertical sliding sashes to parallel-opening ventilation windows, our signature systems solve openings that standard sliding or casement profiles can\'t.',
  },
  {
    title: 'Same durability, specialised motion',
    body: 'Every signature mechanism is built on our standard aluminium profiles and hardware — the same rust and corrosion resistance, just engineered for a different way of opening.',
  },
  {
    title: 'Precision hardware',
    body: 'Multi-bar hinges, friction stays, and folding-track rollers are all backed by the same Pego Hardware and 10-Year Warranty as the rest of our range.',
  },
  {
    title: 'Built for tricky openings',
    body: 'Tight spaces, wide openings, or ventilation-only requirements — our signature systems are the answer when a standard window or door won\'t fit the brief.',
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.whySection}>
      <div className={styles.whyInner}>

        <div className={styles.whyLeft}>
          <h2 className={styles.whyTitle}>Why Choose Us</h2>
          <p className={styles.whyBody}>
            Not every opening fits a standard slide or swing. Our Signature Systems cover the mechanisms in between — vertical sliding sashes, tilt & turn windows, sliding-folding doors, and parallel-opening vents — each engineered with the same durability and precision as the rest of our range, for the openings that need a different kind of solution.
          </p>

          <div className={styles.accordion}>
            {accordionItems.map((item, i) => (
              <div key={item.title} className={styles.accordionItem}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className={styles.accordionTitle}>{item.title}</span>
                  <span className={`${styles.accordionIcon} ${openIndex === i ? styles.accordionIconOpen : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="5" x2="12" y2="19" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="5" y1="12" x2="19" y2="12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`${styles.accordionBody} ${openIndex === i ? styles.accordionBodyOpen : ''}`}>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.whyImage}>
          <img src="/services/services-04.png" alt="Why choose SGD Signature Systems" />
        </div>

      </div>
    </section>
  );
}
