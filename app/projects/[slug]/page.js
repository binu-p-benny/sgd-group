import { notFound } from 'next/navigation';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import AboutProjects from '@/components/about/AboutProjects';
import styles from './project.module.css';

const projects = {
  'jabir-kottakal': {
    name: 'Jabir Kottakkal',
    category: 'Project - Residential',
    heroImage: '/project-Jabir.png',
    tagline: 'Designed for Living',
    productCategory: 'Structural',
    product: 'Openable Windows with Grill',
    description: `This residential project was designed with a focus on openness, natural light, and modern functionality. Featuring premium aluminium window and door systems, the space combines clean architectural lines with practical everyday comfort. From expansive sliding systems to carefully detailed openable units, every element was selected to create a seamless connection between indoor and outdoor living.\nThe project reflects a balance of durability, aesthetics, and precision craftsmanship, resulting in a contemporary living environment that feels refined, spacious, and built for long-term performance.`,
    sideImage: '/project-Jabir.png',
    galleryImages: [
      '/project-Jabir.png',
      '/project1.png',
      '/project2.png',
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
    heroImage: '/projects/projects-01.png',
    tagline: 'Crafted for Comfort',
    productCategory: 'Structural',
    product: 'Sliding Windows',
    description: `A refined residential space in Vengara designed around natural light and clean modern lines. Premium aluminium sliding systems were selected for their slim profiles and smooth operation, bringing an effortless indoor-outdoor connection throughout the home.`,
    sideImage: '/projects/projects-01.png',
    galleryImages: ['/projects/projects-01.png', '/project1.png', '/project2.png'],
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
    heroImage: '/project-loshidh.png',
    tagline: 'Built for Everyday Life',
    productCategory: 'Structural',
    product: 'Casement Windows',
    description: `A carefully considered residential project in Thrissur where every opening was designed to maximise airflow and natural light. Casement window systems in premium aluminium bring a clean architectural language to the facade while delivering practical, long-lasting performance.`,
    sideImage: '/project-loshidh.png',
    galleryImages: ['/project-loshidh.png', '/project1.png', '/project2.png'],
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
    heroImage: '/projects/projects-02.png',
    tagline: 'Precision in Every Detail',
    productCategory: 'Structural',
    product: 'Sliding Windows with Grill',
    description: `This Engapuzha residence features sliding aluminium window systems with integrated grills, balancing security with a refined aesthetic. The project showcases the seamless integration of functional hardware and premium materials.`,
    sideImage: '/projects/projects-02.png',
    galleryImages: ['/projects/projects-02.png', '/project1.png', '/project2.png'],
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
    heroImage: '/projects/projects-03.png',
    tagline: 'Timeless and Functional',
    productCategory: 'Structural',
    product: 'Folding Windows',
    description: `A contemporary Kannur residence where folding aluminium window systems open entire walls to the surrounding landscape. The design prioritises flexibility, maximising the connection between interior living spaces and the outdoors.`,
    sideImage: '/projects/projects-03.png',
    galleryImages: ['/projects/projects-03.png', '/project1.png', '/project2.png'],
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
    heroImage: '/project-eham.png',
    tagline: 'Modern Commercial Spaces',
    productCategory: 'Commercial',
    product: 'Sliding Door Systems',
    description: `A contemporary digital retail space in Kerala featuring high-performance aluminium sliding door systems. The project required precision engineering to meet the demands of a high-traffic commercial environment while maintaining a premium aesthetic.`,
    sideImage: '/project-eham.png',
    galleryImages: ['/project-eham.png', '/project3.png', '/project4.png'],
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
      url: `https://sgdgroup.in/projects/${slug}`,
      siteName: 'SGD Group of Companies',
      type: 'website',
    },
    alternates: { canonical: `https://sgdgroup.in/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  const [gallery0, ...galleryRest] = project.galleryImages;

  return (
    <main>
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
          <div className={styles.introImage}>
            <img src={project.sideImage} alt={project.name} />
          </div>
        </div>
      </section>

      {/* ── Gallery Slider ── */}
      <section className={styles.gallery}>
        <div className={styles.galleryInner}>
          <GallerySlider images={project.galleryImages} name={project.name} />
        </div>
      </section>

      {/* ── Materials Used ── */}
      <section className={styles.materials}>
        <div className={styles.materialsInner}>
          <div className={styles.materialsHeader}>
            <h2 className={styles.materialsTitle}>Materials Used</h2>
            <p className={styles.materialsDesc}>{project.materialsDescription}</p>
          </div>
          <div className={styles.materialsGrid}>
            {project.materials.map((m) => (
              <div key={m.label} className={styles.materialCard}>
                <div className={styles.materialImageWrap}>
                  <img src={m.image} alt={m.label} />
                  <div className={styles.materialLabel}>
                    <strong>{m.label}</strong>
                    <span>{m.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Section ── */}
      <section className={styles.videoSection}>
        <div className={styles.videoInner}>
          <div className={styles.videoHeader}>
            <div className={styles.videoLeft}>
              <h2 className={styles.videoHeading}>{project.videoHeading}</h2>
            </div>
            <div className={styles.videoRight}>
              <p className={styles.videoDescription}>{project.videoDescription}</p>
            </div>
          </div>
          <div className={styles.videoEmbed}>
            {project.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                title={project.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className={styles.videoPlaceholder}>
                <img src={project.heroImage} alt={project.name} />
                <div className={styles.videoPlaceholderOverlay}>
                  <span className={styles.videoComingSoon}>Video coming soon</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Completed Projects (shared) ── */}
      <AboutProjects />

      <Footer />
    </main>
  );
}

function GallerySlider({ images, name }) {
  // Server component — renders a CSS-only slider with dot indicators
  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {images.map((src, i) => (
          <div key={i} className={styles.sliderSlide}>
            <img src={src} alt={`${name} — view ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.sliderDots}>
        {images.map((_, i) => (
          <span key={i} className={`${styles.dot} ${i === 0 ? styles.dotActive : ''}`} />
        ))}
      </div>
    </div>
  );
}
