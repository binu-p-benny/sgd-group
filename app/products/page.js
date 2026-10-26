import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import styles from './products.module.css';

export const metadata = {
  title: 'Products | SGD Group of Companies Kerala',
  description: 'Browse SGD Group\'s full range of aluminium window and door systems — Aluminium Window Systems, Aluminium Door Systems, and Signature Systems.',
  keywords: 'aluminium products Kerala, window systems catalog, door systems catalog, SGD Group products',
  openGraph: {
    title: 'Products | SGD Group',
    description: 'The full SGD Group product catalog — every aluminium window and door system we offer.',
    url: 'https://sgdgroupofcompanies.com/products',
    siteName: 'SGD Group of Companies',
    type: 'website',
    images: [{ url: '/og/products.jpg', width: 1200, height: 630, alt: 'SGD Group aluminium window and door systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/products.jpg'],
  },
  alternates: {
    canonical: 'https://sgdgroupofcompanies.com/products',
  },
};

// Real projects (matching app/projects/[slug]/page.js) — rotated across
// product cards so each one links to actual project detail pages instead
// of just decorative images.
const realProjects = [
  { slug: 'jabir-kottakal',     name: 'Jabir Kottakkal',    image: '/projects/jabir-kottakal-1.jpg' },
  { slug: 'shameer-vengara',    name: 'Shameer Vengara',    image: '/projects/shameer-vengara-1.jpg' },
  { slug: 'loshidh-thrissur',   name: 'Loshidh Thrissur',   image: '/projects/loshidh-thrissur-1.jpg' },
  { slug: 'nidhin-engapuzha',   name: 'Nidhin Engapuzha',   image: '/projects/nidhin-engapuzha-1.jpg' },
  { slug: 'nidhin-kannur',      name: 'Nidhin Kannur',      image: '/projects/nidhin-kannur-1.jpg' },
  { slug: 'nikshan-electronics',name: 'Nikshan Electronics',image: '/project-nikshan.jpg' },
  { slug: 'eham-digital',       name: 'Eham Digital',       image: '/projects/eham-digital-real.jpg' },
  { slug: 'jilce-jose-thrissur',name: 'Jilce Jose',         image: '/projects/jilce-jose-thrissur-1.jpg' },
];

function projectsFor(index) {
  const start = (index * 3) % realProjects.length;
  return [0, 1, 2].map((o) => realProjects[(start + o) % realProjects.length]);
}

// Product photos match the ones on each category page. Entries under
// /products/cards/ are web-sized (1200px) copies of the original 9-16 MB
// camera shots / large PNGs, so the catalog doesn't load tens of MB.
const categories = [
  {
    name: 'Aluminium Window Systems',
    href: '/products/aluminium-window-systems',
    desc: 'Window systems engineered for maximum glass and minimal sightlines, from sustainable profiles to multi-track sliders.',
    products: [
      { slug: 'eco-gulf', name: 'Eco Gulf', image: '/products/cards/eco-gulf.jpg', desc: 'Our most sustainable system, built from recycled-content aluminium.' },
      { slug: 'hl40', name: 'HL-40', image: '/products/cards/hl40.jpg', desc: 'Slimmer 40 mm profile for residential balconies, patios, and entrances.' },
    ],
  },
  {
    name: 'Aluminium Door Systems',
    href: '/products/aluminium-door-systems',
    desc: 'Precision-engineered door and facade profiles built for lasting performance and architectural clarity.',
    products: [
      { slug: 'imperialss2', name: 'Imperial SS2', image: '/products/cards/imperial-ss2.jpg', desc: 'Flagship slim-profile system engineered for expansive glass with minimal sightlines.' },
      { slug: 'vista', name: 'Vista', image: '/products/cards/vista.jpg', desc: 'Balances slim aesthetics with everyday practicality for residential projects.' },
      { slug: 'ultra', name: 'Ultra', image: '/products/ultra-a.jpg', desc: 'Built for large openings where strength matters, with wind-load rated profiles.' },
      { slug: 'retrogulf', name: 'Retro Gulf', image: '/products/cards/retro-gulf.jpg', desc: 'Retrofit-friendly system for upgrading existing openings with minimal disruption.' },
      { slug: 'hl50', name: 'HL-50', image: '/products/hl50-a.jpg', desc: 'Heavy-duty casement door series on a 50 mm profile for large, high-traffic openings.' },
      { slug: 'nexus', name: 'Nexus', image: '/products/cards/nexus.jpg', desc: 'Modular curtain-wall system linking large glazed panels into one continuous facade.' },
    ],
  },
  {
    name: 'Signature Systems',
    href: '/products/signature-systems',
    desc: 'Mechanisms engineered for the openings a standard slide or swing can\'t solve.',
    products: [
      { slug: 'parallel-opening', name: 'Parallel Opening', image: '/products/parallel-opening-a.jpg', desc: 'Even push-out ventilation window that holds securely at any angle.' },
      { slug: 'tilt-turn', name: 'Tilt & Turn', image: '/products/tilt-turn-b.jpg', desc: 'Dual-function sash — tilt for ventilation, turn for full opening and cleaning.' },
      { slug: 'vertical-sliding', name: 'Vertical Sliding', image: '/products/vertical-sliding-a.jpg', desc: 'Modern aluminium take on the classic sash window, for heritage-style facades.' },
      { slug: 'sliding-folding', name: 'Sliding Folding', image: '/products/cards/sliding-folding.jpg', desc: 'Stacking panels that open an entire wall between indoor and outdoor spaces.' },
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
        subtitle="Aluminium Window Systems, Aluminium Door Systems, and Signature Systems — explore the full SGD Group catalog."
        bg="/products/window-systems-swing.jpg"
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
