"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './Testimonials.module.css';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    quote: "The attention to detail and structural integrity of the glass systems provided by SGD Group is unmatched. They truly understand architectural vision.",
    author: "Vaidas Vileikis",
    role: "Founder, Name Architects"
  },
  {
    quote: "Working with SGD was a seamless experience. Their installation team was professional, and the final result transformed our space completely.",
    author: "Owen Davies-Small",
    role: "Founder, Davies-Small Architects"
  },
  {
    quote: "Exceptional craftsmanship and a deep understanding of minimalist design. They are our go-to partner for all high-end glazing projects.",
    author: "Andreja Beric",
    role: "Founder, Twist In Architecture"
  },
  {
    quote: "Highly recommend for any complex glazing requirement. Their team's technical knowledge and execution speed were outstanding throughout the project.",
    author: "Devon Mothersille",
    role: "Homeowner"
  },
  {
    quote: "A perfect blend of aesthetics and functionality. The custom sliding doors they installed have become the centerpiece of our architectural design.",
    author: "Steven Goode",
    role: "Homeowner"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const scrollAmount = 482; // card width + gap
    gsap.to(sliderRef.current, {
      scrollLeft: direction === 'next' 
        ? sliderRef.current.scrollLeft + scrollAmount 
        : sliderRef.current.scrollLeft - scrollAmount,
      duration: 0.8,
      ease: 'power3.inOut'
    });
  };

  useEffect(() => {
    // Initial reveal animation
    gsap.fromTo(sliderRef.current.children,
      { 
        opacity: 0, 
        x: 50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
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
    <section className={styles.testimonials} id="testimonials" ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.title}>Client Stories</p>
            <h2 className="text-h2">Trust built through precision.</h2>
          </div>
          
          <div className={styles.navButtons}>
            <button className={styles.navBtn} onClick={() => scrollSlider('prev')}>
              <ArrowLeft size={24} />
            </button>
            <button className={styles.navBtn} onClick={() => scrollSlider('next')}>
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.grid} ref={sliderRef} style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
            {testimonialsData.map((item, i) => (
              <div 
                key={i} 
                className={styles.card}
              >
                <p className={styles.quote}>"{item.quote}"</p>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorRole}>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
