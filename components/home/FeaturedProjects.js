"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FeaturedProjects.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Nikshan Electronics', img: '/project-nikshan.png' },
  { title: 'Eham Digital',        img: '/project-eham.png'   },
  { title: 'Loshidh Thrissur',    img: '/project-loshidh.png'},
  { title: 'Jabir Kottakal',      img: '/project-Jabir.png'  },
];

export default function FeaturedProjects() {
  const sectionRef  = useRef(null);
  const titleRef    = useRef(null);
  const cardsRef    = useRef([]);
  const footerRef   = useRef(null);

  useEffect(() => {
    // Title
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 82%', once: true },
      }
    );

    // Cards stagger
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 1.1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current[0], start: 'top 84%', once: true },
      }
    );

    // Footer button
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 92%', once: true },
      }
    );
  }, []);

  return (
    <section className={styles.section} id="featured-projects" ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── Centered title ── */}
        <h2 className={styles.title} ref={titleRef}>Featured Projects</h2>

        {/* ── 2×2 grid ── */}
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={styles.card}
              ref={el => (cardsRef.current[i] = el)}
            >
              <img
                src={project.img}
                alt={project.title}
                className={styles.cardImg}
              />

              {/* Bottom gradient bar */}
              <div className={styles.cardBar}>
                <span className={styles.cardName}>{project.title}</span>
                <button className={styles.viewBtn}>View more</button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer button ── */}
        <div className={styles.footer} ref={footerRef}>
          <button className={styles.allBtn}>View all Projects</button>
        </div>

      </div>
    </section>
  );
}