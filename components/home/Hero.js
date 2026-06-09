"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRefs = useRef([]);

  useEffect(() => {
    // Initial Load Animation
    const tl = gsap.timeline();

    tl.fromTo(imageRef.current, 
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'power3.out'
      }
    )
    .fromTo(titleRefs.current, 
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      }, 
      "-=1.5"
    );

    // Scroll Parallax Animation
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  const titleLines = [
    "Expert Glass & Window Solutions",
    "10 Years of Excellence",
    "in Installation and Service."
  ];

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.bgWrapper}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className={styles.bgImage} 
          ref={imageRef}
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className="text-display">
          {titleLines.map((line, i) => (
            <span key={i} className={styles.titleLine}>
              <span className={styles.titleText} ref={el => titleRefs.current[i] = el}>
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
