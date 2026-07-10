"use client";

import { useState } from 'react';
import styles from '@/app/products/slim-window-systems/Overview.module.css';

const accordionItems = [
  {
    title: 'Architect-grade precision',
    body: 'Every Signature Series profile is engineered to tighter tolerances than our standard range, built for projects where every sightline and joint is scrutinised.',
  },
  {
    title: 'A finish for every facade',
    body: 'From matte anodised to bold custom powder coats, the Signature Series offers an extended palette of finishes to match any architectural vision.',
  },
  {
    title: 'Engineered for scale',
    body: 'Reinforced profiles and heavy-duty hardware support oversized panels and tall openings without compromising on operation or security.',
  },
  {
    title: 'Backed by our best warranty',
    body: 'Signature Series systems carry our longest hardware and finish warranties, reflecting the premium materials used throughout.',
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
            The Signature Series is our premium collection, designed for architects and homeowners who want more — more scale, more finish options, more engineering headroom. Every system in the line shares the same DNA: slim sightlines, reinforced hardware, and a level of finish that holds up to close inspection, project after project.
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
          <img src="/services/services-04.png" alt="Why choose SGD Signature Series" />
        </div>

      </div>
    </section>
  );
}
