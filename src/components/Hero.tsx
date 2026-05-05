import { useTheme } from '../context/ThemeContext';
import styles from './Hero.module.css';
import heroImg from '../assets/hero.svg'
// const STATS = [
//   { icon: '📋', value: '500+',        label: 'Certificates Converted' },
//   { icon: '⚖️', value: '100%',        label: 'Legal & Compliant' },
//   { icon: '🤝', value: 'End-to-End',  label: 'Expert Guidance' },
//   { icon: '⏱️', value: 'Faster',      label: 'Processing Time' },
// ];

const PILLS = [
  'Physical Share Conversion',
  'IEPF Recovery',
  'Share Transmission',
  'Legal & Compliant',
  'End-to-End Guidance',
];

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`${styles.hero} ${isDark ? styles.heroDark : ''}`}>

      {/* Background elements */}
      <div className={styles.bgGrid}   aria-hidden="true" />
      <div className={styles.bgGlow}   aria-hidden="true" />

      {/* Corner brackets — same as coming-soon */}
      {(['tl','tr','bl','br'] as const).map(pos => (
        <svg key={pos} className={`${styles.corner} ${styles[pos]}`}
             viewBox="0 0 60 60" fill="none" aria-hidden="true">
          <path d="M4 4 L4 32 M4 4 L32 4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="4" cy="4" r="2.5" fill="currentColor"/>
        </svg>
      ))}

      <div className={styles.content}>

        {/* ── Left ── */}
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
    <span>Asset Recovery & Financial Legacy Advisory</span>
          </div>

            <h1>
              <span className={styles.title}>Waaris Legacy</span>
              <span className={styles.titleAccent}>Where Legacy Finds Its Heir</span>
              {/* <span className={styles.title}>Reclaim What's Yours</span> */}
            </h1>
          {/* Ornament */}
          <div className={styles.ornament} aria-hidden="true">
            <span className={styles.ornamentLine} />
            <span className={styles.ornamentDiamond} />
            <span className={styles.ornamentLine} />
          </div>

<p className={styles.subtitle}>
  We help individuals and families recover unclaimed shares, dividends,
  and financial assets from IEPF and other institutions.
  {/* We specialise in converting old physical share certificates to demat,
  recovering unclaimed IEPF shares, and transmission of shares to rightful heirs.
  Your legacy deserves to be protected. */}
</p>

          <div className={styles.buttons}>
  <a href="#contact"  className={styles.btnPrimary}>Check Eligibility</a>
  <a href="#contact" className={styles.btnOutline}>Start Recovery</a>
          </div>

          {/* Pills */}
          <div className={styles.pills}>
            {PILLS.map(p => <span key={p} className={styles.pill}>{p}</span>)}
          </div>
        </div>

        {/* ── Right — Stats card ── */}
        <div className={styles.imageWrapper}>
          <img
            src={heroImg}
            alt="Share certificate to demat conversion"
            className={styles.heroImg}
          />
        </div>
          {/* <div className={styles.card}>
            <h3 className={styles.cardTitle}>Why Choose Waaris Legacy?</h3>
            {STATS.map(s => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div> */}
        {/* </div> */}

      </div>
    </section>
  );
};

export default Hero;