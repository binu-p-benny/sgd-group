"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';
import { ChevronDown, Globe, MapPin } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';
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

/* Service locations — states we currently operate in.
   The per-state pages are parked in app/_locations (private folder = no route),
   so these point at /contact for now. To go live, un-private that folder and
   restore the hrefs below — slugs mirror the keys in app/_locations/data.js. */
const southIndiaLocations = [
  { name: 'Kerala',     href: '/contact' },  // '/locations/kerala'
  { name: 'Tamil Nadu', href: '/contact' },  // '/locations/tamil-nadu'
  { name: 'Karnataka',  href: '/contact' },  // '/locations/karnataka'
];

export default function Navigation() {
  const [scrolled, setScrolled]               = useState(false);
  const [isOpen, setIsOpen]                   = useState(false);
  const [megaOpen, setMegaOpen]               = useState(false);       // products mega
  const [projectsOpen, setProjectsOpen]       = useState(false);       // projects mega
  const [locationsOpen, setLocationsOpen]     = useState(false);       // locations dropdown
  const [hoveredProduct, setHoveredProduct]   = useState(null);
  const [hoveredProject, setHoveredProject]   = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null); // 'Products' | 'Projects' | null — home page accordion
  const [openMobileLeaf, setOpenMobileLeaf]   = useState(null); // category / Residential / Commercial — nested accordion
  const menuRef    = useRef(null);
  const linksRef   = useRef([]);
  const closeTimer = useRef(null);
  const projTimer  = useRef(null);
  const locWrapRef = useRef(null);
  const pathname   = usePathname();
  const lenis      = useLenis();

  const toggleMobileGroup = (name) => {
    setOpenMobileGroup(prev => (prev === name ? null : name));
    setOpenMobileLeaf(null);
  };

  const toggleMobileLeaf = (name) => {
    setOpenMobileLeaf(prev => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Locations opens on click, so it needs the usual dismissals: outside click and Escape */
  useEffect(() => {
    if (!locationsOpen) return;
    const onPointerDown = (e) => {
      if (!locWrapRef.current?.contains(e.target)) setLocationsOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLocationsOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [locationsOpen]);

  /* Close it when navigating away */
  useEffect(() => { setLocationsOpen(false); }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.inOut' });
      gsap.fromTo(linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      gsap.to(menuRef.current, { x: '-100%', opacity: 0, duration: 0.6, ease: 'power3.inOut' });
      document.body.style.overflow = '';
      lenis?.start();
    }
  }, [isOpen, lenis]);

  const navItems = [
    { name: 'About Us', href: '/about' },
    {
      name: 'Products',
      href: '#',
      dropdown: [
        {
          name: 'Aluminium Window Systems', href: '/products/aluminium-window-systems', image: '/services/services-01.png',
          subItems: [
            { name: 'Eco Gulf',  href: '/products/aluminium-window-systems/eco-gulf' },
            { name: 'HL-40',     href: '/products/aluminium-window-systems/hl40' },
            { name: 'Blaze',     href: '/products/aluminium-window-systems/blaze' },
            { name: 'Slide-Pro', href: '/products/aluminium-window-systems/slide-pro' },
          ]
        },
        {
          name: 'Aluminium Door Systems', href: '/products/aluminium-door-systems', image: '/services/services-02.png',
          subItems: [
            { name: 'Imperial SS2', href: '/products/aluminium-door-systems/imperialss2' },
            { name: 'Vista',        href: '/products/aluminium-door-systems/vista' },
            { name: 'Ultra',        href: '/products/aluminium-door-systems/ultra' },
            { name: 'Retro Gulf',   href: '/products/aluminium-door-systems/retrogulf' },
            { name: 'HL-50',        href: '/products/aluminium-door-systems/hl50' },
            { name: 'Nexus',        href: '/products/aluminium-door-systems/nexus' },
            { name: 'Horizon',      href: '/products/aluminium-door-systems/horizon' },
          ]
        },
        {
          name: 'Signature Systems', href: '/products/signature-systems', image: '/services/services-03.png',
          subItems: [
            { name: 'Parallel Opening', href: '/products/signature-systems/parallel-opening' },
            { name: 'Tilt & Turn',      href: '/products/signature-systems/tilt-turn' },
            { name: 'Vertical Sliding', href: '/products/signature-systems/vertical-sliding' },
            { name: 'Sliding Folding',  href: '/products/signature-systems/sliding-folding' },
          ]
        },
      ]
    },
    { name: 'Projects', href: '/projects', projectsDropdown: true },
    { name: 'Careers', href: '/careers' },
    { name: 'Locations', href: '#', locationsDropdown: true },
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

  /* ── Locations dropdown — click to toggle, unlike the hover megas ── */
  const toggleLocations = () => setLocationsOpen(prev => !prev);

  const allProjectItems = [...residentialProjects, ...commercialProjects];

  /* Locations sits after the Contact button on desktop, so it renders outside
     the navItems map — on mobile it stays in sequence as an accordion. */
  const locationsDesktop = (
    <div className={`${styles.dropdownWrapper} ${styles.locationsWrapper}`} ref={locWrapRef}>
      <button
        type="button"
        className={`${styles.locationsBtn} ${locationsOpen ? styles.locationsBtnActive : ''}`}
        onClick={toggleLocations}
        aria-expanded={locationsOpen}
        aria-haspopup="true"
      >
        <Globe size={16} strokeWidth={1.75} className={styles.locationsGlobe} />
        Locations
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`${styles.locationsChevron} ${locationsOpen ? styles.locationsChevronOpen : ''}`}
        />
      </button>

      <div className={`${styles.locationsMenu} ${locationsOpen ? styles.locationsMenuOpen : ''}`}>
        <p className={styles.locationsGroupLabel}>South India</p>
        {southIndiaLocations.map((loc) => (
          <Link
            key={loc.name}
            href={loc.href}
            className={styles.locationsItem}
            onClick={() => setLocationsOpen(false)}
          >
            <MapPin size={14} strokeWidth={1.75} className={styles.locationsPin} />
            {loc.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ''} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={`${styles.logoWrapper} ${isOpen ? styles.logoHiddenMobile : ''}`}>
            <img
              src={(scrolled || isOpen) ? "/logo-cl.png" : "/logo-wt.png"}
              alt="SGD Group of Companies"
              className={styles.logo}
            />
          </Link>

          <div className={styles.navLinks}>
            {navItems.filter((item) => !item.locationsDropdown).map((item) => {
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
            {locationsDesktop}
          </div>

          <div
            className={`${styles.mobileToggle} ${isOpen ? styles.open : ''} ${isOpen ? styles.mobileToggleHidden : ''}`}
            onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Backdrop — fills the space freed up by the narrower panel; tap to close */}
      <div
        className={`${styles.mobileBackdrop} ${isOpen ? styles.mobileBackdropOpen : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div className={`${styles.mobileOverlay} ${styles.mobileOverlayHome}`} ref={menuRef} data-lenis-prevent>
        <div className={`${styles.mobileNavLinks} ${styles.mobileNavLinksHome}`}>
          {navItems.map((item, i) => (
            item.dropdown ? (
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <button
                  type="button"
                  className={styles.mobileAccordionHeader}
                  onClick={() => toggleMobileGroup(item.name)}
                  aria-expanded={openMobileGroup === item.name}
                >
                  <span className={styles.mobileAccordionHeaderLabel}>{item.name}</span>
                  <ChevronDown
                    size={26}
                    className={`${styles.mobileChevron} ${openMobileGroup === item.name ? styles.mobileChevronOpen : ''}`}
                  />
                </button>
                <div className={`${styles.mobileAccordionContent} ${openMobileGroup === item.name ? styles.mobileAccordionContentOpen : ''}`}>
                  <div className={styles.mobileAccordionInner}>
                    {item.dropdown.map((sub, j) => (
                      <div key={sub.name} className={styles.mobileCategoryGroup}>
                        <div className={`${styles.mobileCategoryRow} ${openMobileLeaf === sub.name ? styles.mobileCategoryRowOpen : ''}`}>
                          <Link href={sub.href} className={styles.mobileCategoryLabel}
                            onClick={() => setIsOpen(false)} ref={el => linksRef.current[i * 10 + j] = el}>
                            {sub.name}
                          </Link>
                          {sub.subItems && (
                            <button
                              type="button"
                              className={styles.mobileCategoryChevronBox}
                              onClick={() => toggleMobileLeaf(sub.name)}
                              aria-expanded={openMobileLeaf === sub.name}
                              aria-label={`Toggle ${sub.name} sub-items`}
                            >
                              <ChevronDown
                                size={16}
                                className={`${styles.mobileCategoryChevronIcon} ${openMobileLeaf === sub.name ? styles.mobileCategoryChevronIconOpen : ''}`}
                              />
                            </button>
                          )}
                        </div>
                        {sub.subItems && (
                          <div className={`${styles.mobileLeafContent} ${openMobileLeaf === sub.name ? styles.mobileLeafContentOpen : ''}`}>
                            <div className={styles.mobileLeafInner}>
                              {sub.subItems.map((leaf) => (
                                <Link key={leaf.name} href={leaf.href} className={styles.mobileLeafLink}
                                  onClick={() => setIsOpen(false)}>
                                  {leaf.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.projectsDropdown ? (
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <button
                  type="button"
                  className={styles.mobileAccordionHeader}
                  onClick={() => toggleMobileGroup(item.name)}
                  aria-expanded={openMobileGroup === item.name}
                >
                  <span className={styles.mobileAccordionHeaderLabel}>{item.name}</span>
                  <ChevronDown
                    size={26}
                    className={`${styles.mobileChevron} ${openMobileGroup === item.name ? styles.mobileChevronOpen : ''}`}
                  />
                </button>
                <div className={`${styles.mobileAccordionContent} ${openMobileGroup === item.name ? styles.mobileAccordionContentOpen : ''}`}>
                  <div className={styles.mobileAccordionInner}>
                    {[
                      { label: 'Residential', items: residentialProjects },
                      { label: 'Commercial', items: commercialProjects },
                    ].map((group) => (
                      <div key={group.label} className={styles.mobileCategoryGroup}>
                        <button
                          type="button"
                          className={`${styles.mobileCategoryRow} ${styles.mobileCategoryRowButton} ${openMobileLeaf === group.label ? styles.mobileCategoryRowOpen : ''}`}
                          onClick={() => toggleMobileLeaf(group.label)}
                          aria-expanded={openMobileLeaf === group.label}
                        >
                          <span className={styles.mobileCategoryLabel}>{group.label}</span>
                          <span className={styles.mobileCategoryChevronBox}>
                            <ChevronDown
                              size={16}
                              className={`${styles.mobileCategoryChevronIcon} ${openMobileLeaf === group.label ? styles.mobileCategoryChevronIconOpen : ''}`}
                            />
                          </span>
                        </button>
                        <div className={`${styles.mobileLeafContent} ${openMobileLeaf === group.label ? styles.mobileLeafContentOpen : ''}`}>
                          <div className={styles.mobileLeafInner}>
                            {group.items.map((p, j) => (
                              <Link key={p.name} href={p.href} className={styles.mobileLeafLink}
                                onClick={() => setIsOpen(false)} ref={el => linksRef.current[i * 10 + j] = el}>
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.locationsDropdown ? (
              <div key={item.name} className={styles.mobileDropdownGroup}>
                <button
                  type="button"
                  className={styles.mobileAccordionHeader}
                  onClick={() => toggleMobileGroup(item.name)}
                  aria-expanded={openMobileGroup === item.name}
                >
                  <span className={styles.mobileAccordionHeaderLabel}>{item.name}</span>
                  <ChevronDown
                    size={26}
                    className={`${styles.mobileChevron} ${openMobileGroup === item.name ? styles.mobileChevronOpen : ''}`}
                  />
                </button>
                <div className={`${styles.mobileAccordionContent} ${openMobileGroup === item.name ? styles.mobileAccordionContentOpen : ''}`}>
                  <div className={styles.mobileAccordionInner}>
                    <p className={styles.mobileGroupLabel}>South India</p>
                    {southIndiaLocations.map((loc, j) => (
                      <Link key={loc.name} href={loc.href} className={styles.mobileLeafLink}
                        onClick={() => setIsOpen(false)} ref={el => linksRef.current[i * 10 + j] = el}>
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
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
