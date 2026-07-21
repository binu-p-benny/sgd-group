import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import styles from './products.module.css';

export const metadata = {
  title: 'Products | SGD Group of Companies Kerala',
  description: 'Browse SGD Group\'s full range of aluminium window and door systems — Slim Window Systems, Casement Door Systems, Signature Series, and Speciality Systems.',
  keywords: 'aluminium products Kerala, window systems catalog, door systems catalog, SGD Group products',
  openGraph: {
    title: 'Products | SGD Group',
    description: 'The full SGD Group product catalog — every aluminium window and door system we offer.',
    url: 'https://sgdgroup.in/products',
    siteName: 'SGD Group of Companies',
    type: 'website',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: 'https://sgdgroup.in/products',
  },
};

// Real projects (matching app/projects/[slug]/page.js) — rotated across
// product cards so each one links to actual project detail pages instead
// of just decorative images.
const realProjects = [
  { slug: 'jabir-kottakal',     name: 'Jabir Kottakkal',    image: '/project-Jabir.png' },
  { slug: 'shameer-vengara',    name: 'Shameer Vengara',    image: '/projects/projects-01.png' },
  { slug: 'loshidh-thrissur',   name: 'Loshidh Thrissur',   image: '/project-loshidh.png' },
  { slug: 'nidhin-engapuzha',   name: 'Nidhin Engapuzha',   image: '/projects/projects-02.png' },
  { slug: 'nidhin-kannur',      name: 'Nidhin Kannur',      image: '/projects/projects-03.png' },
  { slug: 'nikshan-electronics',name: 'Nikshan Electronics',image: '/project-nikshan.png' },
  { slug: 'eham-digital',       name: 'Eham Digital',       image: '/project-eham.png' },
];

function projectsFor(index) {
  const start = (index * 3) % realProjects.length;
  return [0, 1, 2].map((o) => realProjects[(start + o) % realProjects.length]);
}

const categories = [
  {
    name: 'Slim Window Systems',
    href: '/products/slim-window-systems',
    desc: 'Ultra-slim aluminium window profiles for maximum glass and minimal sightlines, across five distinct systems.',
    products: [
      { slug: 'imperialss2', name: 'ImperialSS2', image: '/services/services-02.png', desc: 'Flagship slim-profile window system engineered for expansive glass with minimal sightlines.' },
      { slug: 'vista', name: 'Vista', image: '/services/services-03.png', desc: 'Balances slim aesthetics with everyday practicality for residential projects.' },
      { slug: 'ultra', name: 'Ultra', image: '/services/services-04.png', desc: 'Built for large openings where strength matters, with wind-load rated profiles.' },
      { slug: 'retrogulf', name: 'RetroGulf', image: '/services/services-01.png', desc: 'Retrofit-friendly slim system for upgrading existing openings with minimal disruption.' },
      { slug: 'eco-gulf', name: 'Eco Gulf', image: '/services/services-02.png', desc: 'Our most sustainable slim system, built from recycled-content aluminium.' },
    ],
  },
  {
    name: 'Casement Door Systems',
    href: '/products/casement-door-systems',
    desc: 'Precision-engineered casement door profiles built for lasting performance and architectural clarity.',
    products: [
      { slug: 'hl50', name: 'HL50', image: '/services/services-03.png', desc: 'Heavy-duty casement door series built on a 50 mm profile for large, high-traffic openings.' },
      { slug: 'hl40', name: 'HL40', image: '/services/services-04.png', desc: 'Slimmer 40 mm profile casement door for residential balconies, patios, and entrances.' },
    ],
  },
  {
    name: 'Signature Series',
    href: '/products/signature-series',
    desc: 'Our most premium systems, engineered for landmark residential and commercial projects.',
    products: [
      { slug: 'nexus', name: 'Nexus', image: '/services/services-02.png', desc: 'Modular curtain-wall system linking large glazed panels into one continuous facade.' },
      { slug: 'horizon', name: 'Horizon', image: '/services/services-03.png', desc: 'Panoramic sliding system engineered for openings that erase indoor-outdoor boundaries.' },
      { slug: 'blaze', name: 'Blaze', image: '/services/services-04.png', desc: 'Statement pivot-door system built as the centrepiece of an entrance.' },
    ],
  },
  {
    name: 'Speciality Systems',
    href: '/products/speciality-systems',
    desc: 'Five mechanisms engineered for the openings a standard slide or swing can\'t solve.',
    products: [
      { slug: 'slide-pro', name: 'Slide-Pro', image: '/services/services-02.png', desc: 'Multi-track horizontal sliding system for openings needing more than two panels.' },
      { slug: 'vertical-sliding', name: 'Vertical Sliding', image: '/services/services-03.png', desc: 'Modern aluminium take on the classic sash window, for heritage-style facades.' },
      { slug: 'tilt-turn', name: 'Tilt & Turn', image: '/services/services-04.png', desc: 'Dual-function sash — tilt for ventilation, turn for full opening and cleaning.' },
      { slug: 'sliding-folding ', name: 'Sliding Folding', image: '/services/services-01.png', desc: 'Stacking panels that open an entire wall between indoor and outdoor spaces.' },
      { slug: 'parallel-opening', name: 'Parallel Opening', image: '/services/services-03.png', desc: 'Even push-out ventilation window that holds securely at any angle.' },
    ],
  },
];
  
export default function ProductsPage() {
  return (    
    <main className={styles.page}>
      <Navigation />
      <PageHero
        label="Products" 
        title="Every system we build, in one place."
        subtitle="Slim Window Systems, Casement Door Systems, Signature Series, and Speciality Systems — explore the full SGD Group catalog."
        bg="/services/services-01.png"
      />

      <div className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            Every system below is backed by the same precision hardware, weather sealing, and toughened glass —
            browse by category, or open any product for full specifications and real project photos.
          </p>
        </div>
      </div>

      {categories.map((cat, catIndex) => (
        <section className={styles.category} key={cat.name}>
          <div className={styles.inner}>

            <div className={styles.headerBlock}>
              <div className={styles.titleRow}>
                <h2 className={styles.title}>{cat.name}</h2>
              </div>
              <div className={styles.descRow}>
                <p className={styles.desc}>{cat.desc}</p>
                <Link href={cat.href} className={styles.viewBtn}>View Category</Link>
              </div>
            </div>

            <div className={styles.grid}>
              {cat.products.map((p, prodIndex) => {
                // Deterministic index (not a mutable module-level counter,
                // which would be unsafe across concurrent server renders)
                const projects = projectsFor(catIndex * 10 + prodIndex);
                return (
                  <div key={p.slug} className={styles.card}>
                    <Link href={`${cat.href}/${p.slug}`} className={styles.cardMain}>
                      <div className={styles.cardImage}>
                        <img src={p.image} alt={p.name} />
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.cardCategory}>{cat.name}</span>
                        <h3 className={styles.cardTitle}>{p.name}</h3>
                        <p className={styles.cardDesc}>{p.desc}</p>
                      </div>
                    </Link>

                    <div className={styles.miniSliderWrap}>
                      <p className={styles.miniSliderLabel}>Used in these projects</p>
                      <div className={styles.miniSlider}>
                        {projects.map((proj) => (
                          <Link
                            key={proj.slug}
                            href={`/projects/${proj.slug}`}
                            className={styles.miniSliderItem}
                            aria-label={proj.name}
                          >
                            <img src={proj.image} alt={proj.name} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
