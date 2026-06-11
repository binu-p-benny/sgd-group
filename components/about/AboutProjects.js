"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from './AboutProjects.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { src: '/project-nikshan.png',  alt: 'Nikshan Electronics' },
  { src: '/project-eham.png',     alt: 'Eham Digital' },
  { src: '/project-loshidh.png',  alt: 'Loshidh Residence' },
  { src: '/project-Jabir.png',    alt: 'Jabir Residence' },
  { src: '/projects/projects-01.png', alt: 'Project 5' },
  { src: '/projects/projects-02.png', alt: 'Project 6' },
  { src: '/projects/projects-03.png', alt: 'Project 7' },
];

export default function AboutProjects() {
  const sectionRef  = useRef(null);
  const titleRef    = useRef(null);
  const trackRef    = useRef(null);
  const btnRef      = useRef(null);

  // Drag-to-scroll
  useEffect(() => {
    const el = trackRef.current.parentElement; // stripOuter
    let isDown = false, startX, scrollLeft;

    const onDown  = e => { isDown = true; el.style.cursor = 'grabbing'; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; };
    const onUp    = () => { isDown = false; el.style.cursor = 'grab'; };
    const onMove  = e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - el.offsetLeft; el.scrollLeft = scrollLeft - (x - startX) * 1.4; };

    el.addEventListener('mousedown',  onDown);
    el.addEventListener('mouseleave', onUp);
    el.addEventListener('mouseup',    onUp);
    el.addEventListener('mousemove',  onMove);
    return () => {
      el.removeEventListener('mousedown',  onDown);
      el.removeEventListener('mouseleave', onUp);
      el.removeEventListener('mouseup',    onUp);
      el.removeEventListener('mousemove',  onMove);
    };
  }, []);

  useEffect(() => {
    // Title fade in
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      }
    );

    // Cards stagger
    const cards = trackRef.current.querySelectorAll('.' + styles.card);
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
      }
    );

    // Button
    gsap.fromTo(btnRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.4,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', once: true },
      }
    );
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>

      {/* Title */}
      <h2 className={styles.title} ref={titleRef}>Completed Projects</h2>

      {/* Scrollable image strip */}
      <div className={styles.stripOuter}>
        <div className={styles.track} ref={trackRef}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <img src={p.src} alt={p.alt} className={styles.cardImg} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link href="/products/inner" className={styles.btn} ref={btnRef}>
        View all Projects
      </Link>

    </section>
  );
}