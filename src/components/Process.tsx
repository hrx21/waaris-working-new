import { useTheme } from '../context/ThemeContext';
import styles from './Process.module.css';
import FAQ from '../pages/Faq';

const STEPS = [
  {
    n: '1',
    title: 'Asset Tracing',
    desc: 'Tell us about your assets — shares, dividends, or holdings. we trace your assets free no commitment required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    n: '2',
    title: 'Document Collection',
    desc: 'We guide you through exactly what documents are needed and help you gather them efficiently.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    n: '3',
    title: 'Filing & Follow-ups',
    desc: 'Our team handles all filings with companies, IEPF, and regulators — and follows up diligently until resolved.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    n: '4',
    title: 'Asset Recovery',
    desc: 'Shares credited to your demat account. Your wealth is finally restored to its rightful heir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Process = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
    <section
      className={`${styles.process} ${isDark ? styles.processDark : ''}`}
      id="process"
    >
      {/* Decorative elements */}
      <div className={styles.bgPattern} aria-hidden="true">
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
      </div>

      {/* Top rule */}
      <div className={styles.topRule} aria-hidden="true">
        <span className={styles.topRuleLine} />
        <span className={styles.topRuleDiamond} />
        <span className={styles.topRuleLine} />
      </div>

      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>How It Works</span>
          </div>
          <h2 className={styles.heading}>
            Simple 4-Step{' '}
            <em className={styles.headingEm}>Recovery Process</em>
          </h2>
          <p className={styles.subheading}>
            From first contact to full recovery — a clear, guided path every step of the way.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className={styles.steps}>
          {/* Connector line */}
          <div className={styles.connector} aria-hidden="true" />

          {STEPS.map((s, i) => (
            <div key={s.n} className={styles.step}>

              {/* Number badge */}
              <div className={styles.badge}>
                <div className={styles.badgeRing} aria-hidden="true" />
                <div className={styles.badgeInner}>
                  <span className={styles.badgeNum}>{s.n}</span>
                </div>
              </div>

              {/* Icon */}
              <div className={styles.iconWrap}>
                <div className={styles.icon}>{s.icon}</div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h4 className={styles.title}>{s.title}</h4>
                <p className={styles.desc}>{s.desc}</p>
              </div>

              {/* Vertical accent line on left (not for first) */}
              {i > 0 && <div className={styles.stepSep} aria-hidden="true" />}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className={styles.cta}>
          <div className={styles.ctaCornerTL} aria-hidden="true" />
          <div className={styles.ctaCornerTR} aria-hidden="true" />
          <div className={styles.ctaCornerBL} aria-hidden="true" />
          <div className={styles.ctaCornerBR} aria-hidden="true" />
          <p className={styles.ctaText}>
            Ready to reclaim what is rightfully yours?
          </p>
          <a href="#contact" className={styles.ctaBtn}>
            Begin Your Recovery
          </a>
        </div>

      </div>

      {/* Bottom rule */}
      <div className={styles.topRule} aria-hidden="true">
        <span className={styles.topRuleLine} />
        <span className={styles.topRuleDiamond} />
        <span className={styles.topRuleLine} />
      </div>
    </section>
    <FAQ />
    </>
  );
};

export default Process;