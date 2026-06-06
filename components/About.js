"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Text Animation
    gsap.fromTo(textRef.current, 
      { 
        opacity: 0,
        y: 40 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );

    // Image Animation
    gsap.fromTo(imageRef.current,
      {
        clipPath: 'inset(100% 0% 0% 0%)',
        scale: 1.2
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );
  }, []);

  const text = "Welcome to SGD Group Of Companies , your premier partner in the service sector specializing in glass and window solutions. With 10 years of expertise, we offer a comprehensive range of services including installation and future services for residential and commercial properties. Our commitment to quality craftsmanship and customer satisfaction ensures that every project is executed with precision and care. Discover how we can enhance your space with clarity and functionality. Contact us today to schedule a consultation";

  const stats = [
    { value: '7+', label: 'Clients Served' },
    { value: '100%', label: 'Clients Satisfaction' },
    { value: 'On-Time', label: 'Project Delivery' },
  ];
  
  return (
    <section className={styles.about} id="about" ref={containerRef}>
      <div className={`container ${styles.textWrapper}`}>
        <div className={styles.content}>
          <p className={styles.title}>About SGD Group of Companies</p>
          <div ref={textRef}>
            <p className={styles.revealText}>
              {text}
            </p>
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                  {index < stats.length - 1 && <span className={styles.statDivider} aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.imageWrapper} ref={imageRef}>
          <Image 
            src="/about.png" 
            alt="About SGD Group" 
            fill 
            className={styles.image}
            sizes="(max-width: 992px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
