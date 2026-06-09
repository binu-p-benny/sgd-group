import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';

export const metadata = {
  title: 'Aluminium Door Systems | SGD Group of Companies Kerala',
  description: 'SGD Group\'s aluminium door systems — sliding, folding, pivot, and entrance doors engineered for durability, security, and modern aesthetics.',
  keywords: 'aluminium doors Kerala, sliding doors Kerala, aluminium entrance doors, SGD doors, bi-fold doors Kerala',
  openGraph: {
    title: 'Aluminium Door Systems | SGD Group',
    description: 'Premium aluminium doors — sliding, pivot, folding and entrance systems for residential and commercial spaces.',
    url: 'https://sgdgroup.in/projects/aluminium-doors',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/projects/aluminium-doors',
  },
};

const doorTypes = [
  { name: 'Sliding Doors', desc: 'Smooth, multi-panel sliding door systems for living areas, patios, and balconies.' },
  { name: 'Bi-Fold Doors', desc: 'Accordion-style folding doors that open entire walls for seamless indoor-outdoor living.' },
  { name: 'Pivot Doors', desc: 'Architectural statement pivot doors with concealed hardware and oversized glass panels.' },
  { name: 'Swing Doors', desc: 'Classic single and double swing doors in thermally broken aluminium profiles.' },
  { name: 'Automatic Doors', desc: 'Sensor-operated automatic sliding doors for commercial entrances and lobbies.' },
  { name: 'Fire-Rated Doors', desc: 'Fire-rated aluminium door systems compliant with NBC standards for commercial buildings.' },
];

export default function AluminiumDoorsPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Aluminium Doors"
        title="Door systems that make a statement."
        subtitle="Every entrance is an opportunity. Our aluminium door systems combine security, smooth operation, and architectural impact."
        bg="/services/services-02.png"
      />

      {/* Intro */}
      <section className="section container">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <div style={{ background: 'rgba(17,17,17,0.04)', borderRadius: '24px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ opacity: 0.3 }}>Feature image placeholder</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Why SGD Doors</p>
              <h2 className="text-h2" style={{ marginBottom: '2rem' }}>Precision-fitted. Security-rated. Beautifully finished.</h2>
              <p className="text-body" style={{ opacity: 0.7, marginBottom: '1.5rem' }}>
                Our door systems are fabricated in-house with tight tolerances, ensuring smooth operation and long-lasting performance — even in Kerala's humid coastal climate.
              </p>
              <p className="text-body" style={{ opacity: 0.7 }}>
                [Placeholder — add hardware specs, glass options, finish choices, lead times, etc.]
              </p>
            </div>
          </div>

          {/* Door types grid */}
          <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Door Systems</p>
          <h2 className="text-h2" style={{ marginBottom: '3rem', maxWidth: 500 }}>Choose your system.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {doorTypes.map((d) => (
              <div key={d.name} style={{ border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem' }}>
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>{d.name}</h3>
                <p className="text-body" style={{ opacity: 0.65, fontSize: '1rem' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
