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
  title: 'Signature Systems | SGD Group of Companies Kerala',
  description: 'SGD Group\'s signature aluminium systems — Parallel Opening, Tilt & Turn, Vertical Sliding, and Sliding Folding — for openings that need a different mechanism.',
  keywords: 'speciality window systems Kerala, tilt and turn windows, sliding folding doors, vertical sliding windows, parallel opening windows, SGD signature systems',
  openGraph: {
    title: 'Signature Systems | SGD Group',
    description: 'Signature aluminium window and door mechanisms for openings standard systems can\'t solve.',
    url: 'https://sgdgroup.in/products/signature-systems',
    siteName: 'SGD Group of Companies',
    type: 'website',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: 'https://sgdgroup.in/products/signature-systems',
  },
};

const featureItems = [
  { title: 'Four Opening Mechanisms', desc: 'From vertical sliding to parallel opening, a solution for every brief.' },
  { title: 'Multi-Bar Friction Stays', desc: 'Precision hardware holds tilt & turn and parallel sashes securely at any angle.' },
  { title: 'Smooth Folding Tracks', desc: 'Heavy-duty rollers keep wide sliding-folding openings gliding effortlessly.' },
  { title: 'Weather-Resistant Sealing', desc: 'Premium EPDM gaskets across every mechanism, backed by a 15-Year Warranty.' },
  { title: 'Superior Glass Quality', desc: 'Saint-Gobain toughened glass for enhanced safety, clarity and durability.' },
  { title: 'Support', desc: 'We provide ongoing support, maintenance advice, and service when needed.' },
];

const systems = [
  { name: 'Parallel Opening', href: '/products/signature-systems/parallel-opening', image: '/services/services-01.png' },
  { name: 'Tilt & Turn',      href: '/products/signature-systems/tilt-turn',        image: '/services/services-03.png' },
  { name: 'Vertical Sliding', href: '/products/signature-systems/vertical-sliding', image: '/services/services-02.png' },
  { name: 'Sliding Folding',  href: '/products/signature-systems/sliding-folding',  image: '/services/services-04.png' },
];

export default function SignatureSystemsPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Signature Systems"
        title="For the openings standard systems can't solve."
        subtitle="Parallel Opening, Tilt & Turn, Vertical Sliding, and Sliding Folding — four mechanisms engineered for every kind of opening."
        bg="/services/services-04.png"
      />

      <ApplicationsSection
        image="/services/services-01.png"
        description="Our Signature Systems bring thoughtful design and practical performance together. From flexible Parallel Opening and versatile Tilt & Turn to space-saving Vertical Sliding and expansive Sliding Folding solutions, each system is crafted to suit modern lifestyles. With refined aluminium profiles, smooth operation, and lasting durability, these designs help create comfortable, elegant spaces that feel truly yours."
      />
      <FeatureSection
        image="/services/services-02.png"
        heading="Four Mechanisms, One Standard of Quality"
        body="Whether it's a vertical sliding sash for a heritage-style facade, a tilt & turn window for easy cleaning, or a sliding-folding door that opens an entire wall, every Signature System is built with the same precision hardware, weather sealing, and toughened glass as the rest of our collection."
      />
      <KeyFeaturesSection features={featureItems} />

      {/* Mobile-only combined image grid — replaces the separate
          per-section images above with one compact mosaic */}
      <div className={styles.mobileImageGridWrap}>
        <div className={styles.mobileImageGrid}>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-01.png" alt="Signature systems applications" />
          </div>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-02.png" alt="Signature systems mechanisms" />
          </div>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-04.png" alt="Why choose SGD Signature Systems" />
          </div>
        </div>
      </div>

      <WhyChooseUs />

      {/* Systems list */}
      <section className={styles.windowsSection}>
        <div className={styles.windowsInner}>
          <h2 className={styles.windowsHeading}>Explore the Systems</h2>
          <ul className={styles.windowsList}>
            {systems.map((item) => (
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
