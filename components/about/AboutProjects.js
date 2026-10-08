"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from './AboutProjects.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { src: '/project-nikshan.png',                 name: 'Nikshan Electronics', location: 'Kerala',     href: '/projects/nikshan-electronics' },
  { src: '/projects/eham-digital-real.jpg',      name: 'Eham Digital',       location: 'Kerala',     href: '/projects/eham-digital' },
  { src: '/projects/loshidh-thrissur-1.jpg',     name: 'Loshidh',            location: 'Kerala',     href: '/projects/loshidh-thrissur' },
  { src: '/projects/jabir-kottakal-1.jpg',       name: 'Jabir',              location: 'Tamil Nadu', href: '/projects/jabir-kottakal' },
  { src: '/projects/shameer-vengara-1.jpg',      name: 'Shameer Vengara',    location: 'Kerala',     href: '/projects/shameer-vengara' },
  { src: '/projects/nidhin-engapuzha-1.jpg',     name: 'Nidhin Engapuzha',   location: 'Kerala',     href: '/projects/nidhin-engapuzha' },
  { src: '/projects/nidhin-kannur-1.jpg',        name: 'Nidhin Kannur',      location: 'Kerala',     href: '/projects/nidhin-kannur' },
  { src: '/projects/jilce-jose-thrissur-1.jpg',  name: 'Jilce Jose',         location: 'Kerala',     href: '/projects/jilce-jose-thrissur' },
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
            <Link key={i} href={p.href} className={styles.card}>
              <img src={p.src} alt={p.name} className={styles.cardImg} />
              <div className={styles.cardOverlay}>
                <span className={styles.cardName}>{p.name}</span>
                <span className={styles.cardLocation}>{p.location}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link href="/projects" className={styles.btn} ref={btnRef}>
        View all Projects
      </Link>

    </section>
  );
}