"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current,
      { yPercent: -20 },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <footer className={styles.footer} id="contact" ref={footerRef}>
      <div className={styles.bgWrapper}>
        <img
          src="/skylight.png"
          alt="Footer Background"
          className={styles.bgImage}
          ref={imageRef}
        />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.top}>
          <h2 className={`text-h1 ${styles.title}`}>Where vision meets execution.</h2>
          <button className="btn-primary" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
            Get in touch
          </button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.links}>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
          </div>
          <div className={styles.links}>
            <a href="#">Privacy policy</a>
            <a href="#">Terms & conditions</a>
            <span>Crafted by CraftsmanStudioo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
