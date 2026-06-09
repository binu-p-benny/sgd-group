"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const pathname = usePathname();

  // On non-home pages, nav is always in "scrolled" (solid) state
  const isHome = pathname === '/';
  const forceScrolled = !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.inOut' });
      gsap.fromTo(linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(menuRef.current, { y: '-100%', opacity: 0, duration: 0.6, ease: 'power3.inOut' });
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Projects',
      href: '#',
      dropdown: [
        { name: 'Aluminium Systems', href: '/projects/aluminium-systems' },
        { name: 'Aluminium Doors', href: '/projects/aluminium-doors' },
        { name: 'Project Gallery', href: '/projects/inner' },
      ]
    },
    { name: 'Careers', href: '/careers' },
  ];

  const isActive = (href) => href !== '#' && pathname === href;
  const isNavScrolled = forceScrolled || scrolled || isOpen;

  return (
    <>
      <nav className={`${styles.navWrapper} ${isNavScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoWrapper}>
            <img
              src={isNavScrolled ? "/logo-cl.png" : "/logo-wt.png"}
              alt="SGD Group of Companies"
              className={styles.logo}
            />
          </Link>

          <div className={styles.navLinks}>
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className={styles.dropdownWrapper}>
                  <span className={`${styles.navLink} ${styles.hasDropdown}`}>{item.name}</span>
                  <div className={styles.dropdown}>
                    {item.dropdown.map((sub) => (
                      <Link key={sub.name} href={sub.href} className={`${styles.dropdownItem} ${isActive(sub.href) ? styles.active : ''}`}>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}>
                  {item.name}
                </Link>
              )
            )}
            <Link href="/contact" className={`${styles.contactBtn} ${isActive('/contact') ? styles.active : ''}`}>
              Contact
            </Link>
          </div>

          <div className={`${styles.mobileToggle} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={styles.mobileOverlay} ref={menuRef}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item, i) =>
            item.dropdown ? (
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <span className={styles.mobileNavGroupLabel}>{item.name}</span>
                {item.dropdown.map((sub, j) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className={styles.mobileSubLink}
                    onClick={() => setIsOpen(false)}
                    ref={el => linksRef.current[i * 10 + j] = el}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
                ref={el => linksRef.current[i] = el}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            href="/contact"
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
