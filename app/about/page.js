import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';

export const metadata = {
  title: 'About SGD Group of Companies | Kerala Glazing & Aluminium Specialists',
  description: 'Learn about SGD Group, Kerala\'s trusted aluminium and glazing company with over 10 years of experience delivering premium architectural solutions across South India.',
  keywords: 'SGD Group about, Kerala glazing company, aluminium specialists Kerala, architectural glazing South India',
  openGraph: {
    title: 'About SGD Group of Companies',
    description: 'Kerala\'s trusted aluminium and glazing specialists with 10+ years of experience.',
    url: 'https://sgdgroup.in/about',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Who We Are"
        title="Crafting spaces with glass, aluminium & precision."
        subtitle="Over a decade of delivering architectural excellence across Kerala and South India."
        bg="/about.png"
      />

      {/* Story Section */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Our Story</p>
            <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Built on trust, delivered with precision.</h2>
            <p className="text-body" style={{ opacity: 0.7, marginBottom: '1.5rem' }}>
              SGD Group of Companies was founded with a clear vision — to bring world-class aluminium and glazing solutions to Kerala. From residential façades to large-scale commercial installations, every project reflects our commitment to quality.
            </p>
            <p className="text-body" style={{ opacity: 0.7 }}>
              [Placeholder — your story content goes here. Share the founding, milestones, and values.]
            </p>
          </div>
          <div style={{ background: 'rgba(17,17,17,0.05)', borderRadius: '24px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ opacity: 0.3 }}>Image placeholder</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--color-text)', color: 'var(--color-background)', padding: 'var(--spacing-xl) 0' }}>
        <div className="container" style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '10+', label: 'Years of Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: 'Kerala', label: 'Headquartered' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-h1" style={{ marginBottom: '0.5rem' }}>{stat.value}</p>
                <p style={{ opacity: 0.6, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Values — placeholder */}
      <section className="section container">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Our Values</p>
          <h2 className="text-h2" style={{ marginBottom: '4rem', maxWidth: 600 }}>What drives every decision we make.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {['Quality First', 'Client Focus', 'Precision Craft'].map(v => (
              <div key={v} style={{ background: 'rgba(17,17,17,0.04)', borderRadius: '20px', padding: '2.5rem' }}>
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>{v}</h3>
                <p className="text-body" style={{ opacity: 0.6 }}>Placeholder — describe this value in 2–3 sentences once content is ready.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
