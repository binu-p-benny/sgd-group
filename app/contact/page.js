import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import Faq from '@/components/shared/Faq';
import styles from './contact.module.css';

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

      <section className={styles.section}>
        <div className={styles.inner}>

          {/* ── Left: info ── */}
          <div className={styles.left}>
            <h2 className={styles.heading}>We are always ready to help you and answer your questions</h2>

            <div className={styles.infoGrid}>
              <div className={styles.infoRow}>
                <div className={styles.infoBlock}>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>
                    <a href="mailto:sgdprojectmanagement@gmail.com">sgdprojectmanagement@gmail.com</a>
                  </p>
                </div>
                <div className={styles.infoBlock}>
                  <p className={styles.infoLabel}>Our Location</p>
                  <p className={styles.infoValue}>
                    SGD Group Of Companies<br />
                    Indus Avenue Building<br />
                    Pushpa Junction, Calicut
                  </p>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoBlock}>
                  <p className={styles.infoLabel}>Call Center</p>
                  <div className={`${styles.infoValue} ${styles.phoneList}`}>
                    <a href="tel:+919778151162">+91 9778 151 162</a>
                    <a href="tel:+917026285251">+91 70262 85251</a>
                  </div>
                </div>
                <div className={styles.infoBlock}>
                  <p className={styles.infoLabel}>Follow Us</p>
                  <div className={styles.social}>
                    <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Connect with Us</h2>
            <form className={styles.form} action="mailto:sgdprojectmanagement@gmail.com" method="post" encType="text/plain">
              <div className={styles.field}>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className={styles.field}>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className={styles.field}>
                <input type="tel" name="phone" placeholder="Phone" />
              </div>
              <div className={styles.field}>
                <textarea name="message" rows={4} placeholder="Message" required />
              </div>
              <button type="submit" className={styles.submit}>Send a message</button>
            </form>
          </div>

        </div>
      </section>

      <Faq />

      {/* ── Map ── */}
      <section className={styles.mapSection}>
        <div className={styles.mapInner}>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps?q=Pushpa+Junction,+Calicut,+Kerala&output=embed"
              title="SGD Group of Companies — Pushpa Junction, Calicut"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
