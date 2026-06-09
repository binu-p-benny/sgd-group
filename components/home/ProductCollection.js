"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ProductCollection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProductCollection() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current.forEach((img) => {
      gsap.to(img, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }, []);

  const products = [
    { title: 'Doors', img: '/hero.png' },
    { title: 'Windows', img: '/skylight.png' }
  ];

  return (
    <section className={styles.collection} id="collection" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={`text-h2 ${styles.headerTitle}`}>Product collection</h2>
          <p className="text-body-lg">
            Our glazing collection is defined by exceptional craftsmanship, refined design, and enduring quality. Made for bold architecture and uncompromising vision.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className={styles.image}
                  ref={el => imagesRef.current[index] = el}
                />
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
