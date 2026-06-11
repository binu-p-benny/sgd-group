"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from './AboutMission.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMission() {
  const sectionRef  = useRef(null);
  const imgRef      = useRef(null);
  const eyebrowRef  = useRef(null);
  const bodyRef     = useRef(null);
  const btnRef      = useRef(null);

  useEffect(() => {
    // Image reveal
    gsap.fromTo(imgRef.current,
      { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.06 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Text stagger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });

    tl.fromTo(eyebrowRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo(bodyRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(btnRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── Left — image ── */}
        <div className={styles.imgWrap} ref={imgRef}>
          <img
            src="/about.png"
            alt="SGD Group — Our Mission"
            className={styles.img}
          />
        </div>

        {/* ── Right — text ── */}
        <div className={styles.content}>

          {/* Eyebrow — Inter SemiBold 14px, uppercase, ls 1.4px, opacity 0.7 */}
          <p className={styles.eyebrow} ref={eyebrowRef}>Our Mission</p>

          {/* Body — Inter 400, 20px, lh 34px */}
          <p className={styles.body} ref={bodyRef}>
            At SGD Group Of Companies, our mission is to provide exceptional glass and window solutions that exceed customer expectations. We are dedicated to delivering top-quality craftsmanship and unparalleled service, ensuring that every project enhances the aesthetic and functional value of residential and commercial properties. Our team is committed to precision, care, and continuous improvement, creating lasting partnerships with our clients through trust and reliability.
          </p>

          {/* CTA button — pill, border 1px rgba(17,17,17,0.1) */}
          <Link href="/products" className={styles.btn} ref={btnRef}>
            View all Products
          </Link>

        </div>
      </div>
    </section>
  );
}