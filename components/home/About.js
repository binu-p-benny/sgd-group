"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '7+', label: 'Clients Served' },
  { value: '100%', label: 'Clients Satisfaction' },
  { value: 'On-Time', label: 'Project Delivery' },
];

export default function About() {
  const containerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);

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
    'Welcome to SGD Group Of Companies , your premier partner in the service sector specializing in glass and window solutions. With 10 years of expertise, we offer a comprehensive range of services including installation and future services for residential and commercial properties. Our commitment to quality craftsmanship and customer satisfaction ensures that every project is executed with precision and care. Discover how we can enhance your space with clarity and functionality. Contact us today to schedule a consultation';

  return (
    <section className={styles.about} id="about" ref={containerRef}>
      <div className={`container ${styles.grid}`}>

        {/* ── Left Column ── */}
        <div className={styles.content}>
          <p className={styles.eyebrow} ref={eyebrowRef}>
            About SGD Group of Companies
          </p>

          <div ref={textRef}>
            <p className={styles.bodyText}>{text}</p>
          </div>

          {/* Stats */}
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