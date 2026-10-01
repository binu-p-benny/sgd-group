"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

const mosaicImages = [
  { src: 'services/pre-Engineered-1.png',
       alt: 'Exploded display board of aluminium door hardware, including frame sections, hinges, locking mechanisms, handles, and restrictors',
        slot: 'tall'        },
  { src: 'services/Pre-Engineered-2.png',
       alt: 'Side-by-side comparison of a normal window letting in glare and heat versus a pre-engineered reflective window keeping the office cool',
                                       slot: 'topMid'      },
  { src: 'services/Pre-Engineered-3.jpg',
       alt: 'Water droplets beading on weatherproof aluminium panel finishes in multiple metallic shades',
                                 slot: 'topRight'    },
  { src: 'services/Pre-Engineered-4.png',
      alt: 'Cross-section diagram of an aluminium window profile highlighting double glazing, EPDM gasket, thermal break, drainage system, and strong profile',
                                   slot: 'bottomMid'   },
];

export default function Services() {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const mosaicRef   = useRef(null);
  const imgRefs     = useRef([]);

  // Press-to-zoom — GSAP owns the transform on these images (the scroll
  // reveal animation sets it inline), so animating scale via GSAP here
  // avoids fighting that inline style with a CSS class.
  const pressIn = (i) => {
    gsap.to(imgRefs.current[i], { scale: 1.12, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
  };
  const pressOut = (i) => {
    gsap.to(imgRefs.current[i], { scale: 1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
  };

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
              Designed for precision, our solutions ensure faster installation, lasting
              durability, elegant aesthetics, superior performance, and complete customer
              satisfaction.
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
              onPointerDown={() => pressIn(i)}
              onPointerUp={() => pressOut(i)}
              onPointerCancel={() => pressOut(i)}
              onPointerLeave={() => pressOut(i)}
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