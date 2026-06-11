import styles from './FeatureSection.module.css';

export default function FeatureSection({
  image = '/services/services-02.png',
  heading = 'Sleek. Secure. Built to Last',
  body = 'Enhance your space with openable aluminium doors designed for modern living and lasting performance. Featuring slim profiles that allow more light and natural airflow, these doors offer flexible opening options for everyday comfort and convenience. With secure locking systems, reliable insulation, and durable materials, they combine clean aesthetics with strength and long-term functionality.',
  videoHref = '#',
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.imageWrap}>
          <img src={image} alt={heading} className={styles.image} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.body}>{body}</p>
          <a href={videoHref} className={styles.playBtn}>Play Video</a>
        </div>

      </div>
    </section>
  );
}
