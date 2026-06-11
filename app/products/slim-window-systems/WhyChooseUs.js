"use client";

import { useState } from 'react';
import styles from './Overview.module.css';

const accordionItems = [
  {
    title: 'Built to last, designed to endure',
    body: 'Our aluminium profiles are precision-engineered for maximum strength and longevity, resistant to rust, corrosion, and warping — even in Kerala\'s coastal climate.',
  },
  {
    title: 'Slim frames, endless views',
    body: 'Ultra-slim sightlines maximise natural light and deliver unobstructed panoramic views, blending architecture with the landscape.',
  },
  {
    title: 'Keep your home cozy and energy-smart',
    body: 'Insulated glass combined with thermal break technology reduces heat transfer, cuts energy bills, and maintains a comfortable indoor temperature year-round.',
  },
  {
    title: 'Durability & Strength',
    body: 'Backed by Saint-Gobain toughened glass and Pego Hardware, every system is tested for long-term performance with industry-leading warranty coverage.',
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.whySection}>
      <div className={styles.whyInner}>

        {/* Left: text + accordion */}
        <div className={styles.whyLeft}>
          <h2 className={styles.whyTitle}>Why Choose Us</h2>
          <p className={styles.whyBody}>
            Combine sleek elegance with lasting strength. Their slim frames let in more natural light and offer expansive views, while durable aluminum resists rust, corrosion, and warping for years of worry-free performance. Low-maintenance and energy-efficient with insulated glass and thermal break technology, they reduce upkeep and help save on energy bills. With a variety of colors, finishes, and styles, our windows bring both style and comfort to every home.
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

        {/* Right: image */}
        <div className={styles.whyImage}>
          <img src="/services/services-04.png" alt="Why choose SGD aluminium windows" />
        </div>

      </div>
    </section>
  );
}
