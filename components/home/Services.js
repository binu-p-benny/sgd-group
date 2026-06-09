"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

// Mosaic image slots — swap src values for real assets when ready
const mosaicImages = [
  { src: 'services/services-01.png',  alt: 'Aluminium curtain wall building',      slot: 'tall'        },
  { src: 'services/services-02.png',     alt: 'Window frame detail close-up',          slot: 'topMid'      },
  { src: 'services/services-03.png',  alt: 'Window in mountain landscape',          slot: 'topRight'    },
  { src: 'services/services-04.png',         alt: 'Window cross-section diagram',          slot: 'bottomMid'   },
  { src: 'services/services-05.png',    alt: 'Premium handle and glass components',   slot: 'bottomRight' },
];

export default function Services() {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const mosaicRef   = useRef(null);
  const imgRefs     = useRef([]);

  useEffect(() => {
    // Header fade-up
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 80%', once: true },
      }
    );

    // Images stagger reveal
    gsap.fromTo(imgRefs.current,
      { opacity: 0, scale: 1.06 },
      {
        opacity: 1, scale: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: mosaicRef.current, start: 'top 80%', once: true },
      }
    );
  }, []);

  return (
    <section className={styles.services} id="services" ref={sectionRef}>

      {/* ── Inner wrapper (max 1400 px) ── */}
      <div className={styles.inner}>

        {/* ── Header row ── */}
        <div className={styles.header} ref={headerRef}>
          <div className={styles.titleCol}>
            <h2 className={styles.title}>Pre-Engineered Aluminium Window Systems</h2>
          </div>
          <div className={styles.descCol}>
            <p className={styles.desc}>
              Factory-finished aluminum window systems that reduce on-site work, ensure accurate
              fit, and deliver long-lasting durability with a premium finish.
            </p>
            <button className={styles.exploreBtn}>Explore More</button>
          </div>
        </div>

        {/* ── Image mosaic ── */}
        <div className={styles.mosaic} ref={mosaicRef}>
          {mosaicImages.map((img, i) => (
            <div
              key={img.slot}
              className={`${styles.cell} ${styles[img.slot]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={styles.cellImg}
                ref={el => (imgRefs.current[i] = el)}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}