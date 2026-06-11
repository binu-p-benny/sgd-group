import styles from './KeyFeaturesSection.module.css';

export default function KeyFeaturesSection({ features }) {
  const items = features || [
    {
      title: 'Ultra-Slim Profiles Design',
      desc: 'Maximize light and airflow without compromising on style.',
    },
    {
      title: 'Outward/Side Hung Opening Options',
      desc: 'Flexible design to suit your space and ventilation needs.',
    },
    {
      title: 'Heavy-Duty Hinges & Pego Hardware',
      desc: 'Smooth, reliable operation with high-quality Pego Hardware, backed by a 10-Year Warranty.',
    },
    {
      title: 'Superior Air & Water Tightness',
      desc: 'Premium EPDM Gaskets provide a tight seal, delivering top-notch weatherproofing with a 15-Year Warranty.',
    },
    {
      title: 'High-Safety Glass',
      desc: 'Fitted with Saint-Gobain Toughened Glass for durability, safety, and clarity.',
    },
    {
      title: 'Support',
      desc: 'We provide ongoing support maintenance advice and service when needed.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Key Features</h2>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.badge}>{i + 1}</div>
              <div className={styles.text}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
