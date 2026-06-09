"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './PageHero.module.css';

export default function PageHero({ label, title, subtitle, bg = '/hero.png' }) {
  const titleRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(
      metaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <div ref={metaRef} className={styles.meta}>
          <span className={styles.label}>{label}</span>
        </div>
        <h1 ref={titleRef} className={`text-h1 ${styles.title}`}>{title}</h1>
        {subtitle && <p className={`text-body-lg ${styles.subtitle}`}>{subtitle}</p>}
      </div>
    </section>
  );
}
