import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import BreadcrumbJsonLd from '@/components/shared/BreadcrumbJsonLd';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import styles from './product.module.css';

const products = {
  imperialss2: {
    name: 'Imperial SS2',
    tagline: 'Aluminium Door System',
    hero: '/services/services-01.png',
    intro: 'The Imperial SS2 is our flagship slim-profile window system, engineered for architects and homeowners who demand expansive glass with minimal sightlines. Its precision-extruded frames deliver structural strength while keeping the visible aluminium to an absolute minimum — flooding interiors with natural light.',
    image: '/services/services-02.png',
    specs: [
      { label: 'Frame Depth', value: '50 mm' },
      { label: 'Sightline', value: '20 mm (interlock)' },
      { label: 'Max Sash Weight', value: '160 kg' },
      { label: 'Glazing', value: 'Double / Triple' },
      { label: 'Finish', value: 'Powder-coated / Anodised' },
      { label: 'Air Tightness', value: 'Class 4' },
    ],
    features: [
      { title: 'Ultra-Slim Sightlines', desc: 'Just 20 mm interlock for near-frameless glass-to-glass transitions.' },
      { title: 'Thermal Break', desc: 'Polyamide thermal barrier for superior insulation and energy efficiency.' },
      { title: 'Heavy-Duty Hardware', desc: 'Pego rollers and locks rated for large panels, backed by a 10-year warranty.' },
      { title: 'Weather Sealing', desc: 'EPDM gaskets deliver Class 4 air-tightness and driving-rain resistance.' },
    ],
    applications: ['Luxury Villas', 'Penthouses', 'Commercial Facades', 'Renovations'],
  },
  vista: {
    name: 'Vista',
    tagline: 'Aluminium Door System',
    hero: '/services/services-02.png',
    intro: 'Vista balances slim aesthetics with everyday practicality. Designed for residential projects, it offers smooth operation, excellent weather resistance, and a refined finish that complements modern and traditional architecture alike.',
    image: '/services/services-03.png',
    specs: [
      { label: 'Frame Depth', value: '45 mm' },
      { label: 'Sightline', value: '24 mm (interlock)' },
      { label: 'Max Sash Weight', value: '120 kg' },
      { label: 'Glazing', value: 'Double' },
      { label: 'Finish', value: 'Powder-coated' },
      { label: 'Air Tightness', value: 'Class 3' },
    ],
    features: [
      { title: 'Clean Sightlines', desc: 'Slim 24 mm interlock for unobstructed views and abundant daylight.' },
      { title: 'Smooth Operation', desc: 'Precision rollers ensure effortless sliding across the lifetime of the system.' },
      { title: 'Durable Finish', desc: 'Architectural-grade powder coating resists fading and corrosion.' },
      { title: 'Weather Sealing', desc: 'Multi-point EPDM seals keep interiors dry and draught-free.' },
    ],
    applications: ['Apartments', 'Homes', 'Offices'],
  },
  ultra: {
    name: 'Ultra',
    tagline: 'Aluminium Door System',
    hero: '/services/services-03.png',
    intro: 'Ultra is built for large openings where strength matters. Reinforced profiles support oversized panels without compromising the slim look, making it ideal for high-rise and commercial applications exposed to wind load.',
    image: '/services/services-04.png',
    specs: [
      { label: 'Frame Depth', value: '60 mm' },
      { label: 'Sightline', value: '22 mm (interlock)' },
      { label: 'Max Sash Weight', value: '220 kg' },
      { label: 'Glazing', value: 'Double / Triple' },
      { label: 'Finish', value: 'Powder-coated / Anodised' },
      { label: 'Air Tightness', value: 'Class 4' },
    ],
    features: [
      { title: 'Oversized Panels', desc: 'Supports sashes up to 220 kg for floor-to-ceiling glazing.' },
      { title: 'Wind-Load Rated', desc: 'Reinforced profiles engineered for high-rise exposure.' },
      { title: 'Thermal Performance', desc: 'Triple-glazing-ready with a continuous thermal break.' },
      { title: 'Premium Glass', desc: 'Saint-Gobain toughened glass for safety, clarity and durability.' },
    ],
    applications: ['High-Rise', 'Commercial Facades', 'Luxury Villas'],
  },
  retrogulf: {
    name: 'Retro Gulf',
    tagline: 'Aluminium Door System',
    hero: '/services/services-04.png',
    intro: 'Retro Gulf is a retrofit-friendly slim system designed to upgrade existing openings with minimal disruption. It delivers modern thermal and acoustic performance while preserving the architectural character of the original structure.',
    image: '/services/services-01.png',
    specs: [
      { label: 'Frame Depth', value: '48 mm' },
      { label: 'Sightline', value: '25 mm (interlock)' },
      { label: 'Max Sash Weight', value: '110 kg' },
      { label: 'Glazing', value: 'Double' },
      { label: 'Finish', value: 'Powder-coated' },
      { label: 'Air Tightness', value: 'Class 3' },
    ],
    features: [
      { title: 'Retrofit-Ready', desc: 'Designed to fit existing openings with minimal builder work.' },
      { title: 'Acoustic Comfort', desc: 'Laminated glazing options cut external noise significantly.' },
      { title: 'Energy Saving', desc: 'Thermal break reduces heat transfer and lowers cooling costs.' },
      { title: 'Refined Finish', desc: 'A choice of finishes to match heritage or modern facades.' },
    ],
    applications: ['Renovations', 'Heritage Buildings', 'Apartments'],
  },
  hl50: {
    name: 'HL-50',
    tagline: 'Aluminium Door System',
    hero: '/services/services-02.png',
    intro: 'HL-50 is our heavy-duty casement door series, built on a 50 mm profile for large openings and high-traffic entrances. Reinforced corner joints and multi-point locking deliver commercial-grade security without sacrificing the clean sightlines architects ask for.',
    image: '/services/services-03.png',
    specs: [
      { label: 'Frame Depth', value: '50 mm' },
      { label: 'Panel Weight', value: 'Up to 120 kg' },
      { label: 'Locking', value: 'Multi-point, 3 hooks' },
      { label: 'Glazing', value: 'Double / Triple' },
      { label: 'Finish', value: 'Powder-coated / Anodised' },
      { label: 'Air Tightness', value: 'Class 4' },
    ],
    features: [
      { title: 'Heavy-Duty Frame', desc: '50 mm profile depth built for large, high-traffic door openings.' },
      { title: 'Multi-Point Locking', desc: 'Three-hook locking system for commercial-grade security.' },
      { title: 'Thermal Break', desc: 'Polyamide thermal barrier keeps interiors comfortable year-round.' },
      { title: 'Heavy-Duty Hardware', desc: 'Pego hinges and hardware rated for large panels, 10-year warranty.' },
    ],
    applications: ['Commercial Entrances', 'Villas', 'Offices', 'Showrooms'],
  },
  nexus: {
    name: 'Nexus',
    tagline: 'Aluminium Door System',
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
    tagline: 'Aluminium Door System',
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
};

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) return {};
  const url = `https://sgdgroup.in/products/aluminium-door-systems/${product}`;
  return {
    title: `${data.name} | Aluminium Door Systems | SGD Group of Companies Kerala`,
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

export default async function AluminiumDoorProductPage({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) notFound();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sgdgroup.in' },
          { name: 'Products', url: 'https://sgdgroup.in/products' },
          { name: 'Aluminium Door Systems', url: 'https://sgdgroup.in/products/aluminium-door-systems' },
          { name: data.name, url: `https://sgdgroup.in/products/aluminium-door-systems/${product}` },
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
