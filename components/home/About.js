"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '4000+', label: 'Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'On-Time Project Delivery' },
];

export default function About() {
  const containerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        once: true,
      },
    });

    // Eyebrow
    tl.fromTo(eyebrowRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );

    // Body text
    tl.fromTo(textRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      '-=0.4'
    );

    // Stats stagger
    tl.fromTo(statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
      '-=0.5'
    );

    // Image clip-path reveal
    gsap.fromTo(imageRef.current,
      { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.08 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );
  }, []);

  const text =
    'Welcome to SGD Group of Companies, South India\'s leading aluminum doors and windows brand with over 10 years of expertise in delivering premium glass and window solutions. We specialize in pre-engineered aluminum windows and doors for residential and commercial spaces, serving 4,000+ premium homes across Kerala, Tamil Nadu, and Karnataka. Our professional customer service, on-time delivery, and exceptional craftsmanship ensure every project combines durability, elegance, and complete customer satisfaction.';

  return (
    <section className={styles.about} id="about" ref={containerRef}>
      <div className={`container ${styles.grid}`}>

        {/* ── Left Column ── */}
        <div className={styles.content}>
          <p className={styles.eyebrow} ref={eyebrowRef}>
            About SGD Group of Companies
          </p>

          <div ref={textRef}>
            <p className={`${styles.bodyText} ${expanded ? '' : styles.bodyTextClamped}`}>{text}</p>
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => setExpanded(v => !v)}
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          </div>

          {/* Stats */}
          <div className={styles.statsCard}>
            <div className={styles.statsRow}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={styles.statItem}
                  ref={el => (statsRef.current[i] = el)}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Column — Image ── */}
        <div className={styles.imageWrapper} ref={imageRef}>
          <Image
            src="/about.png"
            alt="About SGD Group"
            fill
            className={styles.image}
            sizes="(max-width: 992px) 100vw, 45vw"
          />
        </div>

      </div>
    </section>
  );
}