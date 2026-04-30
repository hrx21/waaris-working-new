import { useTheme } from '../context/ThemeContext';
import styles from './Services.module.css';

const SERVICES = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Physical Share to Demat Conversion',
    desc: 'Convert old paper share certificates into active digital demat holdings. We handle KYC verification, company liaison, and NSDL/CDSL registration end-to-end.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 21v-3.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V21" />
      </svg>
    ),
    title: 'IEPF Claim Recovery',
    desc: 'Unclaimed dividends and shares held by the Investor Education & Protection Fund are not lost — they are waiting. We identify, file, and recover your rightful assets.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Transmission of Shares',
    desc: 'We assist legal heirs in transferring shareholdings from deceased family members through the correct legal channels — with sensitivity and precision.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Duplicate Share Certificate',
    desc: 'Lost, misplaced, or mutilated physical certificates can be replaced through a structured, compliant process. We manage every formality until the duplicate is issued.',
  },
  {
    num: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Name Correction / Change',
    desc: 'Spelling errors, marital name changes, or initials mismatches in investor records create obstacles. We correct and update records to ensure seamless future claims.',
  },
  {
    num: '06',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Suspense & Escrow Account Claims',
    desc: 'Securities placed in suspense or escrow accounts often remain dormant for years. We trace, substantiate, and recover these entitlements through structured claim handling.',
  },
];

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`${styles.services} ${isDark ? styles.servicesDark : ''}`}
      id="services"
    >
      <div className={styles.bgPattern} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgRule} />
      </div>

      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.label}>
              <span className={styles.labelLine} />
              <span className={styles.labelText}>Our Services</span>
            </div>
            <h2 className={styles.heading}>
              Everything You Need to{' '}
              <em className={styles.headingEm}>Reclaim Your Wealth</em>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.headerDesc}>
              Specialized advisory and execution support for recovery, correction,
              and transmission of financial securities and investor entitlements.
            </p>
            <a href="/services" className={styles.ctaBtn}>
              <span>View All Services</span>
              <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerLine} />
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.num} className={styles.card}>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.iconWrap}>
                <div className={styles.icon}>{s.icon}</div>
              </div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.cardFooter}>
                <a href="#contact" className={styles.link}>
                  Enquire Now
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.linkArrow}>
                    <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className={styles.cardBar} aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className={styles.strip}>
          <div className={styles.stripCornerTL} aria-hidden="true" />
          <div className={styles.stripCornerTR} aria-hidden="true" />
          <div className={styles.stripCornerBL} aria-hidden="true" />
          <div className={styles.stripCornerBR} aria-hidden="true" />
          <p className={styles.stripText}>
            Every recovery matter is unique. Our team can assess your situation
            and recommend the most effective pathway toward resolution.
          </p>
          <a href="#contact" className={styles.stripCta}>
            Connect for a Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;