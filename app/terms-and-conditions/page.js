import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import styles from '@/components/shared/LegalContent.module.css';

export const metadata = {
  title: 'Terms & Conditions | SGD Group of Companies',
  description: 'The terms that govern your use of the SGD Group of Companies website, product information, and enquiry, brochure, and careers forms.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms & Conditions | SGD Group of Companies',
    description: 'The terms that govern your use of the SGD Group of Companies website.',
    url: 'https://sgdgroupofcompanies.com/terms-and-conditions',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroupofcompanies.com/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Navigation />
      <PageHero title="Terms & Conditions" bg="/hero.png" />

      <section className="section">
        <div className={styles.wrap}>
          <p className={styles.updated}>Last updated: 24 August 2026</p>

          <p className={styles.intro}>
            These terms and conditions (&ldquo;Terms&rdquo;) govern your use of the
            sgdgroupofcompanies.com website, operated by SGD Group of Companies (&ldquo;SGD
            Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By browsing our website or submitting any
            form on it, you agree to these Terms. If you don&rsquo;t agree with them, please
            don&rsquo;t use the site.
          </p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. About SGD Group of Companies</h2>
            <p>
              SGD Group of Companies is a Kerala-based aluminium window, door, and glazing
              specialist, delivering pre-engineered aluminium systems and architectural glazing
              for residential and commercial projects across Kerala, Tamil Nadu, and Karnataka.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Use of This Website</h2>
            <p>You agree to use this website only for lawful purposes. You must not:</p>
            <ul>
              <li>Attempt to gain unauthorised access to any part of our website or systems</li>
              <li>Copy, scrape, or reproduce our website content for commercial redistribution</li>
              <li>Submit false, misleading, or fraudulent information through our forms</li>
              <li>Use our website in any way that could damage, disable, or impair its operation</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Products, Specifications &amp; Pricing</h2>
            <p>
              Product images, specifications, dimensions, and descriptions on this website are
              provided for general information and illustration. Actual products, finishes, and
              installed results may vary based on site conditions, project requirements, and
              ongoing product improvements. We do not publish fixed pricing on this website —
              pricing is provided only through a formal quotation following consultation, and is
              specific to each project.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Enquiries, Quotations &amp; Brochure Requests</h2>
            <p>
              Submitting a contact, enquiry, or brochure request form does not create a binding
              contract between you and SGD Group. A contractual relationship is formed only once
              both parties agree to and sign a formal quotation or work order for a specific
              project.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Careers &amp; Job Applications</h2>
            <p>
              Submitting a job application through our careers page does not guarantee an
              interview or offer of employment. Information and CVs/resumes submitted are used
              solely for recruitment purposes and are handled in line with our{' '}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
            <p>
              All text, images, logos, and design content on this website are the property of
              SGD Group of Companies, unless otherwise credited, and may not be reproduced or
              used without our prior written permission.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Third-Party Links</h2>
            <p>
              Our website may link to third-party platforms such as Instagram, Facebook,
              LinkedIn, and YouTube. We do not control and are not responsible for the content,
              accuracy, or practices of these external sites.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
            <p>
              This website and its content are provided &ldquo;as is&rdquo;, without warranties of any
              kind. To the fullest extent permitted by law, SGD Group of Companies shall not be
              liable for any indirect, incidental, or consequential damages arising from your use
              of this website. This does not limit our liability under any formal, signed
              agreement for products or services we deliver.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from your use
              of this website shall be subject to the exclusive jurisdiction of the courts in
              Kozhikode (Calicut), Kerala.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top
              of this page will always reflect the most recent revision. Continued use of the
              website after changes are posted means you accept the revised Terms.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Contact Us</h2>
            <p>Questions about these Terms? Reach out to us:</p>
            <div className={styles.contactBlock}>
              <p><strong>SGD Group of Companies</strong></p>
              <p>Indus Avenue Building, Pushpa Junction, Calicut, Kerala, India</p>
              <p>Email: sgdprojectmanagement@gmail.com</p>
              <p>Phone: +91 97781 51162 / +91 79022 66219</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
