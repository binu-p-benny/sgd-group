"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import styles from './Blog.module.css';

gsap.registerPlugin(ScrollTrigger);

const blogData = [
  {
    title: "The Future of Structural Glazing in Modern Architecture",
    excerpt: "Explore how advancements in glass technology are enabling architects to push the boundaries of design with larger, clearer, and stronger glass systems.",
    date: "October 12, 2023",
    image: "/project-nikshan.png"
  },
  {
    title: "Maximizing Natural Light: A Guide to Skylights",
    excerpt: "Discover the benefits of incorporating skylights into your commercial or residential projects, from energy efficiency to enhanced well-being.",
    date: "November 05, 2023",
    image: "/skylight.png" // We have a skylight.png in public
  },
  {
    title: "Minimalist Frameless Doors for Seamless Transitions",
    excerpt: "Learn why frameless sliding doors are becoming the standard for luxury homes, offering unobstructed views and an elegant indoor-outdoor flow.",
    date: "November 28, 2023",
    image: "/project-eham.png"
  }
];

export default function Blog() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { 
        opacity: 0, 
        y: 40 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );
  }, []);

  return (
    <section className={styles.blog} id="blog" ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.title}>Insights & News</p>
            <h2 className="text-h2">Latest from our journal.</h2>
          </div>
          <button className="btn-secondary">View all articles</button>
        </div>

        <div className={styles.grid}>
          {blogData.map((post, i) => (
            <div 
              key={i} 
              className={styles.card}
              ref={el => cardsRef.current[i] = el}
            >
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.image} />
              </div>
              <span className={styles.date}>{post.date}</span>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <span className={styles.readMore}>
                Read article <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
