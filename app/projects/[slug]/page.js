import { notFound } from 'next/navigation';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import BreadcrumbJsonLd from '@/components/shared/BreadcrumbJsonLd';
import AboutProjects from '@/components/about/AboutProjects';
import styles from './project.module.css';

const projects = {
  'jabir-kottakal': {
    name: 'Jabir Kottakkal',
    category: 'Project - Residential',
    heroImage: '/projects/jabir-kottakal-1.jpg',
    tagline: 'Designed for Living',
    productCategory: 'Structural',
    product: 'Openable Windows with Grill',
    description: `This residential project was designed with a focus on openness, natural light, and modern functionality. Featuring premium aluminium window and door systems, the space combines clean architectural lines with practical everyday comfort. From expansive sliding systems to carefully detailed openable units, every element was selected to create a seamless connection between indoor and outdoor living.\nThe project reflects a balance of durability, aesthetics, and precision craftsmanship, resulting in a contemporary living environment that feels refined, spacious, and built for long-term performance.`,
    sideImage: '/projects/jabir-kottakal-2.jpg',
    galleryImages: [
      '/projects/jabir-kottakal-1.jpg',
      '/projects/jabir-kottakal-2.jpg',
      '/projects/jabir-kottakal-3.jpg',
      '/projects/jabir-kottakal-4.jpg',
    ],
    materialsDescription: 'Factory-finished aluminum window systems that reduce on-site work, ensure accurate fit, and deliver long-lasting durability with a premium finish.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Built for Better Living where functionality meets refined design',
    videoDescription: 'This residential project was designed to create a seamless balance between modern aesthetics and everyday functionality. Featuring premium aluminium window and door systems, the space was carefully planned to maximize natural light, ventilation, and openness while maintaining durability and long-term performance. Every installation was executed with precision and attention to detail, resulting in a refined living environment that reflects contemporary design, comfort, and practical living.',
    youtubeId: 'MHvHJjFk0_4',
  },
  'shameer-vengara': {
    name: 'Shameer Vengara',
    category: 'Project - Residential',
    heroImage: '/projects/shameer-vengara-1.jpg',
    tagline: 'Crafted for Comfort',
    productCategory: 'Structural',
    product: 'Sliding Windows',
    description: `A refined residential space in Vengara designed around natural light and clean modern lines. Premium aluminium sliding systems were selected for their slim profiles and smooth operation, bringing an effortless indoor-outdoor connection throughout the home.`,
    sideImage: '/projects/shameer-vengara-2.jpg',
    galleryImages: ['/projects/shameer-vengara-1.jpg', '/projects/shameer-vengara-2.jpg', '/projects/shameer-vengara-3.jpg', '/projects/shameer-vengara-4.jpg'],
    materialsDescription: 'High-performance aluminium sliding systems with precision hardware for smooth, long-lasting operation.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Built for Better Living where functionality meets refined design',
    videoDescription: 'A seamless blend of modern design and practical living. Every aluminium system was chosen to bring natural light and clean lines into the home.',
    youtubeId: null,
  },
  'loshidh-thrissur': {
    name: 'Loshidh Thrissur',
    category: 'Project - Residential',
    heroImage: '/projects/loshidh-thrissur-1.jpg',
    tagline: 'Built for Everyday Life',
    productCategory: 'Structural',
    product: 'Casement Windows',
    description: `A carefully considered residential project in Thrissur where every opening was designed to maximise airflow and natural light. Casement window systems in premium aluminium bring a clean architectural language to the facade while delivering practical, long-lasting performance.`,
    sideImage: '/projects/loshidh-thrissur-3.jpg',
    galleryImages: ['/projects/loshidh-thrissur-1.jpg', '/projects/loshidh-thrissur-2.jpg', '/projects/loshidh-thrissur-3.jpg', '/projects/loshidh-thrissur-4.jpg'],
    materialsDescription: 'Factory-finished aluminium casement systems with EPDM weather sealing for lasting performance.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Built for Everyday Life where light and air define each space',
    videoDescription: 'Casement systems precision-fitted to every opening, delivering maximum airflow and long-term performance in a refined residential setting.',
    youtubeId: null,
  },
  'nidhin-engapuzha': {
    name: 'Nidhin Engapuzha',
    category: 'Project - Residential',
    heroImage: '/projects/nidhin-engapuzha-1.jpg',
    tagline: 'Precision in Every Detail',
    productCategory: 'Structural',
    product: 'Sliding Windows with Grill',
    description: `This Engapuzha residence features sliding aluminium window systems with integrated grills, balancing security with a refined aesthetic. The project showcases the seamless integration of functional hardware and premium materials.`,
    sideImage: '/projects/nidhin-engapuzha-3.jpg',
    galleryImages: ['/projects/nidhin-engapuzha-1.jpg', '/projects/nidhin-engapuzha-2.jpg', '/projects/nidhin-engapuzha-3.jpg', '/projects/nidhin-engapuzha-4.jpg'],
    materialsDescription: 'Sliding aluminium systems with grill integration, precision-engineered for durability and style.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Precision in Every Detail where security meets refined aesthetics',
    videoDescription: 'Integrated grill systems and premium hardware combine to deliver a home that is both secure and visually refined.',
    youtubeId: null,
  },
  'nidhin-kannur': {
    name: 'Nidhin Kannur',
    category: 'Project - Residential',
    heroImage: '/projects/nidhin-kannur-1.jpg',
    tagline: 'Timeless and Functional',
    productCategory: 'Structural',
    product: 'Folding Windows',
    description: `A contemporary Kannur residence where folding aluminium window systems open entire walls to the surrounding landscape. The design prioritises flexibility, maximising the connection between interior living spaces and the outdoors.`,
    sideImage: '/projects/nidhin-kannur-3.jpg',
    galleryImages: ['/projects/nidhin-kannur-1.jpg', '/projects/nidhin-kannur-2.jpg', '/projects/nidhin-kannur-3.jpg', '/projects/nidhin-kannur-4.jpg'],
    materialsDescription: 'Folding aluminium window systems engineered for expansive openings and long-term durability.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Timeless and Functional where entire walls open to the landscape',
    videoDescription: 'Folding systems engineered for maximum flexibility, connecting living spaces seamlessly with the natural surroundings.',
    youtubeId: null,
  },
  'nikshan-electronics': {
    name: 'Nikshan Electronics',
    category: 'Project - Commercial',
    heroImage: '/project-nikshan.png',
    tagline: 'Built for Business',
    productCategory: 'Commercial',
    product: 'Curtain Wall System',
    description: `A high-visibility commercial facade in Kerala designed to make an immediate architectural statement. The aluminium curtain wall system delivers full-height glazing with structural precision, creating a modern, light-filled retail environment.`,
    sideImage: '/project-nikshan.png',
    galleryImages: ['/project-nikshan.png', '/project3.png', '/project4.png'],
    materialsDescription: 'Structural aluminium curtain wall systems with high-performance glazing for commercial facades.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Built for Business where architecture makes the first impression',
    videoDescription: 'Full-height aluminium glazing engineered to maximise brand visibility and deliver a premium commercial environment.',
    youtubeId: null,
  },
  'eham-digital': {
    name: 'Eham Digital',
    category: 'Project - Commercial',
    heroImage: '/projects/eham-digital-real.jpg',
    tagline: 'Modern Commercial Spaces',
    productCategory: 'Commercial',
    product: 'Sliding Door Systems',
    description: `A contemporary digital retail space in Kerala featuring high-performance aluminium sliding door systems. The project required precision engineering to meet the demands of a high-traffic commercial environment while maintaining a premium aesthetic.`,
    sideImage: '/projects/eham-digital-real.jpg',
    galleryImages: ['/projects/eham-digital-real.jpg', '/project3.png', '/project4.png'],
    materialsDescription: 'Heavy-duty aluminium sliding door systems built for commercial traffic demands.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Modern Commercial Spaces where precision engineering meets high traffic',
    videoDescription: 'Heavy-duty sliding door systems engineered for reliability and long-term performance in demanding retail environments.',
    youtubeId: null,
  },
  'jilce-jose-thrissur': {
    name: 'Jilce Jose',
    category: 'Project - Residential',
    heroImage: '/projects/jilce-jose-thrissur-1.jpg',
    tagline: 'Warm, Timeless Comfort',
    productCategory: 'Structural',
    product: 'Casement Windows',
    description: `A warm, contemporary residence in Thrissur where premium aluminium casement windows bring in natural light and greenery from every angle. Clean black frames were chosen to contrast against the home's soft, earthy palette, tying the interiors and exteriors together with a consistent architectural language.\nEvery opening was fitted for smooth, effortless operation, giving the home a refined finish that performs as well as it looks, day to day and for years to come.`,
    sideImage: '/projects/jilce-jose-thrissur-2.jpg',
    galleryImages: ['/projects/jilce-jose-thrissur-1.jpg', '/projects/jilce-jose-thrissur-2.jpg', '/projects/jilce-jose-thrissur-3.jpg', '/projects/jilce-jose-thrissur-4.jpg'],
    materialsDescription: 'Factory-finished aluminium casement systems with EPDM weather sealing for lasting performance.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Warm, Timeless Comfort where every room opens to the outdoors',
    videoDescription: 'Casement systems fitted throughout the home to maximise natural light and ventilation, finished with a clean black frame that grounds the interior palette.',
    youtubeId: null,
  },
  'benny-ranni': {
    name: 'Benny Ranni',
    category: 'Project - Residential',
    heroImage: '/projects/benny-ranni-1.jpg',
    tagline: 'Built Around the View',
    productCategory: 'Structural',
    product: 'Sliding Door & Window Systems',
    description: `Perched on a hillside in Ranni, this residence was designed to make the most of its sweeping views across the Western Ghats. Expansive aluminium sliding door and window systems open the living spaces to the landscape, while slim black frames keep sightlines clean against the home's crisp white facade.\nInside, full-height glazing floods every room with natural light, from the open-plan dining and living areas to the primary bedroom's panoramic window wall — a home built around the view as much as the view is built around the home.`,
    sideImage: '/projects/benny-ranni-2.jpg',
    galleryImages: ['/projects/benny-ranni-1.jpg', '/projects/benny-ranni-2.jpg', '/projects/benny-ranni-3.jpg', '/projects/benny-ranni-4.jpg'],
    materialsDescription: 'High-performance aluminium sliding systems with slim sightlines, engineered to frame expansive views without compromising on strength.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Built Around the View where every room frames the hills beyond',
    videoDescription: 'Full-height aluminium glazing was fitted throughout this Ranni hillside residence to capture uninterrupted views of the surrounding hills, delivering a home where natural light and landscape define every space.',
    youtubeId: null,
  },
  'chindananda-reddy-bangalore': {
    name: 'Chindananda Reddy',
    category: 'Project - Residential',
    heroImage: '/projects/chindananda-reddy-bangalore-1.jpg',
    tagline: 'Timeless Grandeur, Modern Comfort',
    productCategory: 'Structural',
    product: 'Casement Windows',
    description: `A striking two-storey residence in Bengaluru where classical architectural details — ornate iron balustrades, pillared balconies and a commanding entrance — are paired with precision aluminium casement windows throughout. Tall glazed openings bring natural light deep into every room while preserving the home's formal, symmetrical facade.\nInside, warm interiors with soft furnishings and detailed millwork are matched by consistently finished window and door units, carrying the same quality of finish from the grand exterior through to its private bedrooms.`,
    sideImage: '/projects/chindananda-reddy-bangalore-2.jpg',
    galleryImages: ['/projects/chindananda-reddy-bangalore-1.jpg', '/projects/chindananda-reddy-bangalore-2.jpg', '/projects/chindananda-reddy-bangalore-3.jpg', '/projects/chindananda-reddy-bangalore-4.jpg', '/projects/chindananda-reddy-bangalore-5.jpg', '/projects/chindananda-reddy-bangalore-6.jpg', '/projects/chindananda-reddy-bangalore-7.jpg'],
    materialsDescription: 'Factory-finished aluminium casement systems with EPDM weather sealing, finished to match the home\'s formal architectural detailing.',
    materials: [
      { label: '1. ALUMINIUM PROFILES', sub: 'Frame, Sash & Mullion Sections', image: '/services/services-01.png' },
      { label: '2. GLASS UNIT', sub: 'Double Glazed, Insulated Glass', image: '/services/services-02.png' },
      { label: '3. HARDWARE', sub: 'Handle, Lock, Rollers, Stoppers & Hinges', image: '/services/services-03.png' },
      { label: '4. ACCESSORIES & SEALS', sub: 'Screws, Weather Strips, Locking Bead, Brush Seal', image: '/services/services-04.png' },
    ],
    videoHeading: 'Timeless Grandeur where classical design meets modern comfort',
    videoDescription: 'Precision aluminium casement systems were fitted throughout this Bengaluru residence, bringing consistent natural light and a clean, modern finish to a home built on classical architectural lines.',
    youtubeId: null,
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: `${project.name} | SGD Group of Companies Kerala`,
    description: project.description.slice(0, 155),
    openGraph: {
      title: `${project.name} | SGD Group`,
      description: project.description.slice(0, 155),
      url: `https://sgdgroupofcompanies.com/projects/${slug}`,
      siteName: 'SGD Group of Companies',
      type: 'website',
      images: ['/hero.png'],
    },
    alternates: { canonical: `https://sgdgroupofcompanies.com/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sgdgroupofcompanies.com' },
          { name: 'Projects', url: 'https://sgdgroupofcompanies.com/projects' },
          { name: project.name, url: `https://sgdgroupofcompanies.com/projects/${slug}` },
        ]}
      />
      <Navigation />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={project.heroImage} alt={project.name} />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroCategory}>{project.category}</p>
          <h1 className={styles.heroTitle}>{project.name}</h1>
        </div>
      </section>

      {/* ── Designed for Living ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introLeft}>
            <h2 className={styles.introTagline}>{project.tagline}</h2>
            <div className={styles.introCategoryRow}>
              <div className={styles.introCategoryHeader}>
                <span>Category</span>
                <span>Product</span>
              </div>
              <div className={styles.introCategoryValues}>
                <span>{project.productCategory}</span>
                <span>{project.product}</span>
              </div>
            </div>
            <p className={styles.introDescription}>
              {project.description.split('\n').map((line, i) => (
                <span key={i}>{line}{i < project.description.split('\n').length - 1 && <br />}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery — every other photo for this project ── */}
      <section className={styles.gallery}>
        <div className={styles.galleryInner}>
          <h2 className={styles.galleryTitle}>Gallery</h2>
          <div className={styles.galleryGrid}>
            {project.galleryImages.map((src, i) => (
              <div key={src} className={styles.galleryItem}>
                <img src={src} alt={`${project.name} — view ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Completed Projects (shared) ── */}
      <AboutProjects />

      <Footer />
    </main>
  );
}
