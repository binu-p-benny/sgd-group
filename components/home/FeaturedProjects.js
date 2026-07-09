"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FeaturedProjects.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Nikshan Electronics', images: ['/project-nikshan.png', '/project3.png', '/project4.png'] },
  { title: 'Eham Digital',        images: ['/project-eham.png', '/project3.png', '/project4.png']    },
  { title: 'Loshidh Thrissur',    images: ['/project-loshidh.png', '/project1.png', '/project2.png'] },
  { title: 'Jabir Kottakal',      images: ['/project-Jabir.png', '/project1.png', '/project2.png']   },
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

    // Auto-sliding gallery inside each card — slow crossfade between
    // images plus an independent, continuous Ken Burns drift so whichever
    // image is showing always feels alive rather than static.
    const timelines = [];
    const zoomTweens = [];

    cardsRef.current.forEach((card, ci) => {
      if (!card) return;
      const imgs = [...card.querySelectorAll('[data-slide-img]')];
      if (imgs.length < 2) return;

      imgs.forEach((img, ii) => {
        zoomTweens.push(
          gsap.to(img, {
            scale: 1.12,
            duration: 9,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: ii * 1.4,
          })
        );
      });

      const tl = gsap.timeline({ repeat: -1, delay: 1 + ci * 0.8 });
      imgs.forEach((img, ii) => {
        const next = imgs[(ii + 1) % imgs.length];
        tl.to({}, { duration: 2.8 })
          .to(next, { opacity: 1, duration: 1.1, ease: 'power2.inOut' }, '<')
          .to(img, { opacity: 0, duration: 1.1, ease: 'power2.inOut' }, '<');
      });
      timelines.push(tl);
    });

    return () => {
      timelines.forEach(tl => tl.kill());
      zoomTweens.forEach(t => t.kill());
    };
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
              <div className={styles.slideStack}>
                {project.images.map((src, si) => (
                  <img
                    key={src}
                    src={src}
                    alt={project.title}
                    data-slide-img
                    className={styles.slideImg}
                  />
                ))}
              </div>

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
          <Link href="/projects" className={styles.allBtn}>View all Projects</Link>
        </div>

      </div>
    </section>
  );
}