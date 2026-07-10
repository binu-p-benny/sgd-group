import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import styles from './product.module.css';

const products = {
  hl50: {
    name: 'HL50',
    tagline: 'Casement Door System',
    hero: '/services/services-02.png',
    intro: 'HL50 is our heavy-duty casement door series, built on a 50 mm profile for large openings and high-traffic entrances. Reinforced corner joints and multi-point locking deliver commercial-grade security without sacrificing the clean sightlines architects ask for.',
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
  hl40: {
    name: 'HL40',
    tagline: 'Casement Door System',
    hero: '/services/services-03.png',
    intro: 'HL40 is a slimmer 40 mm profile casement door built for residential projects that want the same durability as HL50 in a lighter, more compact frame. It is our most popular series for balconies, patios, and everyday entrances.',
    image: '/services/services-04.png',
    specs: [
      { label: 'Frame Depth', value: '40 mm' },
      { label: 'Panel Weight', value: 'Up to 90 kg' },
      { label: 'Locking', value: 'Multi-point, 2 hooks' },
      { label: 'Glazing', value: 'Double' },
      { label: 'Finish', value: 'Powder-coated' },
      { label: 'Air Tightness', value: 'Class 3' },
    ],
    features: [
      { title: 'Compact Profile', desc: '40 mm frame depth for a lighter, residential-friendly look.' },
      { title: 'Smooth Operation', desc: 'Precision hinges keep every open and close effortless.' },
      { title: 'Weather Sealing', desc: 'EPDM gaskets deliver Class 3 air-tightness and rain resistance.' },
      { title: 'Premium Glass', desc: 'Saint-Gobain toughened glass for safety, clarity and durability.' },
    ],
    applications: ['Balconies', 'Patios', 'Apartments', 'Homes'],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) return {};
  const url = `https://sgdgroup.in/products/casement-door-systems/${product}`;
  return {
    title: `${data.name} | Casement Door Systems | SGD Group of Companies Kerala`,
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

export default async function CasementDoorProductPage({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) notFound();

  return (
    <main>
      <Navigation />
      <PageHero bg={data.hero} />

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
