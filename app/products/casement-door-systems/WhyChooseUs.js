"use client";

import { useState } from 'react';
import styles from '@/app/products/slim-window-systems/Overview.module.css';

const accordionItems = [
  {
    title: 'Built to last, designed to endure',
    body: 'Our casement door profiles are precision-engineered for maximum strength and longevity, resistant to rust, corrosion, and warping — even in Kerala\'s humid coastal climate.',
  },
  {
    title: 'Secure locking, every time',
    body: 'Multi-point locking mechanisms across the HL50 and HL40 series deliver reliable security and peace of mind, whether for residential entrances or high-traffic commercial spaces.',
  },
  {
    title: 'Energy-smart thermal performance',
    body: 'Thermally broken profiles combined with insulated glass reduce heat transfer, cut energy bills, and maintain a comfortable indoor temperature year-round.',
  },
  {
    title: 'Premium hardware, backed by warranty',
    body: 'Fitted with Pego Hardware and Saint-Gobain toughened glass, every door system is built for long-term performance with industry-leading warranty coverage.',
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
            Our casement door systems combine architectural precision with lasting durability. Slim profiles let in more natural light while robust aluminium construction resists rust, corrosion, and warping for years of worry-free performance. Low-maintenance and energy-efficient with insulated glass and thermal break technology, they reduce upkeep and help save on energy bills — available in a wide range of colours and finishes to suit every project.
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
          <img src="/services/services-03.png" alt="Why choose SGD casement door systems" />
        </div>

      </div>
    </section>
  );
}
