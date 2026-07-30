import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import BreadcrumbJsonLd from '@/components/shared/BreadcrumbJsonLd';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import styles from './product.module.css';

const products = {
  'vertical-sliding': {
    name: 'Vertical Sliding',
    tagline: 'Signature System',
    hero: '/services/services-02.png',
    intro: 'Our Vertical Sliding system recreates the classic sash-window motion in modern aluminium — sashes glide up and down on concealed spring balances, ideal for heritage-style facades that still need contemporary performance.',
    image: '/services/services-03.png',
    specs: [
      { label: 'Frame Depth', value: '52 mm' },
      { label: 'Balance', value: 'Concealed spring balance' },
      { label: 'Max Sash Weight', value: '60 kg per sash' },
      { label: 'Glazing', value: 'Double' },
      { label: 'Finish', value: 'Powder-coated / Anodised' },
      { label: 'Air Tightness', value: 'Class 3' },
    ],
    features: [
      { title: 'Heritage Aesthetic', desc: 'Classic sash proportions with modern aluminium performance.' },
      { title: 'Concealed Balances', desc: 'Spring balances hold each sash smoothly at any height.' },
      { title: 'Easy-Clean Tilt', desc: 'Sashes tilt inward for safe cleaning from inside the room.' },
      { title: 'Weather Sealing', desc: 'Brush and EPDM seals keep drafts and rain out.' },
    ],
    applications: ['Heritage Buildings', 'Period-Style Homes', 'Renovations'],
  },
  'tilt-turn': {
    name: 'Tilt & Turn',
    tagline: 'Signature System',
    hero: '/services/services-03.png',
    intro: 'Tilt & Turn gives a single sash two ways to open: tilted inward from the top for secure, draft-free ventilation, or turned fully inward on its side hinge for cleaning and emergency egress.',
    image: '/services/services-04.png',
    specs: [
      { label: 'Frame Depth', value: '50 mm' },
      { label: 'Hardware', value: 'Multi-point tilt & turn gear' },
      { label: 'Max Sash Weight', value: '130 kg' },
      { label: 'Glazing', value: 'Double / Triple' },
      { label: 'Finish', value: 'Powder-coated / Anodised' },
      { label: 'Air Tightness', value: 'Class 4' },
    ],
    features: [
      { title: 'Dual Function', desc: 'Tilt for secure ventilation, turn for full opening and cleaning access.' },
      { title: 'Multi-Point Locking', desc: 'Locks around the full sash perimeter in both positions.' },
      { title: 'Child-Safe Ventilation', desc: 'Tilt position ventilates without a full opening.' },
      { title: 'Thermal Break', desc: 'Continuous thermal barrier for year-round comfort.' },
    ],
    applications: ['Apartments', 'Bedrooms', 'High-Rise Facades'],
  },
  'sliding-folding': {
    name: 'Sliding Folding',
    tagline: 'Signature System',
    hero: '/services/services-04.png',
    intro: 'Sliding Folding doors stack panel against panel to open an entire wall, turning indoor and outdoor spaces into one. Heavy-duty top-hung rollers carry the load, so the threshold stays low and easy to walk over.',
    image: '/services/services-01.png',
    specs: [
      { label: 'Frame Depth', value: '46 mm' },
      { label: 'Panels', value: '3 to 7-panel configurations' },
      { label: 'Max Panel Weight', value: '100 kg' },
      { label: 'Glazing', value: 'Double' },
      { label: 'Finish', value: 'Powder-coated' },
      { label: 'Air Tightness', value: 'Class 3' },
    ],
    features: [
      { title: 'Full-Wall Opening', desc: 'Panels stack neatly to one or both sides for a fully open wall.' },
      { title: 'Top-Hung Rollers', desc: 'Heavy-duty top track carries the load for a low, easy threshold.' },
      { title: 'Flexible Configurations', desc: 'From 3 to 7 panels to match any opening width.' },
      { title: 'Weather Sealing', desc: 'Compression seals at every panel join keep the line weathertight.' },
    ],
    applications: ['Patios', 'Restaurants', 'Indoor-Outdoor Living Rooms'],
  },
  'parallel-opening': {
    name: 'Parallel Opening',
    tagline: 'Signature System',
    hero: '/services/services-01.png',
    intro: 'Parallel Opening windows push out evenly along their whole perimeter, holding position at any angle for controlled, secure ventilation — a favourite for kitchens, bathrooms, and facades that need airflow without an open sash catching wind.',
    image: '/services/services-03.png',
    specs: [
      { label: 'Frame Depth', value: '48 mm' },
      { label: 'Hardware', value: 'Parallel friction stays' },
      { label: 'Max Sash Weight', value: '70 kg' },
      { label: 'Glazing', value: 'Double' },
      { label: 'Finish', value: 'Powder-coated' },
      { label: 'Air Tightness', value: 'Class 4' },
    ],
    features: [
      { title: 'Even Push-Out', desc: 'Sash opens parallel to the frame for controlled, draft-free airflow.' },
      { title: 'Wind-Safe Ventilation', desc: 'Stays hold the sash securely at any angle, even in strong wind.' },
      { title: 'Insect Screen Ready', desc: 'Compatible with fixed insect screens since the sash stays parallel.' },
      { title: 'Weather Sealing', desc: 'Class 4 air-tightness with premium EPDM gaskets.' },
    ],
    applications: ['Kitchens', 'Bathrooms', 'Commercial Ventilation Facades'],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) return {};
  const url = `https://sgdgroup.in/products/signature-systems/${product}`;
  return {
    title: `${data.name} | Signature Systems | SGD Group of Companies Kerala`,
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

export default async function SignatureSystemsProductPage({ params }) {
  const { product } = await params;
  const data = products[product];
  if (!data) notFound();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sgdgroup.in' },
          { name: 'Products', url: 'https://sgdgroup.in/products' },
          { name: 'Signature Systems', url: 'https://sgdgroup.in/products/signature-systems' },
          { name: data.name, url: `https://sgdgroup.in/products/signature-systems/${product}` },
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
