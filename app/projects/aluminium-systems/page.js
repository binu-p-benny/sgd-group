import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';

export const metadata = {
  title: 'Aluminium Window Systems | SGD Group of Companies Kerala',
  description: 'Explore SGD Group\'s pre-engineered aluminium window systems — premium quality, thermally efficient, and architecturally refined for residential and commercial projects.',
  keywords: 'aluminium window systems Kerala, pre-engineered windows, SGD aluminium windows, architectural windows Kerala',
  openGraph: {
    title: 'Aluminium Window Systems | SGD Group',
    description: 'Premium pre-engineered aluminium window systems for residential and commercial projects in Kerala.',
    url: 'https://sgdgroup.in/projects/aluminium-systems',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/projects/aluminium-systems',
  },
};

const systems = [
  { name: 'Sliding Windows', desc: 'Smooth gliding aluminium sliding windows with multi-point locking and optional fly mesh.' },
  { name: 'Casement Windows', desc: 'Hinged outward-opening frames ideal for maximum ventilation and clean sightlines.' },
  { name: 'Fixed Glazing', desc: 'Frameless or framed fixed-lite glazing for uninterrupted views and natural light.' },
  { name: 'Tilt & Turn', desc: 'European-style tilt-and-turn mechanism offering dual-mode ventilation.' },
  { name: 'Awning Windows', desc: 'Top-hinged windows that open outward, perfect for rain-protected ventilation.' },
  { name: 'Curtain Wall', desc: 'Structural aluminium curtain wall systems for high-rise facades and commercial towers.' },
];

export default function AluminiumSystemsPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Aluminium Systems"
        title="Pre-engineered aluminium window systems."
        subtitle="Designed for performance, built to last — our window systems combine thermal efficiency with architectural precision."
        bg="/services/services-01.png"
      />

      {/* Overview */}
      <section className="section container">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Overview</p>
              <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Engineered for Kerala's climate.</h2>
              <p className="text-body" style={{ opacity: 0.7, marginBottom: '1.5rem' }}>
                Our aluminium window systems are designed to handle the coastal heat, heavy monsoons, and humid conditions specific to Kerala — while maintaining a sleek, modern aesthetic.
              </p>
              <p className="text-body" style={{ opacity: 0.7 }}>
                [Placeholder — add product-specific copy, materials used, warranty details, etc.]
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['/services/services-01.png', '/services/services-02.png', '/services/services-03.png', '/services/services-04.png'].map((src, i) => (
                <img key={i} src={src} alt={`Aluminium system ${i+1}`} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '16px' }} />
              ))}
            </div>
          </div>

          {/* System types */}
          <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>System Types</p>
          <h2 className="text-h2" style={{ marginBottom: '3rem', maxWidth: 500 }}>Find the right system for your project.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {systems.map((s) => (
              <div key={s.name} style={{ border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem' }}>
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>{s.name}</h3>
                <p className="text-body" style={{ opacity: 0.65, fontSize: '1rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
