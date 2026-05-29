import { useTheme } from '../context/ThemeContext';
import styles from './About.module.css';

const STATS = [
  { num: '₹50Cr+', label: 'Wealth Recovered', exp: '4 yrs experience' },
  { num: '100+', label: 'Clients Served', exp: 'across India' },
  { num: '1,500+', label: 'Folios Closed', exp: 'since inception' },
];

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Physical to Demat Conversion',
    desc: 'We transmute old paper share certificates into sovereign digital assets through NSDL/CDSL — restoring their full market value to your family.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 21v-3.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V21" />
      </svg>
    ),
    title: 'IEPF Claim Recovery',
    desc: 'Dividends and shares surrendered to IEPF are not lost — they are waiting. We mount the full claim on your behalf, every document, every step.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Transmission of Shares',
    desc: "When a patriarch's legacy must pass to its rightful heirs, we honour that transfer — managing all succession paperwork with precision and reverence.",
  },
];

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`${styles.about} ${isDark ? styles.aboutDark : ''}`}
      id="about"
    >
      {/* Decorative background pattern */}
      <div className={styles.bgPattern} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      <div className={styles.inner}>

        {/* ── LEFT COLUMN ── */}
        <div className={styles.left}>

          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Who We Are</span>
          </div>

          <h2 className={styles.heading}>
            The Custodians of{' '}
            <em className={styles.headingEm}>Forgotten Fortunes</em>
          </h2>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond} />
            <span className={styles.dividerLine} />
          </div>

          <p className={styles.desc}>
            Waaris Legacy Wealth Recovery LLP is a sovereign advisory house —
            dedicated to restoring the rightful inheritance of families whose
            wealth lies dormant in paper certificates, unclaimed vaults, and
            forgotten shareholdings.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statExp}>{s.exp}</span>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          {/* Vision & Mission */}
          <div className={styles.visionMission}>
            <div className={styles.vmItem}>
              <span className={styles.vmDot} aria-hidden="true" />
              <div>
                <strong className={styles.vmTitle}>Vision:</strong>
                <span className={styles.vmText}>Restoring financial legacies to rightful heirs</span>
              </div>
            </div>
            <div className={styles.vmItem}>
              <span className={styles.vmDot} aria-hidden="true" />
              <div>
                <strong className={styles.vmTitle}>Mission:</strong>
                <span className={styles.vmText}>Simplifying complex recovery processes</span>
              </div>
            </div>
          </div>
        </div>



        {/* ── RIGHT COLUMN ── */}
        <div className={styles.right}>

          {/* Royal manifesto card */}
          <div className={styles.manifesto}>
            <span className={styles.manifestoQuoteMark} aria-hidden="true">"</span>
            <div className={styles.cornerTL} aria-hidden="true" />
            <div className={styles.cornerTR} aria-hidden="true" />
            <div className={styles.cornerBL} aria-hidden="true" />
            <div className={styles.cornerBR} aria-hidden="true" />
            <p className={styles.manifestoText}>
              Every dynasty leaves behind more than memory. Behind every faded
              certificate lies a kingdom waiting to be reclaimed — a legacy that
              belongs to you by right of blood and law.
            </p>
            <p className={styles.manifestoAttr}>— Waaris Legacy</p>
          </div>

          {/* Service pillars */}
          <div className={styles.pillars}>
            {PILLARS.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <div className={styles.pillarBody}>
                  <strong className={styles.pillarTitle}>{p.title}</strong>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;