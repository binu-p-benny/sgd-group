import styles from './ApplicationsSection.module.css';

const applications = [
  {
    name: 'Office',
    icon: (
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="38" height="54" rx="2" stroke="#111" strokeWidth="1.8"/>
        <rect x="16" y="16" width="8" height="8" stroke="#111" strokeWidth="1.5"/>
        <rect x="30" y="16" width="8" height="8" stroke="#111" strokeWidth="1.5"/>
        <rect x="16" y="30" width="8" height="8" stroke="#111" strokeWidth="1.5"/>
        <rect x="30" y="30" width="8" height="8" stroke="#111" strokeWidth="1.5"/>
        <rect x="16" y="44" width="8" height="8" stroke="#111" strokeWidth="1.5"/>
        <rect x="30" y="44" width="8" height="8" stroke="#111" strokeWidth="1.5"/>
        <line x1="46" y1="22" x2="62" y2="22" stroke="#111" strokeWidth="1.8"/>
        <rect x="46" y="28" width="16" height="34" rx="1" stroke="#111" strokeWidth="1.8"/>
        <rect x="51" y="34" width="5" height="5" stroke="#111" strokeWidth="1.4"/>
        <rect x="51" y="44" width="5" height="5" stroke="#111" strokeWidth="1.4"/>
        <rect x="57" y="34" width="5" height="5" stroke="#111" strokeWidth="1.4"/>
        <rect x="57" y="44" width="5" height="5" stroke="#111" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: 'Flat',
    icon: (
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="50" height="52" rx="2" stroke="#111" strokeWidth="1.8"/>
        <line x1="10" y1="26" x2="60" y2="26" stroke="#111" strokeWidth="1.5"/>
        <line x1="10" y1="42" x2="60" y2="42" stroke="#111" strokeWidth="1.5"/>
        <line x1="35" y1="10" x2="35" y2="62" stroke="#111" strokeWidth="1.5"/>
        <rect x="16" y="15" width="13" height="6" rx="1" stroke="#111" strokeWidth="1.4"/>
        <rect x="41" y="15" width="13" height="6" rx="1" stroke="#111" strokeWidth="1.4"/>
        <rect x="16" y="31" width="13" height="6" rx="1" stroke="#111" strokeWidth="1.4"/>
        <rect x="41" y="31" width="13" height="6" rx="1" stroke="#111" strokeWidth="1.4"/>
        <rect x="41" y="47" width="13" height="6" rx="1" stroke="#111" strokeWidth="1.4"/>
        <rect x="27" y="47" width="7" height="15" rx="1" stroke="#111" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Home',
    icon: (
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 8L62 30V62H44V44H26V62H8V30L35 8Z" stroke="#111" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="26" y="44" width="18" height="18" stroke="#111" strokeWidth="1.5"/>
        <rect x="16" y="34" width="10" height="10" stroke="#111" strokeWidth="1.5"/>
        <rect x="44" y="34" width="10" height="10" stroke="#111" strokeWidth="1.5"/>
        <line x1="35" y1="8" x2="35" y2="18" stroke="#111" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Restaurant',
    icon: (
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="28" width="54" height="34" rx="2" stroke="#111" strokeWidth="1.8"/>
        <path d="M8 34C8 34 14 28 22 34C30 40 38 28 46 34C54 40 62 28 62 28" stroke="#111" strokeWidth="1.5"/>
        <path d="M8 28L14 14H56L62 28" stroke="#111" strokeWidth="1.8"/>
        <rect x="27" y="44" width="16" height="18" rx="1" stroke="#111" strokeWidth="1.5"/>
        <rect x="14" y="36" width="12" height="12" rx="1" stroke="#111" strokeWidth="1.5"/>
        <rect x="44" y="36" width="12" height="12" rx="1" stroke="#111" strokeWidth="1.5"/>
        <line x1="35" y1="14" x2="35" y2="8" stroke="#111" strokeWidth="1.5"/>
        <circle cx="35" cy="6" r="2" stroke="#111" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: 'Hospital',
    icon: (
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="50" height="44" rx="2" stroke="#111" strokeWidth="1.8"/>
        <path d="M22 18V10H48V18" stroke="#111" strokeWidth="1.8"/>
        <line x1="10" y1="32" x2="60" y2="32" stroke="#111" strokeWidth="1.5"/>
        <rect x="29" y="20" width="12" height="8" rx="1" stroke="#111" strokeWidth="1.4"/>
        <line x1="35" y1="22" x2="35" y2="26" stroke="#111" strokeWidth="1.4"/>
        <line x1="33" y1="24" x2="37" y2="24" stroke="#111" strokeWidth="1.4"/>
        <rect x="16" y="38" width="10" height="10" rx="1" stroke="#111" strokeWidth="1.5"/>
        <rect x="44" y="38" width="10" height="10" rx="1" stroke="#111" strokeWidth="1.5"/>
        <rect x="27" y="46" width="16" height="16" rx="1" stroke="#111" strokeWidth="1.5"/>
        <line x1="35" y1="46" x2="35" y2="62" stroke="#111" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    name: 'Shopping Mall',
    icon: (
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="24" width="58" height="38" rx="2" stroke="#111" strokeWidth="1.8"/>
        <path d="M6 30L35 12L64 30" stroke="#111" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="14" y="36" width="12" height="12" rx="1" stroke="#111" strokeWidth="1.5"/>
        <rect x="29" y="36" width="12" height="12" rx="1" stroke="#111" strokeWidth="1.5"/>
        <rect x="44" y="36" width="12" height="12" rx="1" stroke="#111" strokeWidth="1.5"/>
        <rect x="26" y="50" width="18" height="12" rx="1" stroke="#111" strokeWidth="1.5"/>
        <circle cx="35" cy="20" r="3" stroke="#111" strokeWidth="1.4"/>
        <line x1="6" y1="62" x2="64" y2="62" stroke="#111" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

const rows = [applications.slice(0, 3), applications.slice(3, 6)];

export default function ApplicationsSection({ image = '/services/services-02.png', description }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left — text + icons */}
        <div className={styles.left}>
          <p className={styles.description}>
            {description ||
              'Engineered for strength and refined design, our aluminium door systems are crafted to enhance openness, accessibility, and spatial flow. With over a decade of experience, we deliver sliding, openable, folding, and custom solutions across residential and commercial environments. Each system is built with precision to ensure durability, seamless functionality, and lasting performance.'}
          </p>

          <div className={styles.grid}>
            {rows.map((row, ri) => (
              <div key={ri} className={styles.row}>
                {row.map((app, i) => (
                  <>
                    <div key={app.name} className={styles.cell}>
                      <div className={styles.iconWrap}>{app.icon}</div>
                      <span className={styles.label}>{app.name}</span>
                    </div>
                    {i < row.length - 1 && <div key={`sep-${ri}-${i}`} className={styles.vSep} />}
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className={styles.imageWrap}>
          <img src={image} alt="Application" className={styles.image} />
        </div>

      </div>
    </section>
  );
}
