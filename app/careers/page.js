import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';

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

const openings = [
  { role: 'Site Supervisor', type: 'Full-time', location: 'Kochi, Kerala', desc: 'Oversee installation of aluminium window and door systems at project sites. 3+ years experience required.' },
  { role: 'Aluminium Fabricator', type: 'Full-time', location: 'Thrissur, Kerala', desc: 'Hands-on fabrication of aluminium profiles and glazed units in our production facility.' },
  { role: 'Sales Engineer', type: 'Full-time', location: 'Kerala (Field)', desc: 'Drive B2B and B2C sales of our product range across Kerala. Architecture/civil background preferred.' },
  { role: 'Draftsman / CAD Operator', type: 'Full-time', location: 'Thrissur, Kerala', desc: 'Prepare shop drawings and installation drawings for aluminium systems using AutoCAD.' },
];

export default function CareersPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Join Our Team"
        title="Build something great with us."
        subtitle="We're growing — and we're looking for passionate people who take pride in their craft."
        bg="/showroom-poster.png"
      />

      {/* Why work here */}
      <section className="section container">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Why SGD</p>
          <h2 className="text-h2" style={{ marginBottom: '3rem', maxWidth: 600 }}>A place where craft meets career.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: 'var(--spacing-xl)' }}>
            {[
              { title: 'Growth Opportunities', desc: 'We promote from within. Your skills are recognized and rewarded.' },
              { title: 'Quality Work Environment', desc: 'Modern facilities, proper tools, and a team that values precision.' },
              { title: 'Competitive Compensation', desc: 'Fair salaries, timely payments, and performance incentives.' },
            ].map(perk => (
              <div key={perk.title} style={{ background: 'rgba(17,17,17,0.04)', borderRadius: '20px', padding: '2.5rem' }}>
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>{perk.title}</h3>
                <p className="text-body" style={{ opacity: 0.65, fontSize: '1rem' }}>{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Open Positions</p>
          <h2 className="text-h2" style={{ marginBottom: '3rem', maxWidth: 500 }}>We're hiring.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {openings.map(job => (
              <div key={job.role} style={{ border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(17,17,17,0.08)', padding: '0.3rem 0.8rem', borderRadius: '9999px' }}>{job.type}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>{job.location}</span>
                  </div>
                  <h3 className="text-h3" style={{ marginBottom: '0.5rem' }}>{job.role}</h3>
                  <p style={{ fontSize: '0.95rem', opacity: 0.65, lineHeight: 1.5 }}>{job.desc}</p>
                </div>
                <a href="/contact" className="btn-secondary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Apply Now →</a>
              </div>
            ))}
          </div>

          {/* General Application */}
          <div style={{ marginTop: '3rem', background: 'var(--color-text)', color: 'var(--color-background)', borderRadius: '24px', padding: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h3 className="text-h3" style={{ marginBottom: '0.75rem' }}>Don't see your role?</h3>
              <p style={{ opacity: 0.65 }}>Send us your CV and we'll keep you in mind for future openings.</p>
            </div>
            <a href="/contact" style={{ background: 'var(--color-background)', color: 'var(--color-text)', padding: '1rem 2.5rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
              Send Your CV
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
