"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from './AboutVision.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutVision() {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const eyebrowRef  = useRef(null);
  const bodyRef     = useRef(null);
  const btnRef      = useRef(null);
  const imgRef      = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    });

    tl.fromTo(headingRef.current,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    )
    .fromTo(eyebrowRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(bodyRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(btnRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // Full-width image reveal
    gsap.fromTo(imgRef.current,
      { clipPath: 'inset(0% 100% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── Top row: heading (left) + vision text (right) ── */}
        <div className={styles.topRow}>

          {/* Left — big heading */}
          <div className={styles.headingCol}>
            <h2 className={styles.heading} ref={headingRef}>
              Shaping Future Spaces with clarity, precision, and purpose
            </h2>
          </div>

          {/* Right — eyebrow + body + cta */}
          <div className={styles.textCol}>
            <p className={styles.eyebrow} ref={eyebrowRef}>Our Vision</p>
            <p className={styles.body} ref={bodyRef}>
              Our vision is to become the industry leader in glass and window solutions, recognized for our innovation, quality, and customer-centric approach. We aspire to set new standards in the service sector by consistently delivering superior products and services that transform spaces. Through sustainable practices and a focus on excellence, we aim to drive growth and positively impact the communities we serve.
            </p>
            <Link href="/products/inner" className={styles.btn} ref={btnRef}>
              Explore More
            </Link>
          </div>

        </div>

        {/* ── Full-width image ── */}
        <div className={styles.imgWrap} ref={imgRef}>
          <img
            src="/showroom.png"
            alt="SGD Group — Shaping Future Spaces"
            className={styles.img}
          />
        </div>

      </div>
    </section>
  );
}