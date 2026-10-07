import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import Link from 'next/link';
import styles from './projects.module.css';

export const metadata = {
  title: 'Projects | SGD Group of Companies Kerala',
  description: 'Explore SGD Group\'s residential and commercial projects — precision-engineered aluminium systems delivered across Kerala.',
  keywords: 'SGD projects Kerala, aluminium window projects, aluminium door projects Kerala, residential commercial',
  openGraph: {
    title: 'Projects | SGD Group',
    description: 'Residential and commercial aluminium projects by SGD Group of Companies.',
    url: 'https://sgdgroupofcompanies.com/projects',
    siteName: 'SGD Group of Companies',
    type: 'website',
    images: ['/hero.png'],
  },
  alternates: { canonical: 'https://sgdgroupofcompanies.com/projects' },
};

const residential = [
  { name: 'Jabir Kottakal',      href: '/projects/jabir-kottakal',      image: '/projects/jabir-kottakal-1.jpg',      location: 'Kottakal, Tamil Nadu' },
  { name: 'Shameer Vengara',     href: '/projects/shameer-vengara',     image: '/projects/shameer-vengara-1.jpg',     location: 'Vengara, Kerala' },
  { name: 'Loshidh Thrissur',    href: '/projects/loshidh-thrissur',    image: '/projects/loshidh-thrissur-1.jpg',    location: 'Thrissur, Kerala' },
  { name: 'Nidhin Engapuzha',    href: '/projects/nidhin-engapuzha',    image: '/projects/nidhin-engapuzha-1.jpg',    location: 'Engapuzha, Kerala' },
  { name: 'Nidhin Kannur',       href: '/projects/nidhin-kannur',       image: '/projects/nidhin-kannur-1.jpg',       location: 'Kannur, Kerala' },
  { name: 'Jilce Jose',          href: '/projects/jilce-jose-thrissur', image: '/projects/jilce-jose-thrissur-1.jpg', location: 'Thrissur, Kerala' },
  { name: 'Benny Ranni',         href: '/projects/benny-ranni',         image: '/projects/benny-ranni-1.jpg',         location: 'Ranni, Kerala' },
  { name: 'Chindananda Reddy',   href: '/projects/chindananda-reddy-bangalore', image: '/projects/chindananda-reddy-bangalore-1.jpg', location: 'Bangalore, Karnataka' },
];

const commercial = [
  { name: 'Nikshan Electronics', href: '/projects/nikshan-electronics', image: '/project-nikshan.png', location: 'Kerala' },
  { name: 'Eham Digital',        href: '/projects/eham-digital',        image: '/projects/eham-digital-real.jpg', location: 'Kerala' },
];

function ProjectGrid({ title, items }) {
  return (
    <div className={styles.group}>
      <h2 className={styles.groupTitle}>{title}</h2>
      <div className={styles.grid}>
        {items.map((p) => (
          <Link key={p.name} href={p.href} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={p.image} alt={p.name} />
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardLocation}>{p.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>Our Work</p>
          <h1 className={styles.heroTitle}>Projects</h1>
          <p className={styles.heroSub}>
            A selection of residential and commercial installations across Kerala — each one a testament to precision, craft, and lasting quality.
          </p>
        </div>
        <div className={styles.heroBg}>
          <img src="/projects/nidhin-engapuzha-2.jpg" alt="SGD Projects" />
        </div>
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <ProjectGrid title="Residential" items={residential} />
          <ProjectGrid title="Commercial"  items={commercial} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
