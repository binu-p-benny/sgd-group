"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Products.module.css';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: 'Aluminium Window', img: '/project-nikshan.png' },
  { label: 'Aluminium Doors',  img: '/project-eham.png'   },
  { label: 'Facades',          img: '/project-loshidh.png' },
  { label: 'Interior',         img: '/project-Jabir.png'  },
];

export default function Products() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    // Header block fade-up
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 80%', once: true },
      }
    );

    // Cards stagger reveal
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 40, scale: 1.04 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current[0], start: 'top 82%', once: true },
      }
    );
  }, []);

  return (
    <section className={styles.projects} id="projects" ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={styles.headerBlock} ref={headerRef}>
          {/* Title row */}
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Engineered Systems for Modern Spaces -- products</h2>
          </div>

          {/* Description + button row (right-aligned per Figma) */}
          <div className={styles.descRow}>
            <p className={styles.desc}>
              From precision-crafted aluminum windows to large-scale facades, our solutions are
              designed for durability, performance, and seamless integration across residential
              and commercial environments.
            </p>
            <button className={styles.viewBtn}>View all Products</button>
          </div>
        </div>

        {/* ── 4-column card grid ── */}
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={styles.card}
              ref={el => (cardsRef.current[i] = el)}
            >
              <img src={cat.img} alt={cat.label} className={styles.cardImg} />

              {/* Bottom gradient + label */}
              <div className={styles.cardOverlay}>
                <span className={styles.cardLabel}>{cat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}