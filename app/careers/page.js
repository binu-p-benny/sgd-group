import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import OpenPositions from '@/components/careers/OpenPositions';
import styles from './careers.module.css';

export const metadata = {
  title: 'Careers at SGD Group | Join Kerala\'s Leading Glazing Company',
  description: 'Build your career at SGD Group of Companies. We\'re looking for passionate fabricators, site supervisors, sales engineers, and design professionals in Kerala.',
  keywords: 'careers SGD Group Kerala, jobs aluminium glazing Kerala, glazing company jobs, architectural jobs Kerala',
  openGraph: {
    title: 'Careers at SGD Group of Companies',
    description: 'Join Kerala\'s leading aluminium and glazing company. Explore open positions.',
    url: 'https://sgdgroup.in/careers',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/careers',
  },
};

const whyJoin = [
  {
    title: 'Mission-Driven Work',
    desc: 'Be part of projects that combine functionality, craftsmanship, and modern design. Every contribution plays a role in creating spaces that are built with precision and purpose.',
  },
  {
    title: 'Innovation at the Core',
    desc: 'We embrace new ideas, evolving technologies, and modern approaches to deliver better solutions. Creativity and forward thinking are encouraged across every stage of our work.',
  },
  {
    title: 'Career Growth',
    desc: 'We believe in continuous learning and professional development. Our team members are given opportunities to expand their skills, take on new challenges, and grow within the organization.',
  },
  {
    title: 'Flexible Work Environment',
    desc: 'We foster a collaborative and supportive workplace that values balance, adaptability, and teamwork, helping individuals perform at their best in a positive environment.',
  },
];

const openings = [
  { role: 'Aluminium Fabricator', type: 'Full-time', location: 'Thrissur, Kerala', desc: 'Hands-on fabrication of aluminium profiles and glazed units in our production facility.' },
];

export default function CareersPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        title="Career"
        bg="/hero.png"
      />

      {/* Download Brochure floating tab */}
      <a href="/brochure.pdf" download className={styles.brochureTab} aria-label="Download Brochure">
        <span className={styles.brochureLabel}>Download Brochure</span>
        <span className={styles.brochureIcon}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V15M12 15L7 10M12 15L17 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 19H20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </a>

      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introHeader}>
            <h2 className={styles.introHeading}>
              Build the Future With Us, where ideas, talent, and growth move forward together
            </h2>
            <p className={styles.introBody}>
              At SGD Group of Companies, we believe exceptional work begins with passionate people and a shared commitment to quality. As a growing team in the glass and aluminium solutions industry, we foster a work environment built on collaboration, learning, and innovation. From design and project execution to customer support and operations, every role contributes to shaping modern spaces with precision and purpose. We value dedication, creativity, and continuous growth, creating opportunities for individuals to build meaningful and rewarding careers with us.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="/about.png" alt="SGD Group team" />
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <h2 className={styles.whyHeading}>Why Join Us</h2>
            {whyJoin.map((item, i) => (
              <div key={item.title} className={styles.whyItem}>
                <div className={styles.whyNumber}>{i + 1}</div>
                <div className={styles.whyText}>
                  <h3 className={styles.whyItemTitle}>{item.title}</h3>
                  <p className={styles.whyItemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.whyImage}>
            <img src="/services/services-03.png" alt="SGD Group workplace" />
          </div>
        </div>
      </section>

      {/* Open positions */}
      <OpenPositions openings={openings} />

      <Footer />
    </main>
  );
}
