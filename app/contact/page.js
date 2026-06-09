import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';

export const metadata = {
  title: 'Contact SGD Group | Get a Free Quote for Aluminium & Glazing Works Kerala',
  description: 'Contact SGD Group of Companies for enquiries, quotations, and project consultations. Serving Kochi, Thrissur, Kozhikode, and all of Kerala.',
  keywords: 'contact SGD Group, aluminium glazing quote Kerala, glass works enquiry Kerala, SGD contact number',
  openGraph: {
    title: 'Contact SGD Group of Companies',
    description: 'Reach out for project enquiries and free quotations — serving all of Kerala.',
    url: 'https://sgdgroup.in/contact',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <PageHero
        label="Get in Touch"
        title="Let's talk about your project."
        subtitle="Tell us what you're building. We'll bring the expertise."
        bg="/showroom.png"
      />

      <section className="section container">
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
          {/* Contact Info */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '1.5rem' }}>Contact Details</p>
            <h2 className="text-h2" style={{ marginBottom: '3rem' }}>We're here to help.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                { label: 'Phone', value: '+91 XXXXX XXXXX', placeholder: true },
                { label: 'Email', value: 'info@sgdgroup.in', placeholder: true },
                { label: 'Showroom', value: 'SGD Group Showroom, Kerala — Address here', placeholder: true },
                { label: 'Working Hours', value: 'Mon – Sat, 9:00 AM – 6:00 PM' },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.4, marginBottom: '0.5rem' }}>{item.label}</p>
                  <p className="text-body" style={{ opacity: item.placeholder ? 0.4 : 0.8, fontStyle: item.placeholder ? 'italic' : 'normal' }}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              {['Instagram', 'LinkedIn', 'YouTube'].map(s => (
                <a key={s} href="#" style={{ padding: '0.6rem 1.2rem', border: '1px solid var(--color-border)', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.7, transition: 'opacity 0.3s' }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: 'rgba(17,17,17,0.04)', borderRadius: '24px', padding: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '2rem' }}>Send an Enquiry</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                { label: 'Email Address', type: 'email', placeholder: 'you@email.com' },
                { label: 'Project Type', type: 'text', placeholder: 'e.g. Residential windows, Commercial facade...' },
              ].map(field => (
                <div key={field.label}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '1rem', fontFamily: 'inherit', color: 'var(--color-text)' }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, display: 'block', marginBottom: '0.5rem' }}>Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '1rem', fontFamily: 'inherit', color: 'var(--color-text)', resize: 'vertical' }} />
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Send Enquiry →
              </button>
              <p style={{ fontSize: '0.8rem', opacity: 0.4, textAlign: 'center' }}>We typically respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
