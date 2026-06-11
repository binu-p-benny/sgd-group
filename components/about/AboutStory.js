"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import styles from './AboutStory.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '7+',      label: 'Clients Served' },
  { value: '100%',    label: 'Clients Satisfaction' },
  { value: 'On-Time', label: 'Project Delivery' },
];

export default function AboutStory() {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const bodyRef     = useRef(null);
  const statsRef    = useRef([]);
  const img1Ref     = useRef(null);
  const img2Ref     = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    });

    tl.fromTo(headingRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(bodyRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(statsRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
      '-=0.4'
    );

    // Image clip-path reveal
    gsap.fromTo(img1Ref.current,
      { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.06 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );

    gsap.fromTo(img2Ref.current,
      { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.06 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.4,
        delay: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── Left column ── */}
        <div className={styles.left}>
          <div className={styles.textBlock}>
            <h2 className={styles.heading} ref={headingRef}>
              Built with Precision
            </h2>
            <p className={styles.body} ref={bodyRef}>
              For over a decade, SGD Group of Companies has been helping clients transform their spaces with high-quality glass and window solutions. We work across residential and commercial projects, offering installation and long-term service support. Our approach is simple — deliver reliable systems, execute with care, and ensure every detail is handled with precision. We believe that well-designed systems don't just serve a function — they enhance how a space looks, feels, and performs.
            </p>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {stats.map((stat, i) => (
              <React.Fragment key={stat.value}>
                <div
                  className={styles.statItem}
                  ref={el => (statsRef.current[i] = el)}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
                {i < stats.length - 1 && (
                  <div className={styles.divider} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Right column — stacked images ── */}
        <div className={styles.right}>
          {/* Large primary image */}
          <div className={styles.img1Wrap} ref={img1Ref}>
            <img
              src="/about.png"
              alt="About SGD Group"
              className={styles.img1}
            />
          </div>
          {/* Small overlay image — bottom-right */}
          <div className={styles.img2Wrap} ref={img2Ref}>
            <img
              src="/about.png"
              alt="SGD Group project"
              className={styles.img2}
            />
          </div>
        </div>

      </div>
    </section>
  );
}