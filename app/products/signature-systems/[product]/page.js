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
    intro: 'Vertical Sliding is a stylish aluminium window system that combines classic character with modern functionality. Designed to move smoothly up and down, it offers practical ventilation without taking up extra space. With durable construction, clean profiles, and refined finishes, it brings comfort, elegance, and reliable performance to modern homes and commercial spaces.',
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
      { title: 'Space-Saving Design', desc: 'Opens vertically without taking up valuable room inside or outside.' },
      { title: 'Smooth Sliding Action', desc: 'Designed for easy, comfortable opening and closing every day.' },
      { title: 'Classic Meets Modern', desc: 'Combines timeless vertical styling with sleek aluminium profiles for a contemporary finish.' },
      { title: 'Built for Lasting Use', desc: 'Durable construction delivers reliable performance, comfort, and functionality over the years.' },
    ],
    applications: ['Heritage Buildings', 'Period-Style Homes', 'Renovations'],
  },
  'tilt-turn': {
    name: 'Tilt & Turn',
    tagline: 'Signature System',
    hero: '/services/services-03.png',
    intro: 'Tilt & Turn is a versatile aluminium window system designed for modern comfort and flexibility. Its dual-opening function lets you tilt the window for gentle ventilation or turn it fully open when you need more airflow. With clean lines, smooth operation, and lasting durability, it suits contemporary homes and commercial spaces.',
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
      { title: 'Two Ways to Open', desc: 'Tilt for gentle ventilation or turn fully open for maximum airflow and access.' },
      { title: 'Better Everyday Ventilation', desc: 'Enjoy fresh air while maintaining comfort and control inside your space.' },
      { title: 'Clean, Modern Appearance', desc: 'Sleek aluminium profiles complement contemporary homes, villas, and commercial architecture.' },
      { title: 'Smooth & Reliable Operation', desc: 'Precision-engineered for effortless handling, lasting durability, and dependable everyday performance.' },
    ],
    applications: ['Apartments', 'Bedrooms', 'High-Rise Facades'],
  },
  'sliding-folding': {
    name: 'Sliding Folding',
    tagline: 'Signature System',
    hero: '/services/services-04.png',
    intro: 'Sliding Folding is a versatile aluminium door system designed to open spaces beautifully. Its smooth folding panels create a wide, unobstructed opening, making indoor and outdoor areas feel naturally connected. With strong construction, sleek profiles, and effortless operation, it brings flexibility, natural light, and modern elegance to homes and commercial spaces.',
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
      { title: 'Wide, Open Spaces', desc: 'Folding panels create a generous opening, helping connect indoor and outdoor areas beautifully.' },
      { title: 'Smooth Folding Movement', desc: 'Designed for easy, effortless operation when opening or closing multiple panels.' },
      { title: 'Sleek Modern Profiles', desc: 'Slim aluminium frames offer a clean, contemporary appearance with plenty of natural light.' },
      { title: 'Strong & Reliable Build', desc: 'Durable construction delivers dependable performance while maintaining comfort and elegance over time.' },
    ],
    applications: ['Patios', 'Restaurants', 'Indoor-Outdoor Living Rooms'],
  },
  'parallel-opening': {
    name: 'Parallel Opening',
    tagline: 'Signature System',
    hero: '/services/services-01.png',
    intro: 'Parallel Opening is a thoughtfully designed aluminium window system that brings fresh air, natural light, and everyday comfort into your space. Its unique opening style allows the window to move outward evenly, creating effective ventilation while maintaining a clean, modern appearance and dependable performance for contemporary homes and commercial spaces.',
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
      { title: 'Fresh Air, Better Comfort', desc: 'Designed to open outward and bring more natural ventilation into your space.' },
      { title: 'Wide, Even Opening', desc: 'The parallel opening action creates a balanced airflow while making the most of the available opening.' },
      { title: 'Modern, Minimal Look', desc: 'Clean aluminium profiles complement contemporary architecture with a refined appearance.' },
      { title: 'Built for Everyday Performance', desc: 'Durable construction and smooth operation provide reliable comfort and functionality for years.' },
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
