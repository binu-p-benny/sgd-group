import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import ApplicationsSection from '@/components/products/ApplicationsSection';
import FeatureSection from '@/components/products/FeatureSection';
import KeyFeaturesSection from '@/components/products/KeyFeaturesSection';
import styles from '@/app/products/slim-window-systems/Overview.module.css';
import WhyChooseUs from './WhyChooseUs';
import VideoTestimonials from '@/components/home/VideoTestimonials';

export const metadata = {
  title: 'Casement Door Systems | SGD Group of Companies Kerala',
  description: 'SGD Group\'s casement door systems — HL50 and HL40 series engineered for precision, security, and modern aesthetics.',
  keywords: 'casement door systems Kerala, HL50 door, HL40 door, aluminium casement doors, SGD casement doors',
  openGraph: {
    title: 'Casement Door Systems | SGD Group',
    description: 'Premium casement door systems — HL50 and HL40 series for residential and commercial spaces.',
    url: 'https://sgdgroup.in/products/casement-door-systems',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/products/casement-door-systems',
  },
};

const doorSystems = [
  { name: 'Sliding Doors',               href: '/products/casement-door-systems/sliding-doors',               image: '/services/services-01.png' },
  { name: 'Openable Doors',              href: '/products/casement-door-systems/openable-doors',              image: '/services/services-02.png' },
  { name: 'Sliding Doors with Grill',    href: '/products/casement-door-systems/sliding-doors-with-grill',    image: '/services/services-03.png' },
  { name: 'Openable Doors with Grill',   href: '/products/casement-door-systems/openable-doors-with-grill',   image: '/services/services-04.png' },
  { name: 'Frameless Doors',             href: '/products/casement-door-systems/frameless-doors',             image: '/services/services-01.png' },
];

export default function CasementDoorSystemsPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Casement Door Systems"
        title="Casement Door Systems."
        subtitle="Precision-engineered casement door profiles — the HL50 and HL40 — built for lasting performance and architectural clarity."
        bg="/services/services-02.png"
      />

      <ApplicationsSection image="/services/services-02.png" />
      <FeatureSection image="/services/services-02.png" />
      <KeyFeaturesSection />
      <WhyChooseUs />

      {/* Door Systems list */}
      <section className={styles.windowsSection}>
        <div className={styles.windowsInner}>
          <h2 className={styles.windowsHeading}>Door Systems</h2>
          <ul className={styles.windowsList}>
            {doorSystems.map((item) => (
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

      <VideoTestimonials />
      <Footer />
    </main>
  );
}
