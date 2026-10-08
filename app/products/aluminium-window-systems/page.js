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
  title: 'Aluminium Window Systems Kerala | SGD Group',
  description: 'Explore premium aluminium window systems in Kerala by SGD Group. Durable, energy-efficient and modern windows for homes and commercial spaces.',
  keywords: 'aluminium window systems Kerala, Eco Gulf window, HL-40 window, Blaze pivot system, Slide-Pro sliding window, SGD aluminium windows, sliding glass windows Kerala, best sliding windows, slim line windows, residential sliding windows, openable windows Kerala, casement windows Kerala, sliding windows with grill',
  openGraph: {
    title: 'Aluminium Window Systems Kerala | SGD Group',
    description: 'Explore premium aluminium window systems in Kerala by SGD Group. Durable, energy-efficient and modern windows for homes and commercial spaces.',
    url: 'https://sgdgroupofcompanies.com/products/aluminium-window-systems',
    siteName: 'SGD Group of Companies',
    type: 'website',
    images: ['/hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aluminium Window Systems Kerala | SGD Group',
    description: 'Explore premium aluminium window systems in Kerala by SGD Group. Durable, energy-efficient and modern windows for homes and commercial spaces.',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: 'https://sgdgroupofcompanies.com/products/aluminium-window-systems',
  },
};

const windowSystems = [
  { name: 'Eco Gulf',  href: '/products/aluminium-window-systems/eco-gulf',  image: '/products/eco-gulf-a.jpg' },
  { name: 'HL-40',     href: '/products/aluminium-window-systems/hl40',      image: '/products/hl40-a.jpg' },
  { name: 'Blaze',     href: '/products/aluminium-window-systems/blaze',     image: '/products/blaze-a.png' },
  { name: 'Slide-Pro', href: '/products/aluminium-window-systems/slide-pro', image: '/products/slidepro-a.jpg' },
];

export default function AluminiumWindowSystemsPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Aluminium Window Systems"
        title="Aluminium Window Systems in Kerala"
        subtitle="Precision-engineered aluminium window profiles — Eco Gulf, HL-40, Blaze and Slide-Pro — built for lasting performance and architectural clarity."
        bg="/products/window-systems-hero.jpg"
      />

      <ApplicationsSection
        image="/products/window-systems-open.jpg"
        description="Our aluminum window systems are thoughtfully engineered to bring together modern design, lasting durability, and everyday comfort. Built with precision and premium materials, they offer seamless functionality, enhanced natural light, and reliable performance for homes and commercial spaces. Every installation reflects our commitment to quality craftsmanship, elegant finishes, and customer satisfaction."
      />
      <FeatureSection
        image="/products/window-systems-detail.jpg"
        heading="Timeless Design, Lasting Strength"
        body="Beautiful spaces begin with exceptional windows. Our aluminum window systems are engineered for durability, precision, and modern aesthetics, offering superior performance in every season. With premium finishes, smooth operation, and dependable quality, they create brighter, safer, and more inspiring living and working environments."
      />
      <KeyFeaturesSection
        features={[
          { title: 'Precision-Engineered Systems', desc: 'Factory-finished for accurate fit and consistent quality.' },
          { title: 'Premium Aluminium Profiles', desc: 'Strong, lightweight, and built for long-lasting performance.' },
          { title: 'Modern Aesthetic Design', desc: 'Clean lines and elegant finishes for contemporary spaces.' },
          { title: 'Seamless Installation', desc: 'Pre-engineered solutions help reduce on-site work and delays.' },
          { title: 'Durable & Low Maintenance', desc: 'Designed to withstand everyday use while maintaining their finish.' },
          { title: 'Professional Service & Delivery', desc: 'Expert support, exceptional craftsmanship, and dependable on-time delivery.' },
        ]}
      />

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
