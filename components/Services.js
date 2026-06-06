"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: '01',
    title: 'Window Systems',
    img: '/hero.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 12h18M12 3v18" />
      </svg>
    ),
    products: [
      'Lumina Slim-Line Series Sliding System Windows',
      'Lumina Slim-Line Series openable windows',
      'Lumina Slim-Line Series Folding',
      'Lumina Slim-Line Series Sliding System Windows with Grill',
      'Lumina Slim-Line Series openable windows with Grill',
      'Openable Windows',
      'Algerian Sliding Windows'
    ]
  },
  {
    id: '02',
    title: 'Door Systems',
    img: '/showroom.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v18H3V3z" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    products: [
      'Lumina Slim-Line Series Sliding System Doors',
      'Lumina Slim-Line Series Openable Doors',
      'Lumina Slim-Line Series Sliding System Doors with Grill',
      'Lumina Slim-Line Series Openable Door with Grill',
      'Frameless Sliding and Open Doors',
      'Algerian Sliding Doors and Windows'
    ]
  }
];

export default function Services() {
  const containerRef = useRef(null);

  return (
    <section className={styles.services} id="services" ref={containerRef}>
      <div className={styles.serviceGrid}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceBlock}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img src={service.img} alt={service.title} className={styles.image} />
              </div>
            </div>

            <div className={styles.contentColumn}>
              <div className={styles.header}>
                <div className={styles.icon}>{service.icon}</div>
                <h2 className={styles.title}>{service.title}</h2>
              </div>

              <ul className={styles.productList}>
                {service.products.map((product, idx) => (
                  <li key={idx} className={styles.productItem}>
                    <span>{product}</span>
                    <span className={styles.arrow}>→</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
