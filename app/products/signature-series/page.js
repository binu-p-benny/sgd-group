import Link from 'next/link';
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
  title: 'Signature Series | SGD Group of Companies Kerala',
  description: 'SGD Group\'s Signature Series — Nexus, Horizon and Blaze — our premium architectural aluminium systems for landmark residential and commercial projects.',
  keywords: 'signature series Kerala, premium aluminium systems, Nexus window system, Horizon window system, Blaze window system, SGD signature series',
  openGraph: {
    title: 'Signature Series | SGD Group',
    description: 'Premium architectural aluminium systems — Nexus, Horizon and Blaze — for landmark projects.',
    url: 'https://sgdgroup.in/products/signature-series',
    siteName: 'SGD Group of Companies',
    type: 'website',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: 'https://sgdgroup.in/products/signature-series',
  },
};

const featureItems = [
  { title: 'Extended Profile Range', desc: 'Reinforced sections engineered for oversized panels and tall openings.' },
  { title: 'Premium Finish Palette', desc: 'Matte anodised, custom powder coats, and dual-tone finishes on request.' },
  { title: 'Heavy-Duty Hardware', desc: 'Pego hardware rated for large panels, backed by a 10-Year Warranty.' },
  { title: 'Superior Weather Sealing', desc: 'Multi-point EPDM gaskets deliver Class 4 air-tightness, 15-Year Warranty.' },
  { title: 'Architectural Glass', desc: 'Saint-Gobain toughened and laminated glass options for safety and acoustics.' },
  { title: 'Dedicated Project Support', desc: 'A dedicated design consultant from concept through to installation.' },
];

const series = [
  { name: 'Nexus',   href: '/products/signature-series/nexus',   image: '/services/services-01.png' },
  { name: 'Horizon', href: '/products/signature-series/horizon', image: '/services/services-02.png' },
  { name: 'Blaze',   href: '/products/signature-series/blaze',   image: '/services/services-03.png' },
];

export default function SignatureSeriesPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Signature Series"
        title="Our most premium systems, signed by design."
        subtitle="Nexus, Horizon and Blaze — three architectural systems engineered for landmark residential and commercial projects."
        bg="/services/services-01.png"
      />

      <ApplicationsSection
        image="/services/services-01.png"
        description="The Signature Series is built for projects that push scale and design further — expansive facades, statement entrances, and panoramic openings. Every profile in the range is reinforced for larger panels while keeping the slim, architectural sightlines the collection is known for."
      />
      <FeatureSection
        image="/services/services-01.png"
        heading="Precision Engineering, Signature Finish"
        body="Each system in the Signature Series is developed with architects for projects where every detail is visible. Reinforced aluminium profiles support oversized glazing, while an extended range of anodised and custom powder-coated finishes lets every facade stand apart."
      />
      <KeyFeaturesSection features={featureItems} />

      {/* Mobile-only combined image grid — replaces the separate
          per-section images above with one compact mosaic */}
      <div className={styles.mobileImageGridWrap}>
        <div className={styles.mobileImageGrid}>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-01.png" alt="Signature Series applications" />
          </div>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-01.png" alt="Signature Series precision engineering" />
          </div>
          <div className={styles.mobileImageGridItem}>
            <img src="/services/services-04.png" alt="Why choose SGD Signature Series" />
          </div>
        </div>
      </div>

      <WhyChooseUs />

      {/* Series list */}
      <section className={styles.windowsSection}>
        <div className={styles.windowsInner}>
          <h2 className={styles.windowsHeading}>Explore the Series</h2>
          <ul className={styles.windowsList}>
            {series.map((item) => (
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
