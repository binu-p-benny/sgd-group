import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import { blogPosts, getPostBySlug } from '../posts';
import FaqSection from './FaqSection';
import styles from './post.module.css';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://sgdgroup.in/blog/${slug}`;
  const imageUrl = `https://sgdgroup.in${post.image}`;
  return {
    title: `${post.title} | SGD Group of Companies Kerala`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'SGD Group of Companies',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const moreArticles = blogPosts.filter((p) => p.slug !== slug);
  const url = `https://sgdgroup.in/blog/${slug}`;
  const imageUrl = `https://sgdgroup.in${post.image}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'SGD Group of Companies',
      logo: { '@type': 'ImageObject', url: 'https://sgdgroup.in/logo-cl.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqSchema = post.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sgdgroup.in' },
      { '@type': 'ListItem', position: 2, name: 'Insights & News', item: 'https://sgdgroup.in/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main>
      <Navigation />
      <PageHero title={post.title} bg={post.image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className={styles.article}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.crumbSep}>/</span>
            <Link href="/blog">Insights & News</Link>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumbCurrent}>{post.title}</span>
          </nav>

          <div className={styles.metaRow}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot} />
            <span className={styles.date}>{post.date}</span>
            <span className={styles.dot} />
            <span className={styles.readTime}>{post.readTime}</span>
            <span className={styles.dot} />
            <span className={styles.author}>By {post.author}</span>
          </div>

          <div className={styles.body}>
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {post.tags?.length > 0 && (
            <div className={styles.tagsRow}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}

          <div className={styles.ctaCard}>
            <div>
              <h3 className={styles.ctaTitle}>Have a project in mind?</h3>
              <p className={styles.ctaText}>Get a tailored quote or technical specifications from our team.</p>
            </div>
            <Link href="/contact" className={styles.ctaBtn}>Enquire Now →</Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={post.faqs} />

      {moreArticles.length > 0 && (
        <section className={styles.more}>
          <div className={styles.moreInner}>
            <h2 className={styles.moreHeading}>More Articles</h2>
            <div className={styles.moreGrid}>
              {moreArticles.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.moreCard}>
                  <div className={styles.moreImage}>
                    <img src={p.image} alt={p.title} />
                  </div>
                  <h3 className={styles.moreCardTitle}>{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
