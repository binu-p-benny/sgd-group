"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './VideoTestimonials.module.css';

gsap.registerPlugin(ScrollTrigger);

const videoData = [
  {
    name: "Nikshan Client",
    location: "Kannur, Kerala",
    videoUrl: "https://www.youtube.com/embed/tLx6rhgy_No" // Placeholder URLs
  },
  {
    name: "Loshidh Residencies",
    location: "Thrissur, Kerala",
    videoUrl: "https://www.youtube.com/embed/tLx6rhgy_No"
  },
  {
    name: "Eham Projects",
    location: "Kozhikode, Kerala",
    videoUrl: "https://www.youtube.com/embed/tLx6rhgy_No"
  }
];

export default function VideoTestimonials() {
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
    <section className={styles.videoTestimonials} id="video-testimonials" ref={containerRef}>
      <div className="container">
        <div className={styles.grid}>
          {videoData.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              ref={el => cardsRef.current[i] = el}
            >
              <div className={styles.videoWrapper}>
                <iframe
                  className={styles.iframe}
                  src={`${item.videoUrl}?controls=1&rel=0&modestbranding=1`}
                  title={`Testimonial from ${item.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerContainer}>
          <a
            href="https://www.youtube.com/@sgdgroupofcompany/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View all testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
