import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import BreadcrumbJsonLd from '@/components/shared/BreadcrumbJsonLd';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import styles from './product.module.css';

const products = {
  'eco-gulf': {
    name: 'Eco Gulf',
    tagline: 'Aluminium Window System',
    hero: '/services/services-01.png',
    intro: 'Eco Gulf is our most sustainable window system, built from recycled-content aluminium and optimised for energy efficiency. It pairs responsible materials with the same slim aesthetic and reliable performance our systems are known for.',
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
  hl40: {
    name: 'HL-40',
    tagline: 'Aluminium Window System',
    hero: '/services/services-03.png',
    intro: 'HL-40 is a slimmer 40 mm profile casement door built for residential projects that want the same durability as HL-50 in a lighter, more compact frame. It is our most popular series for balconies, patios, and everyday entrances.',
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
  blaze: {
    name: 'Blaze',
    tagline: 'Aluminium Window System',
    hero: '/services/services-03.png',
    intro: 'Blaze is our statement pivot system, designed as the centrepiece of an elevation. A single oversized panel rotates on a concealed pivot hinge, delivering dramatic scale with precision-balanced operation.',
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
      { title: 'Statement Scale', desc: 'A single oversized panel makes a striking architectural feature.' },
      { title: 'Concealed Pivot Hinge', desc: 'Precision-balanced hinge hides all hardware from view.' },
      { title: 'Effortless Operation', desc: 'Engineered balance means even large panels swing smoothly.' },
      { title: 'Security Locking', desc: 'Multi-point locking rated for exterior security.' },
    ],
    applications: ['Signature Elevations', 'Luxury Villas', 'Boutique Hotels'],
  },
  'slide-pro': {
    name: 'Slide-Pro',
    tagline: 'Aluminium Window System',
    hero: '/services/services-01.png',
    intro: 'Slide-Pro is our multi-track horizontal sliding system, built for openings that need more panels than a standard 2-track slider can carry. Interlocking tracks keep large spans smooth and weathertight, panel after panel.',
    image: '/services/services-02.png',
    specs: [
      { label: 'Frame Depth', value: '48 mm' },
      { label: 'Tracks', value: '2, 3 or 4-track' },
      { label: 'Max Panel Weight', value: '150 kg' },
      { label: 'Glazing', value: 'Double' },
      { label: 'Finish', value: 'Powder-coated' },
      { label: 'Air Tightness', value: 'Class 3' },
    ],
    features: [
      { title: 'Multi-Track Design', desc: '2, 3 or 4-track configurations for wide openings.' },
      { title: 'Interlocking Panels', desc: 'Weathertight seals maintained across every panel join.' },
      { title: 'Smooth Rollers', desc: 'Precision ball-bearing rollers for effortless sliding, even fully loaded.' },
      { title: 'Weather Sealing', desc: 'EPDM gaskets deliver Class 3 air-tightness across all tracks.' },
    ],
    applications: ['Balconies', 'Wide Living Room Openings', 'Verandas'],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) return {};
  const url = `https://sgdgroup.in/products/aluminium-window-systems/${product}`;
  return {
    title: `${data.name} | Aluminium Window Systems | SGD Group of Companies Kerala`,
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

export default async function AluminiumWindowProductPage({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) notFound();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sgdgroup.in' },
          { name: 'Products', url: 'https://sgdgroup.in/products' },
          { name: 'Aluminium Window Systems', url: 'https://sgdgroup.in/products/aluminium-window-systems' },
          { name: data.name, url: `https://sgdgroup.in/products/aluminium-window-systems/${product}` },
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
