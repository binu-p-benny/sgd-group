import React from 'react';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import styles from './Overview.module.css';
import WhyChooseUs from './WhyChooseUs';
import VideoTestimonials from '@/components/home/VideoTestimonials';

export const metadata = {
  title: 'Aluminium Window Systems | SGD Group of Companies Kerala',
  description: 'Explore SGD Group\'s pre-engineered aluminium window systems — premium quality, thermally efficient, and architecturally refined for residential and commercial projects.',
  keywords: 'aluminium window systems Kerala, pre-engineered windows, SGD aluminium windows, architectural windows Kerala',
  openGraph: {
    title: 'Aluminium Window Systems | SGD Group',
    description: 'Premium pre-engineered aluminium window systems for residential and commercial projects in Kerala.',
    url: 'https://sgdgroup.in/products/aluminium-window-systems',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/products/aluminium-window-systems',
  },
};

const categories = [
  {
    label: 'Office',
    icon: (
      <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="53" height="52" rx="1" stroke="#111111" strokeWidth="2"/>
        <rect x="16" y="18" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="30" y="18" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="44" y="18" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="16" y="32" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="30" y="32" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="44" y="32" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="16" y="46" width="10" height="16" stroke="#111111" strokeWidth="1.5"/>
        <rect x="44" y="46" width="10" height="16" stroke="#111111" strokeWidth="1.5"/>
        <line x1="4" y1="62" x2="65" y2="62" stroke="#111111" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Flat',
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="18" width="54" height="44" rx="1" stroke="#111111" strokeWidth="2"/>
        <polyline points="4,22 35,6 66,22" stroke="#111111" strokeWidth="2" fill="none"/>
        <rect x="16" y="28" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="44" y="28" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="30" y="28" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="27" y="44" width="16" height="18" stroke="#111111" strokeWidth="1.5"/>
        <line x1="4" y1="62" x2="66" y2="62" stroke="#111111" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Home',
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="24" width="50" height="38" rx="1" stroke="#111111" strokeWidth="2"/>
        <polyline points="4,28 35,8 66,28" stroke="#111111" strokeWidth="2" fill="none"/>
        <rect x="18" y="34" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="40" y="34" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="29" y="44" width="12" height="18" stroke="#111111" strokeWidth="1.5"/>
        <line x1="4" y1="62" x2="66" y2="62" stroke="#111111" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Restaurant',
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="54" height="42" rx="1" stroke="#111111" strokeWidth="2"/>
        <path d="M20 20 C20 12 30 8 35 14 C40 8 50 12 50 20" stroke="#111111" strokeWidth="2" fill="none"/>
        <rect x="16" y="28" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="42" y="28" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="29" y="28" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="27" y="44" width="16" height="18" stroke="#111111" strokeWidth="1.5"/>
        <line x1="4" y1="62" x2="66" y2="62" stroke="#111111" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Hospital',
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="54" height="48" rx="1" stroke="#111111" strokeWidth="2"/>
        <line x1="35" y1="24" x2="35" y2="40" stroke="#111111" strokeWidth="2"/>
        <line x1="27" y1="32" x2="43" y2="32" stroke="#111111" strokeWidth="2"/>
        <rect x="16" y="44" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="44" y="44" width="10" height="10" stroke="#111111" strokeWidth="1.5"/>
        <rect x="29" y="48" width="12" height="14" stroke="#111111" strokeWidth="1.5"/>
        <line x1="4" y1="62" x2="66" y2="62" stroke="#111111" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Shopping Mall',
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="22" width="58" height="40" rx="1" stroke="#111111" strokeWidth="2"/>
        <rect x="14" y="30" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="29" y="30" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="44" y="30" width="12" height="12" stroke="#111111" strokeWidth="1.5"/>
        <rect x="27" y="46" width="16" height="16" stroke="#111111" strokeWidth="1.5"/>
        <path d="M14 22 L14 14 L56 14 L56 22" stroke="#111111" strokeWidth="2"/>
        <circle cx="56" cy="18" r="6" stroke="#111111" strokeWidth="1.5"/>
        <line x1="4" y1="62" x2="66" y2="62" stroke="#111111" strokeWidth="2"/>
      </svg>
    ),
  },
];

