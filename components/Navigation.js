"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inOut'
      });
      gsap.fromTo(linksRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(menuRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.6,
        ease: 'power3.inOut'
      });
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#careers' }
  ];

  return (
    <>
      <nav className={`${styles.navWrapper} ${scrolled || isOpen ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoWrapper}>
            <img 
              src={scrolled || isOpen ? "/logo-cl.png" : "/logo-wt.png"} 
              alt="SGD Group" 
              className={styles.logo} 
            />
          </Link>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={styles.navLink}>
                {item.name}
              </Link>
            ))}
            <Link href="#contact" className={styles.contactBtn}>
              Contact
            </Link>
          </div>

          <div 
            className={`${styles.mobileToggle} ${isOpen ? styles.open : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={styles.mobileOverlay} ref={menuRef}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item, i) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
              ref={el => linksRef.current[i] = el}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className={styles.mobileContactBtn}
            onClick={() => setIsOpen(false)}
            ref={el => linksRef.current[navItems.length] = el}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
