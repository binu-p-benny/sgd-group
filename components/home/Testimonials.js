"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
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
    const slider = sliderRef.current;
    // Scroll by one actual card width (+ gap) so it works at any screen size
    const firstCard = slider.children[0];
    const gap = parseFloat(getComputedStyle(slider).columnGap || getComputedStyle(slider).gap) || 0;
    const scrollAmount = (firstCard?.offsetWidth || 450) + gap;
    // Native smooth scroll — cooperates with the mobile scroll-snap instead
    // of fighting it the way an imperative GSAP scrollLeft tween would.
    slider.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
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
          
          <div className={`${styles.navButtons} ${styles.navButtonsDesktop}`}>
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
                {/* Mobile-only header: avatar + name/role + star rating */}
                <div className={styles.cardHeaderMobile}>
                  <div className={styles.avatar}>{item.author.charAt(0)}</div>
                  <div className={styles.headerText}>
                    <span className={styles.authorName}>{item.author}</span>
                    <span className={styles.authorRole}>{item.role}</span>
                  </div>
                </div>
                <div className={styles.starsMobile}>
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={16} className={styles.starIcon} fill="currentColor" />
                  ))}
                </div>

                <p className={styles.quote}>"{item.quote}"</p>

                {/* Desktop: name/role below the quote */}
                <div className={`${styles.authorInfo} ${styles.authorInfoDesktop}`}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorRole}>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: prev/next arrows shown below the card instead of the header */}
        <div className={`${styles.navButtons} ${styles.navButtonsMobile}`}>
          <button className={styles.navBtn} onClick={() => scrollSlider('prev')}>
            <ArrowLeft size={24} />
          </button>
          <button className={styles.navBtn} onClick={() => scrollSlider('next')}>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
