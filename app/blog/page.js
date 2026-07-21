import Link from 'next/link';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import PageHero from '@/components/shared/PageHero';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from './posts';
import styles from './blog.module.css';

export const metadata = {
  title: 'Insights & News | SGD Group of Companies Kerala',
  description: 'Articles from SGD Group on structural glazing, skylights, frameless doors, and the latest in aluminium and glass design.',
  keywords: 'SGD Group blog, glazing articles Kerala, aluminium design insights, window and door trends',
  openGraph: {
    title: 'Insights & News | SGD Group',
    description: 'Articles from SGD Group on structural glazing, skylights, frameless doors, and the latest in aluminium and glass design.',
    url: 'https://sgdgroup.in/blog',
    siteName: 'SGD Group of Companies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sgdgroup.in/blog',
  },
};

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <Navigation />
      <PageHero
        label="Insights & News"
        title="Latest from our journal."
        subtitle="Notes on structural glazing, daylighting, and the details that make an aluminium system worth specifying."
        bg="/project-nikshan.png"
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} className={styles.image} />
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.dot} />
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>
                  Read article <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
