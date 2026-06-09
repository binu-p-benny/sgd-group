"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Showroom.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Showroom() {
  const containerRef = useRef(null);

  return (
    <section className={styles.showroomSection} id="showroom" ref={containerRef}>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.youtubeFrame}
          src="https://www.youtube.com/embed/tLx6rhgy_No?enablejsapi=1&origin=http://localhost:3000&rel=0&showinfo=0&controls=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
