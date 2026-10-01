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
    hero: '/products/imperial-ss2-a.jpg',
    intro: 'Imperial SS2 brings together refined aluminium design, dependable strength, and effortless functionality for modern spaces. Its elegant profile and premium finish create a sophisticated entrance, while thoughtful engineering ensures lasting performance. Ideal for homes and commercial projects, it adds comfort, security, and timeless character to every space.',
    image: '/products/imperial-ss2-a.jpg',
    specs: [
      { label: 'Track Frame Width', value: '225 mm' },
      { label: 'Track Frame Height', value: '105 mm' },
      { label: 'Interlock Sightline', value: '17 mm' },
      { label: 'Glass Thickness', value: '20 mm – 38 mm' },
      { label: 'Max Shutter Height', value: '6000 mm' },
      { label: 'Max Shutter Width', value: '3500 mm' },
      { label: 'Locking Type', value: 'Multi Locking (Top-Bottom)' },
      { label: 'Mosquito Net', value: 'No' },
      { label: 'Roller Capacity', value: 'Up to 500 kg' },
    ],
    features: [
      { title: 'Premium, Refined Design', desc: 'Elegant profiles and clean lines create a sophisticated architectural look.' },
      { title: 'Strong & Durable Build', desc: 'Quality aluminium construction provides dependable strength for everyday use.' },
      { title: 'Smooth & Secure Operation', desc: 'Designed for effortless movement while providing confidence and reliable security.' },
      { title: 'Timeless Premium Finish', desc: 'A carefully finished surface that complements both contemporary homes and commercial spaces.' },
    ],
    applications: ['Luxury Villas', 'Penthouses', 'Commercial Facades', 'Renovations'],
  },
  vista: {
    name: 'Vista',
    tagline: 'Aluminium Door System',
    hero: '/products/vista-a.jpg',
    intro: 'Vista is a modern aluminium door system designed to bring openness, elegance, and dependable performance into everyday spaces. Its clean profile and generous glass areas create a bright, welcoming feel, while durable construction ensures lasting reliability. Ideal for contemporary homes and commercial projects, Vista connects style, comfort, and functionality beautifully.',
    image: '/products/vista-a.jpg',
    specs: [
      { label: '2 Track Frame Width', value: '150 mm' },
      { label: '3 Track Frame Width', value: '217 mm' },
      { label: 'Track Frame Height', value: '31 mm' },
      { label: 'Interlock Sightline', value: '17 mm' },
      { label: 'Glass Thickness', value: '12 mm – 32 mm' },
      { label: 'Max Shutter Height', value: '4500 mm' },
      { label: 'Max Shutter Width', value: '3000 mm' },
      { label: 'Locking Type', value: 'Multi Locking (Top-Bottom)' },
      { label: 'Mosquito Net', value: 'Pleated' },
      { label: 'Roller Capacity', value: 'Up to 300 kg' },
    ],
    features: [
      { title: 'More Light, More Openness', desc: 'Generous glass areas bring natural light into your space and create a brighter, more welcoming atmosphere.' },
      { title: 'Clean, Modern Design', desc: 'Sleek aluminium profiles complement contemporary architecture without overwhelming the overall look.' },
      { title: 'Built for Everyday Living', desc: 'Durable construction provides reliable performance and lasting strength for years to come.' },
      { title: 'Smooth & Comfortable Use', desc: 'Designed for effortless operation, bringing together convenience, functionality, and refined style.' },
    ],
    applications: ['Apartments', 'Homes', 'Offices'],
  },
  ultra: {
    name: 'Ultra',
    tagline: 'Aluminium Door System',
    hero: '/products/ultra-a.jpg',
    intro: 'Ultra is a premium aluminium door system created for those who value clean design, lasting strength, and everyday comfort. Its refined profile and quality construction deliver smooth functionality and dependable performance, while the elegant finish adds a sophisticated touch to modern homes, villas, and commercial spaces.',
    image: '/products/ultra-b.jpg',
    specs: [
      { label: '2 Track Frame Width', value: '118 mm' },
      { label: '3 Track Frame Width', value: '173 mm' },
      { label: 'Frame Height', value: '28 mm' },
      { label: 'Interlock Sightline', value: '19 mm' },
      { label: 'Glass Thickness', value: '5 mm – 20 mm' },
      { label: 'Max Shutter Height', value: '3600 mm' },
      { label: 'Max Shutter Width', value: '2000 mm' },
      { label: 'Locking Type', value: 'Multi Locking (Top-Bottom)' },
      { label: 'Mosquito Net', value: 'Pleated' },
      { label: 'Roller Capacity', value: 'Up to 250 kg' },
      { label: 'Wind Load Capacity', value: '2 kPa' },
    ],
    features: [
      { title: 'Refined Modern Design', desc: 'Sleek profiles and elegant detailing bring a premium look to contemporary spaces.' },
      { title: 'Strong & Long-Lasting', desc: 'Quality aluminium construction is built to handle everyday use with dependable strength.' },
      { title: 'Smooth Everyday Operation', desc: 'Thoughtfully engineered for easy, comfortable, and reliable use.' },
      { title: 'Premium Finish & Feel', desc: 'A sophisticated finish adds character while complementing modern homes, villas, and commercial spaces.' },
    ],
    applications: ['High-Rise', 'Commercial Facades', 'Luxury Villas'],
  },
  retrogulf: {
    name: 'Retro Gulf',
    tagline: 'Aluminium Door System',
    hero: '/products/retro-gulf-a.jpg',
    intro: 'Retro Gulf combines timeless character with modern aluminium engineering, bringing warmth, elegance, and dependable performance to your space. Its distinctive design adds personality while durable construction ensures lasting reliability. Ideal for homes and commercial projects, Retro Gulf creates an inviting architectural statement without compromising everyday comfort or functionality.',
    image: '/products/retro-gulf-b.jpg',
    specs: [
      { label: '2 Track Frame Width', value: '100 mm' },
      { label: '3 Track Frame Width', value: '150 mm' },
      { label: 'Frame Height', value: '41 mm' },
      { label: 'Interlock Sightline', value: '25 mm' },
      { label: 'Glass Thickness', value: '5 mm – 23 mm' },
      { label: 'Max Shutter Height', value: '3500 mm' },
      { label: 'Max Shutter Width', value: '2000 mm' },
      { label: 'Locking Type', value: 'Single / Multi Point Locking' },
      { label: 'Mosquito Net', value: 'Shutter / Pleated' },
    ],
    features: [
      { title: 'Timeless Character', desc: 'A distinctive design that brings warmth and personality to modern architecture.' },
      { title: 'Strong Aluminium Build', desc: 'Durable construction provides reliable performance and lasting everyday strength.' },
      { title: 'Smooth & Practical Operation', desc: 'Designed for comfortable, effortless use while maintaining a refined appearance.' },
      { title: 'Elegant, Versatile Finish', desc: 'Complements traditional, contemporary, and modern spaces with a premium architectural feel.' },
    ],
    applications: ['Renovations', 'Heritage Buildings', 'Apartments'],
  },
  hl50: {
    name: 'HL-50',
    tagline: 'Aluminium Door System',
    hero: '/products/hl50-a.jpg',
    intro: 'HL-50 is a premium aluminium casement door system designed for modern spaces that value clean aesthetics and dependable performance. Its strong construction, refined profile, and smooth functionality create a comfortable, elegant experience. Built for lasting durability, HL-50 is an ideal choice for contemporary homes, villas, and commercial projects.',
    image: '/products/hl50-a.jpg',
    specs: [
      { label: 'Frame Width', value: '50 mm' },
      { label: 'Frame Height', value: '46 mm' },
      { label: 'Glass Thickness', value: '5 mm – 38 mm' },
      { label: 'Max Shutter Height', value: '2500 mm' },
      { label: 'Max Shutter Width', value: '1350 mm' },
      { label: 'Locking Type', value: 'Multi / Single' },
    ],
    features: [
      { title: 'Clean, Modern Profile', desc: 'Sleek lines give your space a refined and contemporary architectural appearance.' },
      { title: 'Built for Lasting Strength', desc: 'Durable aluminium construction delivers reliable performance through everyday use.' },
      { title: 'Smooth & Easy Operation', desc: 'Designed for effortless handling, making daily use comfortable and convenient.' },
      { title: 'Premium Finish', desc: 'Carefully finished to complement modern homes, villas, offices, and commercial spaces.' },
    ],
    applications: ['Commercial Entrances', 'Villas', 'Offices', 'Showrooms'],
  },
  nexus: {
    name: 'Nexus',
    tagline: 'Aluminium Door System',
    hero: '/products/nexus-a.png',
    intro: 'Nexus is a modern aluminium door system designed to connect style, comfort, and reliable performance. Its clean profile and durable construction bring a refined look to contemporary spaces, while smooth functionality makes everyday living easier. Ideal for homes and commercial projects, Nexus delivers lasting quality with effortless elegance.',
    image: '/products/nexus-a.png',
    specs: [
      { label: 'Max Sash Width', value: '1500 mm' },
      { label: 'Max Sash Height', value: '3000 mm' },
      { label: 'Glass Thickness', value: '5 mm – 18 mm' },
      { label: 'Railing Glass Thickness', value: '12 mm' },
      { label: 'Max Sash Weight', value: '140 kg' },
      { label: 'Construction Depth', value: 'Frame 3T-139 mm' },
      { label: 'Sight Line', value: 'Upto 23 mm' },
      { label: 'Wind Load', value: 'Class CE2500 (2.5 kPa)' },
      { label: 'Water Tightness', value: 'Class 7A (600 Pa)' },
      { label: 'Air Permeability', value: 'Class 4 (450 Pa)' },
    ],
    features: [
      { title: 'Modern, Clean Design', desc: 'Sleek aluminium profiles create a refined look that complements contemporary architecture.' },
      { title: 'Built for Lasting Quality', desc: 'Strong construction delivers dependable performance and durability for everyday use.' },
      { title: 'Smooth Everyday Functionality', desc: 'Thoughtfully engineered for easy operation and a comfortable user experience.' },
      { title: 'Versatile for Every Space', desc: 'A stylish solution for modern homes, villas, offices, and commercial projects.' },
    ],
    applications: ['Commercial Towers', 'Corporate Facades', 'Landmark Buildings'],
  },
  horizon: {
    name: 'Horizon',
    tagline: 'Aluminium Door System',
    hero: '/products/horizon-a.jpg',
    intro: 'Horizon is a thoughtfully designed aluminium door system that brings openness, natural light, and modern elegance into everyday spaces. Its durable construction and refined profile offer dependable performance, while smooth functionality ensures comfort and convenience. Perfect for contemporary homes and commercial projects, Horizon creates bright spaces built for lasting enjoyment.',
    image: '/products/horizon-b.jpg',
    specs: [
      { label: 'Max Sash Width', value: '1500 mm' },
      { label: 'Max Sash Height', value: '2400 mm' },
      { label: 'Glass Thickness', value: '5 mm – 18 mm' },
      { label: 'Max Sash Weight', value: '120 kg' },
      { label: 'Construction Depth', value: 'Frame 2T-85 mm, 3T-119 mm, 4T-162 mm' },
      { label: 'Sight Line', value: 'Upto 15 mm' },
      { label: 'Wind Load', value: 'Class CE2500 (2.5 kPa)' },
      { label: 'Water Tightness', value: 'Class 7A (300 Pa)' },
      { label: 'Air Permeability', value: 'Class 4 (600 Pa)' },
    ],
    features: [
      { title: 'Brings in More Natural Light', desc: 'Designed to create brighter, more open spaces with generous glass areas.' },
      { title: 'Clean & Contemporary Look', desc: 'Refined aluminium profiles add a sleek architectural touch to any setting.' },
      { title: 'Strong for Everyday Performance', desc: 'Durable construction provides reliable strength and long-lasting functionality.' },
      { title: 'Comfortable & Easy to Use', desc: 'Smooth operation makes everyday use simple, convenient, and enjoyable.' },
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
  const url = `https://sgdgroupofcompanies.com/products/aluminium-door-systems/${product}`;
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
          { name: 'Home', url: 'https://sgdgroupofcompanies.com' },
          { name: 'Products', url: 'https://sgdgroupofcompanies.com/products' },
          { name: 'Aluminium Door Systems', url: 'https://sgdgroupofcompanies.com/products/aluminium-door-systems' },
          { name: data.name, url: `https://sgdgroupofcompanies.com/products/aluminium-door-systems/${product}` },
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
