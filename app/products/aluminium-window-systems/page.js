import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import ApplicationsSection from '@/components/products/ApplicationsSection';
import FeatureSection from '@/components/products/FeatureSection';
import KeyFeaturesSection from '@/components/products/KeyFeaturesSection';
import styles from '@/components/products/Overview.module.css';
import WhyChooseUs from './WhyChooseUs';
import VideoTestimonials from '@/components/home/VideoTestimonials';

export const metadata = {
  title: 'Aluminium Window Systems | SGD Group of Companies Kerala',
  description: 'SGD Group\'s aluminium window systems — Eco Gulf, HL-40, Blaze and Slide-Pro — engineered for precision, security, and modern aesthetics.',
  keywords: 'aluminium window systems Kerala, Eco Gulf window, HL-40 window, Blaze pivot system, Slide-Pro sliding window, SGD aluminium windows',
  openGraph: {
    title: 'Aluminium Window Systems | SGD Group',
    description: 'Premium aluminium window systems — Eco Gulf, HL-40, Blaze and Slide-Pro — for residential and commercial spaces.',
    url: 'https://sgdgroup.in/products/aluminium-window-systems',
    siteName: 'SGD Group of Companies',
    type: 'website',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: 'https://sgdgroup.in/products/aluminium-window-systems',
  },
};

const windowSystems = [
  { name: 'Eco Gulf',  href: '/products/aluminium-window-systems/eco-gulf',  image: '/services/services-02.png' },
  { name: 'HL-40',     href: '/products/aluminium-window-systems/hl40',      image: '/services/services-04.png' },
  { name: 'Blaze',     href: '/products/aluminium-window-systems/blaze',     image: '/services/services-03.png' },
  { name: 'Slide-Pro', href: '/products/aluminium-window-systems/slide-pro', image: '/services/services-01.png' },
];

export default function AluminiumWindowSystemsPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Aluminium Window Systems"
        title="Aluminium Window Systems."
        subtitle="Precision-engineered aluminium window profiles — Eco Gulf, HL-40, Blaze and Slide-Pro — built for lasting performance and architectural clarity."
        bg="/services/services-02.png"
      />

      <ApplicationsSection
        image="/services/services-02.png"
        description="Our aluminum window systems are thoughtfully engineered to bring together modern design, lasting durability, and everyday comfort. Built with precision and premium materials, they offer seamless functionality, enhanced natural light, and reliable performance for homes and commercial spaces. Every installation reflects our commitment to quality craftsmanship, elegant finishes, and customer satisfaction."
      />
      <FeatureSection
        image="/services/services-02.png"
        heading="Timeless Design, Lasting Strength"
        body="Beautiful spaces begin with exceptional windows. Our aluminum window systems are engineered for durability, precision, and modern aesthetics, offering superior performance in every season. With premium finishes, smooth operation, and dependable quality, they create brighter, safer, and more inspiring living and working environments."
      />
      <KeyFeaturesSection />

      {/* Mobile-only combined image grid — replaces the separate
          per-section images above with one compact mosaic */}
      <div className={styles.mobileImageGridWrap}>
        <div className={styles.mobileImageGrid}>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-02.png" alt="Aluminium window systems" />
          </div>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-03.png" alt="Why choose SGD aluminium window systems" />
          </div>
        </div>
      </div>

      <WhyChooseUs />

      {/* Systems list */}
      <section className={styles.windowsSection}>
        <div className={styles.windowsInner}>
          <h2 className={styles.windowsHeading}>Explore the Systems</h2>
          <ul className={styles.windowsList}>
            {windowSystems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={styles.windowsItem}>
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <VideoTestimonials />
      <Footer />
    </main>
  );
}
