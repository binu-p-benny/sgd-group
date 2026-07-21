import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import { blogPosts, getPostBySlug } from '../posts';
import styles from './post.module.css';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://sgdgroup.in/blog/${slug}`;
  return {
    title: `${post.title} | SGD Group of Companies Kerala`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'SGD Group of Companies',
      type: 'article',
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const moreArticles = blogPosts.filter((p) => p.slug !== slug);

  return (
    <main>
      <Navigation />
      <PageHero title={post.title} bg={post.image} />

      <section className={styles.article}>
        <div className={styles.inner}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={14} /> All Articles
          </Link>

          <div className={styles.metaRow}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot} />
            <span className={styles.date}>{post.date}</span>
            <span className={styles.dot} />
            <span className={styles.readTime}>{post.readTime}</span>
          </div>

          <div className={styles.body}>
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

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
