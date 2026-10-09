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
    hero: '/products/eco-gulf-a.jpg',
    intro: 'Eco Gulf is our sustainable window system, crafted with recycled-content aluminium and designed for better energy efficiency. It combines responsible material choices with a sleek, modern appearance and dependable performance, helping create comfortable spaces while supporting a more environmentally conscious approach to contemporary architecture.',
    image: '/products/eco-gulf-b.jpg',
    specs: [
      { label: '2 Track Frame Width', value: '83 mm' },
      { label: '3 Track Frame Width', value: '120 mm' },
      { label: 'Frame Height', value: '41 mm' },
      { label: 'Interlock Sightline', value: '19 mm' },
      { label: 'Glass Thickness', value: '5 mm – 11.5 mm' },
      { label: 'Max Shutter Height', value: '2100 mm' },
      { label: 'Max Shutter Width', value: '1200 mm' },
      { label: 'Locking Type', value: 'Single / Multi Point Locking' },
      { label: 'Mosquito Net', value: 'Shutter / Pleated' },
      { label: 'Roller Capacity', value: 'Up to 80 kg' },
    ],
    features: [
      { title: 'Energy-Efficient Design', desc: 'Designed to improve indoor comfort and support lower energy consumption.' },
      { title: 'Slim & Modern Look', desc: 'Sleek profiles create a clean, contemporary appearance that complements modern architecture.' },
      { title: 'Built for Everyday Performance', desc: 'A practical balance of sustainability, durability, and reliable functionality for homes and commercial spaces.' },
    ],
    applications: ['Green Buildings', 'Homes', 'Offices'],
  },
  hl40: {
    name: 'HL-40',
    tagline: 'Aluminium Window System',
    hero: '/products/hl40-a.jpg',
    intro: 'HL-40 is a thoughtfully engineered aluminium window system designed for modern spaces. Its refined profile, durable construction, and smooth functionality bring together style and performance. With clean aesthetics and dependable quality, HL-40 offers a practical, elegant solution for homes and commercial projects seeking lasting value.',
    image: '/products/hl40-b.jpg',
    specs: [
      { label: 'Frame Width', value: '40 mm' },
      { label: 'Frame Height', value: '39 mm' },
      { label: 'Glass Thickness', value: '4 mm – 24 mm' },
      { label: 'Max Shutter Height', value: '1900 mm' },
      { label: 'Max Shutter Width', value: '700 mm' },
      { label: 'Locking Type', value: 'Multi / Single' },
    ],
    features: [
      { title: 'Slim & Elegant Profiles', desc: 'Clean, refined lines give your spaces a modern and sophisticated look.' },
      { title: 'Strong Aluminium Construction', desc: 'Built for everyday use with dependable strength and lasting durability.' },
      { title: 'Smooth Everyday Operation', desc: 'Designed for effortless opening, closing, and comfortable daily use.' },
      { title: 'Made for Modern Spaces', desc: 'A versatile system that fits beautifully into contemporary homes, villas, and commercial projects.' },
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
  const url = `https://sgdgroupofcompanies.com/products/aluminium-window-systems/${product}`;
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
          { name: 'Home', url: 'https://sgdgroupofcompanies.com' },
          { name: 'Products', url: 'https://sgdgroupofcompanies.com/products' },
          { name: 'Aluminium Window Systems', url: 'https://sgdgroupofcompanies.com/products/aluminium-window-systems' },
          { name: data.name, url: `https://sgdgroupofcompanies.com/products/aluminium-window-systems/${product}` },
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
          <h2 className={styles.sectionHeading}>Technical Specifications</h2>
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
