"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
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
      {/* Parallax background image */}
      <div className={styles.bgWrapper}>
        <img
          src="/skylight.png"
          alt=""
          className={styles.bgImage}
          ref={imageRef}
        />
      </div>

      <div className={styles.content}>

        {/* ── Row 1: Tagline + Nav columns ── */}
        <div className={styles.topRow}>
          <h2 className={`text-h1 ${styles.title}`}>Where vision meets execution.</h2>

          <div className={styles.navColumns}>
            {/* Services */}
            <div className={styles.navColumn}>
              <p className={styles.colLabelServices}>Services</p>
              <ul className={styles.colLinks}>
                <li><Link href="#">Aluminium Windows</Link></li>
                <li><Link href="#">Aluminium Doors</Link></li>
                <li><Link href="#">Facades</Link></li>
                <li><Link href="#">Interiors</Link></li>
              </ul>
            </div>
            {/* Links */}
            <div className={styles.navColumn}>
              <p className={styles.colLabel}>Links</p>
              <ul className={styles.colLinks}>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/products/aluminium-window-systems">Products</Link></li>
                <li><Link href="/products/inner">Projects</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Row 2: Description + Contact columns ── */}
        <div className={styles.midRow}>
          <div className={styles.description}>
            <p>SGD Group: Expert glass and window solutions with 10 years' experience, ensuring quality craftsmanship and customer satisfaction.</p>
          </div>

          <div className={styles.contactColumns}>
            {/* Email */}
            <div className={styles.contactBlock}>
              <p className={styles.contactLabel}>Email</p>
              <div className={styles.contactItem}>
                <svg className={styles.icon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.33" y="2.67" width="13.33" height="10.67" rx="1.33" stroke="#EAE8E3" strokeWidth="1.33"/>
                  <path d="M1.33 4.67L8 9.33L14.67 4.67" stroke="#EAE8E3" strokeWidth="1.33"/>
                </svg>
                <a href="mailto:sgdprojectmanagement@gmail.com">sgdprojectmanagement@gmail.com</a>
              </div>
            </div>

            {/* Address */}
            <div className={styles.contactBlock}>
              <p className={styles.contactLabel}>Visit our Store</p>
              <div className={styles.contactItem}>
                <svg className={styles.icon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M8 1.33C5.6 1.33 3.67 3.27 3.67 5.67C3.67 9 8 14.67 8 14.67C8 14.67 12.33 9 12.33 5.67C12.33 3.27 10.4 1.33 8 1.33Z" stroke="#EAE8E3" strokeWidth="1.33"/>
                  <circle cx="8" cy="5.67" r="1.33" stroke="#EAE8E3" strokeWidth="1.33"/>
                </svg>
                <address>SGD Group Of Companies Indus Avenue Building Pushpa Junction, Calicut</address>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.contactBlock}>
              <p className={styles.contactLabel}>Monday–Friday: 9:30am–6pm</p>
              <div className={styles.contactItem}>
                <svg className={styles.icon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M3 1.33H6L7.33 4.67L5.67 5.67C6.43 7.23 7.77 8.57 9.33 9.33L10.33 7.67L13.67 9V12C13.67 12.74 13.07 13.33 12.33 13.33C6.63 13 2.67 8.37 3 2.67C3 1.93 3.6 1.33 4.33 1.33H3Z" stroke="#EAE8E3" strokeWidth="1.33" strokeLinejoin="round"/>
                </svg>
                <div>
                  <a href="tel:+919778151162">+91 9778 151 162</a>
                  <br />
                  <a href="tel:+917026285251">+91 70262 85251</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottomBar}>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
          <div className={styles.legalLinks}>
            <a href="#">Privacy policy</a>
            <a href="#">Terms & conditions</a>
            <span>Crafted by who?</span>
          </div>
        </div>

      </div>
    </footer>
  );
}