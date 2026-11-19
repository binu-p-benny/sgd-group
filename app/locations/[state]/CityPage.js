import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import BreadcrumbJsonLd from '@/components/shared/BreadcrumbJsonLd';
import Faq from '@/components/shared/Faq';
import { locations, BASE_URL, BUSINESS, providerJsonLd } from '../data';
import { citiesByState } from '../cityNav';
import styles from './city.module.css';

const find = (sections, re) => sections.find((s) => re.test(s.heading));

function Paragraphs({ body }) {
  return body.map((text, i) => <p key={i} className={styles.text}>{text}</p>);
}

export default function CityPage({ city }) {
  const state = locations[city.state];
  const url = `${BASE_URL}/locations/${city.slug}`;
  const stateUrl = `${BASE_URL}/locations/${state.slug}`;

  const planning = find(city.sections, /^Planning/i);
  const windows = find(city.sections, /^Aluminium window systems/i);
  const doors = find(city.sections, /^Aluminium doors/i);
  const discuss = find(city.sections, /^Discuss/i);
  const used = new Set([planning, windows, doors, discuss]);
  const rest = city.sections.filter((s) => !used.has(s));
  const sameState = citiesByState(city.state).filter((c) => c.slug !== city.slug);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: city.h1,
    description: city.description,
    serviceType: 'Aluminium window and door systems',
    url,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: state.name, containedInPlace: { '@type': 'Country', name: 'India' } },
    },
    provider: providerJsonLd(),
  };

  // Mirrors the visible FAQ accordion below — keep the two in sync.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <Navigation />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: BASE_URL },
          { name: state.name, url: stateUrl },
          { name: city.name, url },
        ]}
      />

      <PageHero title={city.h1} bg={city.heroBg} />

      {/* Intro + planning */}
      <section className={styles.section}>
        <div className="container">
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/locations/${state.slug}`}>{state.name}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{city.name}</span>
          </nav>

          <div className={styles.introGrid}>
            <div>
              <p className={styles.eyebrow}>{city.name}, {state.name}</p>
              <p className={styles.lead}>{city.intro}</p>
              {planning && (
                <>
                  <h2 className={styles.heading}>{planning.heading}</h2>
                  <Paragraphs body={planning.body} />
                </>
              )}
            </div>
            <div className={styles.imageWrap}>
              {/* Decorative/illustrative photo — deliberately not captioned as a local installation */}
              <img
                src={city.image}
                alt="Aluminium sliding windows and doors installed by SGD Group"
                width="1400"
                height="933"
                loading="lazy"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Windows + doors */}
      {(windows || doors) && (
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.systemsGrid}>
              {windows && (
                <article className={styles.systemCard}>
                  <h2 className={styles.cardHeading}>{windows.heading}</h2>
                  <Paragraphs body={windows.body} />
                  <Link href="/products/aluminium-window-systems" className={styles.cardLink}>
                    View window systems <span aria-hidden="true">→</span>
                  </Link>
                </article>
              )}
              {doors && (
                <article className={styles.systemCard}>
                  <h2 className={styles.cardHeading}>{doors.heading}</h2>
                  <Paragraphs body={doors.body} />
                  <div className={styles.cardLinks}>
                    <Link href="/products/aluminium-door-systems" className={styles.cardLink}>
                      View door systems <span aria-hidden="true">→</span>
                    </Link>
                    <Link href="/products/signature-systems" className={styles.cardLink}>
                      Signature systems <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Audience, pricing, quotation guidance */}
      {rest.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.topicsGrid}>
              {rest.map((s) => (
                <article key={s.heading} className={styles.topic}>
                  <h2 className={styles.topicHeading}>{s.heading}</h2>
                  <Paragraphs body={s.body} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq title={`Frequently asked questions — ${city.name}`} items={city.faqs} />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeading}>{discuss ? discuss.heading : 'Discuss your project with SGD'}</h2>
          <p className={styles.ctaText}>
            {discuss ? discuss.body.join(' ') : `Planning a project in ${city.name}? Share your drawings or window schedule with SGD.`}
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaBtn}>Get a quote</Link>
            <a href={`tel:${BUSINESS.telephone}`} className={styles.ctaLink}>{BUSINESS.telephone}</a>
            <a href={`mailto:${BUSINESS.email}`} className={styles.ctaLink}>{BUSINESS.email}</a>
          </div>
        </div>
      </section>

      {/* Internal links: back up to the state page and across to sibling cities */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className={styles.eyebrow}>More in {state.name}</p>
          <Link href={`/locations/${state.slug}`} className={styles.stateLink}>
            Aluminium windows and doors across {state.name} <span aria-hidden="true">→</span>
          </Link>
          {sameState.length > 0 && (
            <ul className={styles.cityChips}>
              {sameState.map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className={styles.chip}>{c.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
