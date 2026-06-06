"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import styles from './Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { title: "Nikshan Electronics", desc: "SGD Window, SGD X Vertical, Structural Glazing", image: "/project-nikshan.png" },
  { title: "Eham Digital", desc: "SGD X Sliding Door, Skylight / Ridgelight", image: "/project-eham.png" },
  { title: "Loshidh Thrissur", desc: "SGD X Vertical, SGD Sliding Door, SGD Window", image: "/project-loshidh.png" },
  { title: "Jabir Kottakkal", desc: "SGD X Sliding Door, SGD Sliding Door", image: "/project-jabir.png" }
];

export default function Projects() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;

      // Enter Animation
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        }
      });
    });
  }, []);

  return (
    <section className={styles.projects} id="projects" ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Featured projects</h2>
          <button className="btn-secondary">View all projects</button>
        </div>

        <div className={styles.projectList}>
          {projectsData.map((project, i) => (
            <div
              key={i}
              className={styles.projectItem}
              ref={el => itemsRef.current[i] = el}
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>

              <div className={styles.detailsColumn}>
                <div className={styles.projectDetails}>
                  <span>{project.desc}</span>
                </div>

                <div className={styles.imageOverlay}>
                  <img src={project.image} alt={project.title} />
                </div>
              </div>

              <div className={styles.projectArrow}>
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
