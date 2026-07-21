import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import BreadcrumbJsonLd from '@/components/shared/BreadcrumbJsonLd';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import styles from './product.module.css';

const products = {
  nexus: {
    name: 'Nexus',
    tagline: 'Signature Series',
    hero: '/services/services-01.png',
    intro: 'Nexus is our modular curtain-wall system, built to link large glazed panels into a single continuous facade. Concealed structural silicone joints and a reinforced mullion grid let architects design expansive, uninterrupted glass elevations.',
    image: '/services/services-02.png',
    specs: [
      { label: 'System Type', value: 'Unitised Curtain Wall' },
      { label: 'Mullion Depth', value: '75 mm' },
      { label: 'Max Panel Height', value: '4.5 m' },
      { label: 'Glazing', value: 'Double / Triple, structural silicone' },
      { label: 'Finish', value: 'Anodised / Custom powder coat' },
      { label: 'Wind Load', value: 'Engineered per project' },
    ],
    features: [
      { title: 'Continuous Facades', desc: 'Concealed joints create an uninterrupted glass elevation.' },
      { title: 'Structural Glazing', desc: 'Structural silicone bonding for a flush, frameless exterior face.' },
      { title: 'Engineered Wind Rating', desc: 'Reinforced mullion grid engineered to project-specific wind load.' },
      { title: 'Thermal Performance', desc: 'Continuous thermal break across the full mullion depth.' },
    ],
    applications: ['Commercial Towers', 'Corporate Facades', 'Landmark Buildings'],
  },
  horizon: {
    name: 'Horizon',
    tagline: 'Signature Series',
    hero: '/services/services-02.png',
    intro: 'Horizon is our panoramic sliding system, engineered for openings that erase the line between indoors and outdoors. Slim, low-profile tracks and oversized panel capacity make it the system of choice for pool-facing living rooms and rooftop lounges.',
    image: '/services/services-03.png',
    specs: [
      { label: 'Frame Depth', value: '55 mm' },
      { label: 'Max Panel Weight', value: '300 kg' },
      { label: 'Track', value: 'Low-profile, flush threshold option' },
      { label: 'Glazing', value: 'Double / Triple' },
      { label: 'Finish', value: 'Powder-coated / Anodised' },
      { label: 'Air Tightness', value: 'Class 4' },
    ],
    features: [
      { title: 'Panoramic Views', desc: 'Slim vertical sightlines maximise glass area on every panel.' },
      { title: 'Oversized Panels', desc: 'Supports panels up to 300 kg for dramatic, uninterrupted openings.' },
      { title: 'Flush Threshold', desc: 'Optional low-profile track for a seamless indoor-outdoor transition.' },
      { title: 'Effortless Glide', desc: 'Precision ball-bearing rollers keep large panels moving smoothly.' },
    ],
    applications: ['Pool-Facing Living Rooms', 'Rooftop Lounges', 'Luxury Villas'],
  },
  blaze: {
    name: 'Blaze',
    tagline: 'Signature Series',
    hero: '/services/services-03.png',
    intro: 'Blaze is our statement pivot-door system, designed as the centrepiece of an entrance. A single oversized panel rotates on a concealed pivot hinge, delivering dramatic scale with precision-balanced operation.',
    image: '/services/services-04.png',
    specs: [
      { label: 'Panel Width', value: 'Up to 1.4 m' },
      { label: 'Panel Height', value: 'Up to 3 m' },
      { label: 'Hinge', value: 'Concealed floor & head pivot' },
      { label: 'Glazing', value: 'Double, laminated safety glass' },
      { label: 'Finish', value: 'Anodised / Custom powder coat' },
      { label: 'Locking', value: 'Multi-point security lock' },
    ],
    features: [
      { title: 'Statement Scale', desc: 'A single oversized panel makes a striking architectural entrance.' },
      { title: 'Concealed Pivot Hinge', desc: 'Precision-balanced hinge hides all hardware from view.' },
      { title: 'Effortless Operation', desc: 'Engineered balance means even large panels swing smoothly.' },
      { title: 'Security Locking', desc: 'Multi-point locking rated for main entrance security.' },
    ],
    applications: ['Signature Entrances', 'Luxury Villas', 'Boutique Hotels'],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) return {};
  const url = `https://sgdgroup.in/products/signature-series/${product}`;
  return {
    title: `${data.name} | Signature Series | SGD Group of Companies Kerala`,
    description: data.intro.slice(0, 155),
    openGraph: {
      title: `${data.name} | SGD Group`,
      description: data.intro.slice(0, 155),
      url,
      siteName: 'SGD Group of Companies',
      type: 'website',
      images: ['/hero.png'],
    },
    alternates: { canonical: url },
  };
}

export default async function SignatureSeriesProductPage({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) notFound();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sgdgroup.in' },
          { name: 'Products', url: 'https://sgdgroup.in/products' },
          { name: 'Signature Series', url: 'https://sgdgroup.in/products/signature-series' },
          { name: data.name, url: `https://sgdgroup.in/products/signature-series/${product}` },
        ]}
      />
      <Navigation />
      <PageHero title={data.name} bg={data.hero} />

      {/* Overview */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <div className={styles.overviewText}>
            <p className={styles.eyebrow}>{data.tagline}</p>
            <h2 className={styles.heading}>{data.name}</h2>
            <p className={styles.body}>{data.intro}</p>
          </div>
          <div className={styles.overviewImage}>
            <img src={data.image} alt={data.name} />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className={styles.specs}>
        <div className={styles.specsInner}>
          <h2 className={styles.sectionHeading}>Specifications</h2>
          <div className={styles.specsGrid}>
            {data.specs.map((s) => (
              <div key={s.label} className={styles.specItem}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValue}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <h2 className={styles.sectionHeading}>Key Features</h2>
          <div className={styles.featuresGrid}>
            {data.features.map((f, i) => (
              <div key={f.title} className={styles.featureItem}>
                <div className={styles.featureBadge}>{i + 1}</div>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications + CTA */}
      <section className={styles.applications}>
        <div className={styles.applicationsInner}>
          <div>
            <h2 className={styles.sectionHeading}>Applications</h2>
            <div className={styles.appTags}>
              {data.applications.map((a) => (
                <span key={a} className={styles.appTag}>{a}</span>
              ))}
            </div>
          </div>
          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>Interested in {data.name}?</h3>
            <p className={styles.ctaText}>Get a tailored quote or technical specifications for your project.</p>
            <Link href="/contact" className={styles.ctaBtn}>Enquire Now →</Link>
          </div>
        </div>
      </section>

      <VideoTestimonials />
      <Footer />
    </main>
  );
}
