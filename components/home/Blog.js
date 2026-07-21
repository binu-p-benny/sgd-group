"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/app/blog/posts';
import styles from './Blog.module.css';

gsap.registerPlugin(ScrollTrigger);

const blogData = blogPosts.slice(0, 3);

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
          <Link href="/blog" className="btn-secondary">View all articles</Link>
        </div>

        <div className={styles.grid}>
          {blogData.map((post, i) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
