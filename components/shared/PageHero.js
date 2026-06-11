"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './PageHero.module.css';

export default function PageHero({ label, title, subtitle, bg = '/hero.png' }) {
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Image subtle scale-in
    gsap.fromTo(
      imageRef.current,
      { scale: 1.06, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: 'power3.out' }
    );
    // Title slide up
    gsap.fromTo(
      titleRef.current,
      { y: 48, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background image as separate element for parallax-readiness */}
      <div
        className={styles.bgImage}
        ref={imageRef}
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Flat 45% black overlay — matches Figma */}
      <div className={styles.overlay} />

      {/* Content anchored bottom-left */}
      <div className={`container ${styles.content}`}>
        <h1 ref={titleRef} className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}