const row1 = categories.slice(0, 3);
const row2 = categories.slice(3, 6);

const windowSystems = [
  { name: 'Sliding Windows',                    image: '/services/services-01.png' },
  { name: 'Casement/Openable Window',           image: '/services/services-02.png' },
  { name: 'Folding Window',                     image: '/services/services-03.png' },
  { name: 'Sliding Window with Grill',          image: '/services/services-04.png' },
  { name: 'Casement/Openable Window with Grill',image: '/services/services-01.png' },
];

const features = [
  { title: 'Ultra-Slim Profiles', desc: 'Maximize natural light and enjoy wide, unobstructed views with our elegant slim-line design.' },
  { title: 'Smooth Sliding Mechanism', desc: 'Engineered for effortless operation and long-term durability.' },
  { title: 'High-Performance Hardware', desc: 'Equipped with Pego Hardware trusted for its precision and strength, backed by a 10-Year Warranty.' },
  { title: 'Weather-Resistant Sealing', desc: 'Premium EPDM Gaskets ensure exceptional weatherproofing, offering longevity and protection with a 15-Year Warranty.' },
  { title: 'Superior Glass Quality', desc: 'Installed with Saint-Gobain Toughened Glass for enhanced safety, clarity and durability.' },
  { title: 'Support', desc: 'We provide ongoing support maintenance advice and service when needed.' },
];

function IconRow({ items }) {
  return (
    <div className={styles.iconRow}>
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          <div className={styles.iconCell}>
            {item.icon}
            <span className={styles.iconLabel}>{item.label}</span>
          </div>
          {i < items.length - 1 && <div className={styles.separator} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function AluminiumWindowSystemsPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        title="Aluminium Window Systems"
        bg="/services/services-01.png"
      />

      {/* ── Overview Section ── */}
      <section className={styles.section}>
        <div className={styles.inner}>

          {/* Left: text + icon grid */}
          <div className={styles.left}>
            <p className={styles.description}>
              Premium aluminium window systems designed for modern residential and commercial spaces. With over a decade of experience, our solutions combine clean aesthetics, durability, and precise engineering.<br /><br />
              With over 10 years of expertise, we work across residential and commercial projects, offering sliding, openable, and custom window systems tailored to each space. Every detail is carefully executed to ensure durability, performance, and lasting quality.
            </p>
            <div className={styles.iconGrid}>
              <IconRow items={row1} />
              <IconRow items={row2} />
            </div>
          </div>

          {/* Right: image */}
          <div className={styles.imageWrapper}>
            <img src="/services/services-02.png" alt="Aluminium window installation" />
          </div>

        </div>
      </section>

      

      <WhyChooseUs />

      {/* ── Premium Design Section ── */}
      <section className={styles.premiumSection}>
        <div className={styles.premiumInner}>

          <div className={styles.premiumImage}>
            <img src="/services/services-03.png" alt="Premium aluminium window design" />
          </div>

          <div className={styles.premiumContent}>
            <h2 className={styles.premiumTitle}>Premium Design, Lasting Performance</h2>
            <p className={styles.premiumBody}>
              Bring a touch of elegance to your space with our ultra-slim designs that fill your rooms with natural light and beautiful views. Enjoy the effortless glide of smooth, durable sliders crafted with trusted Pego Hardware. With long-lasting weather protection and premium Saint-Gobain toughened glass, you'll experience comfort, safety, and style that truly lasts.
            </p>
            <button className={styles.playBtn}>Play Video</button>
          </div>

        </div>
      </section>

      {/* ── Window Systems List Section ── */}
      <section className={styles.windowsSection}>
        <div className={styles.windowsInner}>
          <h2 className={styles.windowsHeading}>Window Systems</h2>
          <ul className={styles.windowsList}>
            {windowSystems.map((item) => (
              <li key={item.name} className={styles.windowsItem}>
                <span className={styles.windowsItemName}>{item.name}</span>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.windowsItemImage}
                />
                <div className={styles.windowsItemArrow}>
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#111111" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Key Features Section ── */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresInner}>
          <h2 className={styles.featuresHeading}>Key Features</h2>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={f.title} className={styles.featureItem}>
                <div className={styles.featureBadge}>{i + 1}</div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonials />

      <Footer />
    </main>
  );
}
