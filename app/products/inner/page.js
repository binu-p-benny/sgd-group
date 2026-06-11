import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';

export const metadata = {
  title: 'Project Gallery | SGD Group of Companies Kerala',
  description: 'Browse SGD Group\'s completed project portfolio — residential villas, commercial offices, retail showrooms, and institutional buildings across Kerala.',
  keywords: 'SGD projects Kerala, aluminium glazing projects, completed projects Kerala, glass facade projects',
  openGraph: {
    title: 'Project Gallery | SGD Group',
    description: 'Explore our portfolio of completed aluminium and glazing projects across Kerala.',
    url: 'https://sgdgroup.in/products/inner',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/products/inner',
  },
};

const projects = [
  { name: 'Nikshan Electronics', location: 'Kochi', type: 'Commercial', image: '/project-nikshan.png' },
  { name: 'Eham Digital', location: 'Thrissur', type: 'Retail', image: '/project-eham.png' },
  { name: 'Loshidh Residence', location: 'Thrissur', type: 'Residential', image: '/project-loshidh.png' },
  { name: 'Jabir Residence', location: 'Kottakal', type: 'Residential', image: '/project-Jabir.png' },
  { name: 'Project 5', location: 'Kerala', type: 'Commercial', image: '/projects/projects-01.png' },
  { name: 'Project 6', location: 'Kerala', type: 'Institutional', image: '/projects/projects-02.png' },
  { name: 'Project 7', location: 'Kerala', type: 'Residential', image: '/projects/projects-03.png' },
  { name: 'Project 8', location: 'Kerala', type: 'Commercial', image: '/projects/projects-04.png' },
];

export default function ProjectsInnerPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Our Work"
        title="Every project tells a story."
        subtitle="From residential villas to commercial complexes — a portfolio built on trust and precision."
        bg="/projects/projects-01.png"
      />

      {/* Filter bar — static for now */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['All', 'Residential', 'Commercial', 'Retail', 'Institutional'].map(filter => (
            <button key={filter} style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              border: '1px solid var(--color-border)',
              background: filter === 'All' ? 'var(--color-text)' : 'transparent',
              color: filter === 'All' ? 'var(--color-background)' : 'var(--color-text)',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
            }}>{filter}</button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section container">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {projects.map((p, i) => (
              <div key={i} style={{ borderRadius: '24px', overflow: 'hidden', position: 'relative', aspectRatio: '4/3', background: 'rgba(17,17,17,0.05)' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(17,17,17,0.8), transparent)', color: 'var(--color-background)' }}>
                  <p style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{p.type} · {p.location}</p>
                  <h3 className="text-h3">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
