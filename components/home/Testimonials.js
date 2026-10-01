"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    quote: "Highly impressed with the quality of windows and doors from SGD Group. They specialize in modern, durable pre-engineered aluminium designs that look premium and stylish. The execution was seamless, and the materials used are top-notch.",
    author: "Muhammed Saleel",
    role: "Google Review"
  },
  {
    quote: "I am very happy with the quality of the aluminium window products. The windows have a sleek, modern design and are built with excellent craftsmanship. Installation was smooth, and the windows operate effortlessly with excellent sealing against dust, rain, and noise.",
    author: "Jilce Jose",
    role: "Google Review"
  },
  {
    quote: "I had an excellent experience with SGD Group of Companies for the supply and installation of sliding doors for my new home. From the initial consultation to the final installation, their team was professional, responsive, and efficient.",
    author: "Nishad Basheer",
    role: "Google Review"
  },
  {
    quote: "I recently got system aluminium windows installed by SGD Group, and I'm really happy with how everything turned out. The whole team was friendly, helpful, and did the work neatly. They finished everything on time and made the whole process easy for us.",
    author: "Neeraj Achu",
    role: "Google Review"
  },
  {
    quote: "They used top-quality aluminium profiles and the window locks and other materials used were top branded. The entire team demonstrated outstanding professionalism and reliability throughout the process. Highly recommended!",
    author: "Aneesh G",
    role: "Google Review"
  },
  {
    quote: "Really impressed with the quality and elegance of the aluminium window products. The products are not only stylish but also sturdy and well-finished. A smooth and pleasant experience overall. Highly recommended!",
    author: "Mohammed Rashad K",
    role: "Google Review"
  },
  {
    quote: "We had a very good experience with the team from start to finish. The quality of the windows is really good and the installation was done properly and professionally. What I liked most was their after sales support.",
    author: "Salman Sonu",
    role: "Google Review"
  },
  {
    quote: "I had a wonderful experience with SGD Group of Companies. The materials they used feel super high quality and give the place a luxury look. Plus, they finished on time and left everything spotless.",
    author: "Sachin Dev",
    role: "Google Review"
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
