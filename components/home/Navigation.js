"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Navigation.module.css';

const residentialProjects = [
  { name: 'Jabir Kottakal',    href: '/projects/jabir-kottakal',    image: '/project-Jabir.png' },
  { name: 'Shameer Vengara',   href: '/projects/shameer-vengara',   image: '/projects/projects-01.png' },
  { name: 'Loshidh Thrissur',  href: '/projects/loshidh-thrissur',  image: '/project-loshidh.png' },
  { name: 'Nidhin Engapuzha',  href: '/projects/nidhin-engapuzha',  image: '/projects/projects-02.png' },
  { name: 'Nidhin Kannur',     href: '/projects/nidhin-kannur',     image: '/projects/projects-03.png' },
];

const commercialProjects = [
  { name: 'Nikshan Electronics', href: '/projects/nikshan-electronics', image: '/project-nikshan.png' },
  { name: 'Eham Digital',        href: '/projects/eham-digital',        image: '/project-eham.png' },
];

export default function Navigation() {
  const [scrolled, setScrolled]               = useState(false);
  const [isOpen, setIsOpen]                   = useState(false);
  const [megaOpen, setMegaOpen]               = useState(false);       // products mega
  const [projectsOpen, setProjectsOpen]       = useState(false);       // projects mega
  const [hoveredProduct, setHoveredProduct]   = useState(null);
  const [hoveredProject, setHoveredProject]   = useState(null);
  const menuRef    = useRef(null);
  const linksRef   = useRef([]);
  const closeTimer = useRef(null);
  const projTimer  = useRef(null);
  const pathname   = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    { name: 'About Us', href: '/about' },
    {
      name: 'Products',
      href: '#',
      dropdown: [
        {
          name: 'Slim Window Systems', href: '/products/slim-window-systems', image: '/services/services-01.png',
          subItems: [
            { name: 'ImperialSS2', href: '/products/slim-window-systems/imperialss2' },
            { name: 'Vista',       href: '/products/slim-window-systems/vista' },
            { name: 'Ultra',       href: '/products/slim-window-systems/ultra' },
            { name: 'RetroGulf',   href: '/products/slim-window-systems/retrogulf' },
            { name: 'Eco Gulf',    href: '/products/slim-window-systems/eco-gulf' },
          ]
        },
        {
          name: 'Casement Door Systems', href: '/products/casement-door-systems', image: '/services/services-02.png',
          subItems: [
            { name: 'HL50', href: '/products/casement-door-systems/hl50' },
            { name: 'HL40', href: '/products/casement-door-systems/hl40' },
          ]
        },
        {
          name: 'Signature Series', href: '/products/signature-series', image: '/services/services-03.png',
          subItems: [
            { name: 'Nexus',   href: '/products/signature-series/nexus' },
            { name: 'Horizon', href: '/products/signature-series/horizon' },
            { name: 'Blaze',   href: '/products/signature-series/blaze' },
          ]
        },
        {
          name: 'Speciality Systems', href: '/products/speciality-systems', image: '/services/services-04.png',
          subItems: [
            { name: 'Slide-Pro',        href: '/products/speciality-systems/slide-pro' },
            { name: 'Vertical Sliding', href: '/products/speciality-systems/vertical-sliding' },
            { name: 'Tilt & Turn',      href: '/products/speciality-systems/tilt-turn' },
            { name: 'Sliding Folding',  href: '/products/speciality-systems/sliding-folding' },
            { name: 'Parallel Opening', href: '/products/speciality-systems/parallel-opening' },
          ]
        },
      ]
    },
    { name: 'Projects', href: '/projects', projectsDropdown: true },
    { name: 'Careers', href: '/careers' },
  ];

  const isActive = (href) => href !== '#' && pathname === href;

  /* ── Products mega helpers ── */
  const openMega = (firstItem) => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
    setHoveredProduct(firstItem);
  };
  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => { setMegaOpen(false); setHoveredProduct(null); }, 120);
  };
  const cancelMegaClose = () => clearTimeout(closeTimer.current);

  /* ── Projects mega helpers ── */
  const openProjects = () => {
    clearTimeout(projTimer.current);
    setProjectsOpen(true);
    setHoveredProject(residentialProjects[0]);
  };
  const scheduleProjClose = () => {
    projTimer.current = setTimeout(() => { setProjectsOpen(false); setHoveredProject(null); }, 120);
  };
  const cancelProjClose = () => clearTimeout(projTimer.current);

  const allProjectItems = [...residentialProjects, ...commercialProjects];

  return (
    <>
      <nav className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ''} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoWrapper}>
            <img
              src={(scrolled || isOpen) ? "/logo-cl.png" : "/logo-wt.png"}
              alt="SGD Group of Companies"
              className={styles.logo}
            />
          </Link>

          <div className={styles.navLinks}>
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className={styles.dropdownWrapper}
                    onMouseEnter={() => openMega(item.dropdown[0])}
                    onMouseLeave={scheduleMegaClose}
                  >
                    <span className={`${styles.navLink} ${styles.hasDropdown} ${megaOpen ? styles.navLinkActive : ''}`}>
                      {item.name}
                    </span>

                    <div
                      className={`${styles.megaMenu} ${megaOpen ? styles.megaMenuOpen : ''}`}
                      onMouseEnter={cancelMegaClose}
                      onMouseLeave={scheduleMegaClose}
                    >
                      <div className={styles.megaInner}>
                        <div className={styles.megaImage}>
                          {item.dropdown.map((sub) => (
                            <Image
                              key={sub.name}
                              src={sub.image}
                              alt={sub.name}
                              fill
                              className={`${styles.megaImg} ${hoveredProduct?.name === sub.name ? styles.megaImgVisible : ''}`}
                              sizes="260px"
                            />
                          ))}
                        </div>
                        <div className={styles.megaLinks}>
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`${styles.megaItem} ${isActive(sub.href) ? styles.active : ''} ${hoveredProduct?.name === sub.name ? styles.megaItemActive : ''}`}
                              onMouseEnter={() => setHoveredProduct(sub)}
                            >
                              {sub.name}
                              {sub.subItems && <span className={styles.megaItemArrow}>›</span>}
                            </Link>
                          ))}
                        </div>
                        <div className={`${styles.megaSubLinks} ${hoveredProduct?.subItems ? styles.megaSubLinksVisible : ''}`}>
                          <p className={styles.megaSubTitle}>{hoveredProduct?.name}</p>
                          {hoveredProduct?.subItems?.map((sub) => (
                            <Link key={sub.name} href={sub.href} className={styles.megaSubItem}>
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.projectsDropdown) {
                return (
                  <div
                    key={item.name}
                    className={styles.dropdownWrapper}
                    onMouseEnter={openProjects}
                    onMouseLeave={scheduleProjClose}
                  >
                    <span className={`${styles.navLink} ${styles.hasDropdown} ${projectsOpen ? styles.navLinkActive : ''}`}>
                      {item.name}
                    </span>

                    <div
                      className={`${styles.megaMenu} ${projectsOpen ? styles.megaMenuOpen : ''}`}
                      onMouseEnter={cancelProjClose}
                      onMouseLeave={scheduleProjClose}
                    >
                      <div className={styles.megaInner}>
                        {/* Preview image */}
                        <div className={styles.megaImage}>
                          {allProjectItems.map((p) => (
                            <Image
                              key={p.name}
                              src={p.image}
                              alt={p.name}
                              fill
                              className={`${styles.megaImg} ${hoveredProject?.name === p.name ? styles.megaImgVisible : ''}`}
                              sizes="260px"
                            />
                          ))}
                        </div>

                        {/* Residential column */}
                        <div className={styles.projectsColumns}>
                          <div className={styles.projectsCol}>
                            <p className={styles.projectsColLabel}>Residential</p>
                            {residentialProjects.map((p) => (
                              <Link
                                key={p.name}
                                href={p.href}
                                className={`${styles.megaItem} ${hoveredProject?.name === p.name ? styles.megaItemActive : ''}`}
                                onMouseEnter={() => setHoveredProject(p)}
                              >
                                {p.name}
                              </Link>
                            ))}
                          </div>

                          {/* Commercial column */}
                          <div className={styles.projectsCol}>
                            <p className={styles.projectsColLabel}>Commercial</p>
                            {commercialProjects.map((p) => (
                              <Link
                                key={p.name}
                                href={p.href}
                                className={`${styles.megaItem} ${hoveredProject?.name === p.name ? styles.megaItemActive : ''}`}
                                onMouseEnter={() => setHoveredProject(p)}
                              >
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.name} href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}>
                  {item.name}
                </Link>
              );
            })}
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

      {/* Mobile Menu */}
      <div className={styles.mobileOverlay} ref={menuRef}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item, i) => (
            item.dropdown ? (
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <span className={styles.mobileNavGroupLabel}>{item.name}</span>
                {item.dropdown.map((sub, j) => (
                  <Link key={sub.name} href={sub.href} className={styles.mobileSubLink}
                    onClick={() => setIsOpen(false)} ref={el => linksRef.current[i * 10 + j] = el}>
                    {sub.name}
                  </Link>
                ))}
              </div>
            ) : item.projectsDropdown ? (
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <span className={styles.mobileNavGroupLabel}>{item.name}</span>
                <span className={styles.mobileNavGroupLabel} style={{ fontSize: '0.75rem', opacity: 0.45 }}>Residential</span>
                {residentialProjects.map((p, j) => (
                  <Link key={p.name} href={p.href} className={styles.mobileSubLink}
                    onClick={() => setIsOpen(false)} ref={el => linksRef.current[i * 10 + j] = el}>
                    {p.name}
                  </Link>
                ))}
                <span className={styles.mobileNavGroupLabel} style={{ fontSize: '0.75rem', opacity: 0.45, marginTop: '1rem' }}>Commercial</span>
                {commercialProjects.map((p, j) => (
                  <Link key={p.name} href={p.href} className={styles.mobileSubLink}
                    onClick={() => setIsOpen(false)}>
                    {p.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.name} href={item.href} className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)} ref={el => linksRef.current[i] = el}>
                {item.name}
              </Link>
            )
          ))}
          <Link href="/contact" className={styles.mobileContactBtn}
            onClick={() => setIsOpen(false)} ref={el => linksRef.current[navItems.length] = el}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
