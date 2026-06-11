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
    url: 'https://sgdgroup.in/projects',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: { canonical: 'https://sgdgroup.in/projects' },
};

const residential = [
  { name: 'Jabir Kottakal',   href: '/projects/jabir-kottakal',   image: '/project-Jabir.png',           location: 'Kottakal, Kerala' },
  { name: 'Shameer Vengara',  href: '/projects/shameer-vengara',  image: '/projects/projects-01.png',    location: 'Vengara, Kerala' },
  { name: 'Loshidh Thrissur', href: '/projects/loshidh-thrissur', image: '/project-loshidh.png',         location: 'Thrissur, Kerala' },
  { name: 'Nidhin Engapuzha', href: '/projects/nidhin-engapuzha', image: '/projects/projects-02.png',    location: 'Engapuzha, Kerala' },
  { name: 'Nidhin Kannur',    href: '/projects/nidhin-kannur',    image: '/projects/projects-03.png',    location: 'Kannur, Kerala' },
];

const commercial = [
  { name: 'Nikshan Electronics', href: '/projects/nikshan-electronics', image: '/project-nikshan.png', location: 'Kerala' },
  { name: 'Eham Digital',        href: '/projects/eham-digital',        image: '/project-eham.png',    location: 'Kerala' },
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
          <img src="/projects/projects-04.png" alt="SGD Projects" />
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
