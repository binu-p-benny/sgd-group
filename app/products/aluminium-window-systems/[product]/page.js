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
    intro: 'Eco Gulf is our sustainable window system, crafted with recycled-content aluminium and designed for better energy efficiency. It combines responsible material choices with a sleek, modern appearance and dependable performance, helping create comfortable spaces while supporting a more environmentally conscious approach to contemporary architecture.',
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
      { title: 'Recycled Aluminium', desc: 'Made with recycled-content aluminium, helping reduce material waste while maintaining quality and strength.' },
      { title: 'Energy-Efficient Design', desc: 'Designed to improve indoor comfort and support lower energy consumption.' },
      { title: 'Slim & Modern Look', desc: 'Sleek profiles create a clean, contemporary appearance that complements modern architecture.' },
      { title: 'Built for Everyday Performance', desc: 'A practical balance of sustainability, durability, and reliable functionality for homes and commercial spaces.' },
    ],
    applications: ['Green Buildings', 'Homes', 'Offices'],
  },
  hl40: {
    name: 'HL-40',
    tagline: 'Aluminium Window System',
    hero: '/services/services-03.png',
    intro: 'HL-40 is a thoughtfully engineered aluminium window system designed for modern spaces. Its refined profile, durable construction, and smooth functionality bring together style and performance. With clean aesthetics and dependable quality, HL-40 offers a practical, elegant solution for homes and commercial projects seeking lasting value.',
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
      { title: 'Slim & Elegant Profiles', desc: 'Clean, refined lines give your spaces a modern and sophisticated look.' },
      { title: 'Strong Aluminium Construction', desc: 'Built for everyday use with dependable strength and lasting durability.' },
      { title: 'Smooth Everyday Operation', desc: 'Designed for effortless opening, closing, and comfortable daily use.' },
      { title: 'Made for Modern Spaces', desc: 'A versatile system that fits beautifully into contemporary homes, villas, and commercial projects.' },
    ],
    applications: ['Balconies', 'Patios', 'Apartments', 'Homes'],
  },
  blaze: {
    name: 'Blaze',
    tagline: 'Aluminium Window System',
    hero: '/services/services-03.png',
    intro: 'Blaze is a premium aluminium window system designed to bring together bold aesthetics, dependable strength, and everyday comfort. With its clean profile and refined finish, it adds a contemporary touch to any space while delivering smooth functionality, lasting durability, and reliable performance for modern homes.',
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
      { title: 'Bold, Modern Design', desc: 'Clean lines and a refined profile give every space a confident, contemporary look.' },
      { title: 'Built for Strength', desc: 'Durable aluminium construction delivers dependable performance for years of everyday use.' },
      { title: 'Smooth & Effortless Operation', desc: 'Designed for easy handling and comfortable daily use.' },
      { title: 'Premium Finish & Feel', desc: 'Thoughtfully finished to add a sophisticated touch to modern homes and commercial spaces.' },
    ],
    applications: ['Signature Elevations', 'Luxury Villas', 'Boutique Hotels'],
  },
  'slide-pro': {
    name: 'Slide-Pro',
    tagline: 'Aluminium Window System',
    hero: '/services/services-01.png',
    intro: 'Slide-Pro is a thoughtfully designed aluminium sliding window system that combines sleek aesthetics with smooth, effortless movement. Built for modern homes and commercial spaces, it offers dependable strength, practical functionality, and a refined finish, creating a seamless connection between indoor comfort and the outside world.',
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
      { title: 'Smooth Sliding Experience', desc: 'Glides effortlessly for easy opening and closing every day.' },
      { title: 'Slim, Modern Profiles', desc: 'Clean lines create a sleek appearance while maximizing the glass area and natural light.' },
      { title: 'Strong & Reliable Build', desc: 'Quality aluminium construction provides lasting strength and dependable everyday performance.' },
      { title: 'Seamless Indoor-Outdoor Connection', desc: 'Designed to open up your space and create a more connected, comfortable living experience.' },
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
