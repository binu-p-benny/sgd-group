import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import styles from './product.module.css';

const products = {
  imperialss2: {
    name: 'ImperialSS2',
    tagline: 'Slim Window System',
    hero: '/services/services-01.png',
    intro: 'The ImperialSS2 is our flagship slim-profile window system, engineered for architects and homeowners who demand expansive glass with minimal sightlines. Its precision-extruded frames deliver structural strength while keeping the visible aluminium to an absolute minimum — flooding interiors with natural light.',
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
    tagline: 'Slim Window System',
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
    tagline: 'Slim Window System',
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
    name: 'RetroGulf',
    tagline: 'Slim Window System',
    hero: '/services/services-04.png',
    intro: 'RetroGulf is a retrofit-friendly slim system designed to upgrade existing openings with minimal disruption. It delivers modern thermal and acoustic performance while preserving the architectural character of the original structure.',
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
  'eco-gulf': {
    name: 'Eco Gulf',
    tagline: 'Slim Window System',
    hero: '/services/services-01.png',
    intro: 'Eco Gulf is our most sustainable slim system, built from recycled-content aluminium and optimised for energy efficiency. It pairs responsible materials with the same slim aesthetic and reliable performance our systems are known for.',
    image: '/services/services-02.png',
    specs: [
      { label: 'Frame Depth', value: '46 mm' },
      { label: 'Sightline', value: '23 mm (interlock)' },
      { label: 'Max Sash Weight', value: '120 kg' },
      { label: 'Glazing', value: 'Double / Triple' },
      { label: 'Finish', value: 'Powder-coated' },
      { label: 'Air Tightness', value: 'Class 4' },
    ],
    features: [
      { title: 'Recycled Aluminium', desc: 'Profiles made with high recycled content for a lower footprint.' },
      { title: 'Energy Efficient', desc: 'Triple-glazing-ready thermal break for year-round comfort.' },
      { title: 'Low Maintenance', desc: 'Durable finishes that need minimal upkeep over decades.' },
      { title: 'Weather Sealing', desc: 'Class 4 air-tightness with premium EPDM gaskets.' },
    ],
    applications: ['Green Buildings', 'Homes', 'Offices'],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) return {};
  const url = `https://sgdgroup.in/products/slim-window-systems/${product}`;
  return {
    title: `${data.name} | Slim Window Systems | SGD Group of Companies Kerala`,
    description: data.intro.slice(0, 155),
    openGraph: {
      title: `${data.name} | SGD Group`,
      description: data.intro.slice(0, 155),
      url,
      siteName: 'SGD Group of Companies',
      type: 'website',
    },
    alternates: { canonical: url },
  };
}

export default async function SlimWindowProductPage({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) notFound();

  return (
    <main>
      <Navigation />
      <PageHero title={data.name} bg={data.hero} />

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <div className={styles.breadcrumbInner}>
          <Link href="/products/slim-window-systems">Slim Window Systems</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.current}>{data.name}</span>
        </div>
      </nav>

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
