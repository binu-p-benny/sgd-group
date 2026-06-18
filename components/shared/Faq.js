"use client";

import { useState } from 'react';
import styles from './Faq.module.css';

const defaultItems = [
  {
    q: 'What types of aluminium systems do you offer?',
    a: 'We offer a full range of aluminium systems including sliding windows, casement/openable windows, folding windows, aluminium doors, casement door systems, and slim window systems — for both residential and commercial projects.',
  },
  {
    q: 'Are your aluminium systems suitable for residential projects?',
    a: 'Absolutely. Our systems are designed for both homes and commercial spaces, combining clean aesthetics, natural light, and everyday practicality with long-term durability.',
  },
  {
    q: 'Do you provide installation services?',
    a: 'Yes. We handle the complete process — from precise measurement and factory finishing to professional on-site installation — ensuring an accurate fit and a flawless finish.',
  },
  {
    q: 'Can aluminium systems be customized?',
    a: 'Every system is tailored to your space. We customise profiles, finishes, glass, and hardware to match your design requirements and performance needs.',
  },
  {
    q: 'Are aluminium windows and doors durable?',
    a: 'Aluminium is corrosion-resistant, weatherproof, and built for long-term performance. Paired with premium hardware and quality seals, our systems are made to last.',
  },
  {
    q: 'Do your systems support large glass panels?',
    a: 'Yes. Our engineered profiles support large, expansive glass panels — maximising natural light and unobstructed views while maintaining structural integrity.',
  },
];

export default function Faq({ title = 'Frequently Asked Questions', items = defaultItems }) {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.list}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={styles.item}>
                <button
                  className={styles.row}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={styles.question}>{item.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
