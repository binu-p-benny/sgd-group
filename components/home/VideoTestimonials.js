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
  const sliderRef = useRef(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Auto-advance every 2s, but only while the user isn't touching/dragging it.
    // Uses a GSAP tween (not native smooth-scroll, whose duration can't be
    // controlled) for a deliberately slow glide — scroll-snap is briefly
    // disabled during the tween so the two don't fight each other.
    const advance = () => {
      if (isInteracting.current) return;
      const firstCard = slider.children[0];
      const gap =
        parseFloat(
          getComputedStyle(slider).columnGap || getComputedStyle(slider).gap,
        ) || 0;
      const step = (firstCard?.offsetWidth || 300) + gap;
      const atEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 4;
      const target = atEnd ? 0 : slider.scrollLeft + step;

      const prevSnap = slider.style.scrollSnapType;
      slider.style.scrollSnapType = 'none';
      gsap.to(slider, {
        scrollLeft: target,
        duration: 1.8,
        ease: 'power2.inOut',
        onComplete: () => { slider.style.scrollSnapType = prevSnap; },
      });
    };

    const timer = setInterval(advance, 4000);
    const pause = () => {
      isInteracting.current = true;
    };
    const resume = () => {
      isInteracting.current = false;
    };

    slider.addEventListener("pointerdown", pause);
    slider.addEventListener("pointerup", resume);
    slider.addEventListener("pointercancel", resume);
    slider.addEventListener("pointerleave", resume);
    slider.addEventListener("touchstart", pause, { passive: true });
    slider.addEventListener("touchend", resume, { passive: true });

    return () => {
      clearInterval(timer);
      slider.removeEventListener("pointerdown", pause);
      slider.removeEventListener("pointerup", resume);
      slider.removeEventListener("pointercancel", resume);
      slider.removeEventListener("pointerleave", resume);
      slider.removeEventListener("touchstart", pause);
      slider.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section
      className={styles.videoTestimonials}
      id="video-testimonials"
      ref={containerRef}
    >
      <div className="container">
        <p className={styles.watchLabel}>WATCH: Client Stories</p>
        <div className={styles.grid} ref={sliderRef}>
          {videoData.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              ref={(el) => (cardsRef.current[i] = el)}
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
