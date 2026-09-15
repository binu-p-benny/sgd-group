import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import styles from '@/components/shared/LegalContent.module.css';

export const metadata = {
  title: 'Privacy Policy | SGD Group of Companies',
  description: 'How SGD Group of Companies collects, uses, and protects your personal information across our website, enquiry forms, and brochure downloads.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy | SGD Group of Companies',
    description: 'How SGD Group of Companies collects, uses, and protects your personal information.',
    url: 'https://sgdgroupofcompanies.com/privacy-policy',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroupofcompanies.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navigation />
      <PageHero title="Privacy Policy" bg="/hero.png" />

      <section className="section">
        <div className={styles.wrap}>
          <p className={styles.updated}>Last updated: 24 August 2026</p>

          <p className={styles.intro}>
            SGD Group of Companies (&ldquo;SGD Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy
            and is committed to protecting the personal information you share with us. This
            policy explains what we collect, why we collect it, and how we handle it when you
            visit sgdgroupofcompanies.com or interact with our enquiry, brochure, or careers
            forms.
          </p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Your name, email address, and phone number when you submit a contact or enquiry form</li>
              <li>Your name, email address, and phone number when you request our product brochure</li>
              <li>Your name, email address, phone number, the role you&rsquo;re applying for, and your CV/resume when you submit a job application</li>
              <li>Any additional details you choose to include in a message to us</li>
            </ul>
            <p>
              We also collect limited technical information automatically when you browse our
              site — such as your approximate location, device and browser type, and the pages
              you visit — through Google Analytics (via Google Tag Manager), described further
              below.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiries and provide quotations or project consultations</li>
              <li>To send you the product brochure you requested</li>
              <li>To review and follow up on job applications</li>
              <li>To understand how visitors use our website, so we can improve it</li>
              <li>To meet legal, regulatory, or accounting obligations</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Cookies &amp; Analytics</h2>
            <p>
              We use Google Tag Manager and Google Analytics to understand how visitors use our
              site. These tools use cookies to collect anonymised, aggregate data such as page
              views and session duration. You can disable cookies in your browser settings, or
              opt out of Google Analytics tracking using the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>. Google&rsquo;s use of data collected through our site is governed by{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google&rsquo;s Privacy Policy
              </a>.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. How We Store &amp; Protect Your Information</h2>
            <p>
              Information you submit through our forms is stored on secure, access-controlled
              cloud infrastructure. Only authorised SGD Group staff can view submissions. While
              we take reasonable technical and organisational measures to protect your data, no
              method of electronic storage or transmission is completely secure, and we cannot
              guarantee absolute security.
            </p>
            <p>
              We retain your information only for as long as reasonably necessary to respond to
              your enquiry, process your application, or comply with our legal obligations,
              after which it is deleted or anonymised.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Your Rights</h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023 and applicable Indian law,
              you have the right to access, correct, or request deletion of the personal
              information we hold about you, and to withdraw any consent you&rsquo;ve previously
              given. To exercise any of these rights, contact us using the details below.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Third-Party Links</h2>
            <p>
              Our website links to third-party platforms, including Instagram, Facebook,
              LinkedIn, and YouTube. We are not responsible for the privacy practices of these
              external sites — please review their respective privacy policies before sharing
              information with them.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Children&rsquo;s Privacy</h2>
            <p>
              Our website and services are intended for a general business audience and are not
              directed at individuals under the age of 18. We do not knowingly collect personal
              information from children.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time to reflect changes in our practices or
              for legal reasons. The &ldquo;Last updated&rdquo; date at the top of this page will always
              reflect the most recent revision.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p>If you have any questions about this policy or how we handle your data, reach out to us:</p>
            <div className={styles.contactBlock}>
              <p><strong>SGD Group of Companies</strong></p>
              <p>Signature Blossom, Karikkamkulam, Kozhikode Balussery Rd, Thadampattuthazham, Kozhikode, Kerala 673010, India</p>
              <p>Email: sgdprojectmanagement@gmail.com</p>
              <p>Phone: +91 79022 66219 / +91 97781 51162</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
