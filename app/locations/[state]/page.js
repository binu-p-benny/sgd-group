import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import BreadcrumbJsonLd from '@/components/shared/BreadcrumbJsonLd';
import { locations, BASE_URL, BUSINESS, PRODUCT_RANGE, providerJsonLd } from '../data';
import { cities } from '../cities';
import { citiesByState } from '../cityNav';
import CityPage from './CityPage';
import styles from './page.module.css';

export function generateStaticParams() {
  return [...Object.keys(locations), ...Object.keys(cities)].map((state) => ({ state }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;

  const city = cities[state];
  if (city) {
    const cityUrl = `${BASE_URL}/locations/${city.slug}`;
    return {
      title: { absolute: city.title },
      description: city.description,
      keywords: city.keywords,
      alternates: { canonical: cityUrl },
      robots: city.published ? undefined : { index: false, follow: true },
      openGraph: {
        title: city.title,
        description: city.description,
        url: cityUrl,
        siteName: BUSINESS.name,
        type: 'website',
        locale: 'en_IN',
        images: [{ url: `/og/locations/${city.slug}.jpg`, width: 1200, height: 630, alt: city.h1 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: city.title,
        description: city.description,
        images: [`/og/locations/${city.slug}.jpg`],
      },
    };
  }

  const loc = locations[state];
  if (!loc) return {};

  const url = `${BASE_URL}/locations/${loc.slug}`;

  return {
    title: loc.title,
    description: loc.description,
    keywords: loc.keywords,
    alternates: { canonical: url },
    // Thin pages stay out of the index until their copy is filled in.
    robots: loc.contentComplete ? undefined : { index: false, follow: true },
    openGraph: {
      title: loc.title,
      description: loc.description,
      url,
      siteName: BUSINESS.name,
      type: 'website',
      locale: 'en_IN',
      images: [{ url: `/og/locations/${loc.slug}.jpg`, width: 1200, height: 630, alt: `SGD Group aluminium and glazing projects in ${loc.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: loc.title,
      description: loc.description,
      images: [`/og/locations/${loc.slug}.jpg`],
    },
  };
}

export default async function LocationPage({ params }) {
  const { state } = await params;

  if (cities[state]) return <CityPage city={cities[state]} />;

  const loc = locations[state];
  if (!loc) notFound();
  const stateCities = citiesByState(loc.slug);

  const url = `${BASE_URL}/locations/${loc.slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Aluminium & Glazing Systems in ${loc.name}`,
    description: loc.description,
    serviceType: 'Aluminium window systems, doors and architectural glazing',
    url,
    areaServed: {
      '@type': 'State',
      name: loc.name,
      containedInPlace: { '@type': 'Country', name: 'India' },
    },
    provider: providerJsonLd(),
  };

  return (
    <main>
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* No intermediate "Locations" crumb — there is no /locations index page,
          and pointing a breadcrumb at a 404 is worse than a shorter trail. */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: BASE_URL },
          { name: loc.name, url },
        ]}
      />

      <PageHero title={loc.h1 || loc.name} bg={loc.heroBg} />

      <section className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow}>Aluminium &amp; Glazing in {loc.name}</p>
          <h2 className={styles.heading}>
            Window systems, doors and facades delivered across {loc.name}
          </h2>
          <p className={styles.intro}>{loc.intro}</p>

          {loc.areas.length > 0 && (
            <div className={styles.areas}>
              <p className={styles.areasLabel}>{loc.areasLabel}</p>
              <ul className={styles.areasList}>
                {loc.areas.map((area) => (
                  <li key={area} className={styles.areaChip}>{area}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {stateCities.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.heading}>Cities we serve in {loc.name}</h2>
            <ul className={styles.projectList}>
              {stateCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className={styles.projectRow}>
                    <span className={styles.projectName}>Aluminium windows and doors in {c.name}</span>
                    <span className={styles.projectPlace} aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={styles.sectionAlt}>
        <div className="container">
          <h2 className={styles.heading}>Systems available in {loc.name}</h2>
          <div className={styles.grid}>
            {PRODUCT_RANGE.map((p) => (
              <Link key={p.name} href={p.href} className={styles.card}>
                <span className={styles.cardTitle}>{p.name}</span>
                <span className={styles.cardDesc}>{p.desc}</span>
                <span className={styles.cardArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {loc.projects.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.heading}>Projects in {loc.name}</h2>
            <ul className={styles.projectList}>
              {loc.projects.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className={styles.projectRow}>
                    <span className={styles.projectName}>{p.name}</span>
                    <span className={styles.projectPlace}>{p.place}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeading}>Planning a project in {loc.name}?</h2>
          <p className={styles.ctaText}>
            Send us the drawings or opening sizes and we will come back with a system
            recommendation and a quote.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaBtn}>Get a quote</Link>
            <a href={`tel:${BUSINESS.telephone}`} className={styles.ctaLink}>
              {BUSINESS.telephone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
