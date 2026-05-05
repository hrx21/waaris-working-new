import { useTheme } from '../context/ThemeContext';
// import CTABanner from '../components/CTABanner';
import styles from '../../src/components/Services.module.css';

const SERVICES = [
  {
    num: '01',
    id: 'iepf-claims',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 21v-3.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V21" />
      </svg>
    ),
    title: 'IEPF Claims',
    paras: [
      'The Investor Education and Protection Fund (IEPF) holds shares, dividends, and other investor entitlements that remain unclaimed for a prescribed period. Recovering these assets often involves extensive documentation, statutory filings, and coordination with multiple stakeholders.',
      'At WAARIS Legacy, we offer end-to-end assistance for IEPF claim recovery, including eligibility assessment, preparation of claim documentation, filing support, and procedural follow-ups.',
      'Our approach ensures that clients are guided through each stage of the process with clarity and confidence, minimizing delays and maximizing the likelihood of successful recovery.',
    ],
    points: [
      'Eligibility review of claimable assets',
      'Preparation and verification of documentation',
      'Filing assistance for IEPF-related forms',
      'Liaison and follow-up with relevant authorities',
      'Advisory on compliance requirements',
    ],
  },
  {
    num: '02',
    id: 'transmission-of-securities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Transmission of Securities',
    paras: [
      'In the event of the demise of a shareholder or investor, securities must be legally transmitted to the rightful heirs, nominees, or beneficiaries. This process often requires legal documentation, succession-related compliance, and procedural coordination with companies, registrars, and depositories.',
      'We assist families and claimants in navigating the transmission process smoothly and professionally.',
      'Our team ensures that ownership is transferred lawfully, efficiently, and in accordance with regulatory and corporate requirements.',
    ],
    points: [
      'Assessment of transmission eligibility',
      'Guidance on nominee, legal heir, or succession-based claims',
      'Preparation of affidavits, declarations, and supporting papers',
      'Coordination with issuers, RTAs, and depositories',
      'Advisory on dispute-free ownership transition',
    ],
  },
  {
    num: '03',
    id: 'duplicate-share-certificate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Duplicate Share Certificate',
    paras: [
      'Physical share certificates that are lost, misplaced, mutilated, or destroyed can hinder ownership verification and future claims. Obtaining a duplicate certificate is often a mandatory step before any recovery, transmission, or dematerialization process can proceed.',
      'WAARIS Legacy assists in securing duplicate share certificates through a structured and compliant process.',
      'We manage the procedural requirements, ensuring clients fulfil all formalities with minimal inconvenience.',
    ],
    points: [
      'Guidance on required affidavits and indemnity bonds',
      'Assistance with FIR / police complaint process (where applicable)',
      'Preparation of company-specific application documents',
      'Coordination with registrars and issuing entities',
      'End-to-end tracking until issuance of duplicate certificate',
    ],
  },
  {
    num: '04',
    id: 'name-correction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Name Correction / Name Change',
    paras: [
      'Errors, inconsistencies, or outdated investor details in company records can create obstacles in financial recovery and ownership recognition. Common issues include spelling mistakes, marital name changes, initials mismatch, or variation in supporting documents.',
      'We provide professional assistance in correcting and updating investor records to ensure legal and procedural alignment.',
      'This service is essential for avoiding claim rejections and ensuring seamless processing of future transactions.',
    ],
    points: [
      'Review of discrepancies across records',
      'Preparation of correction / change request documents',
      'Guidance on supporting legal proofs',
      'Coordination with companies, RTAs, and depositories',
      'Record rectification for smooth future claims',
    ],
  },
  {
    num: '05',
    id: 'name-deletion',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
      </svg>
    ),
    title: 'Name Deletion',
    paras: [
      "Joint holdings may require deletion of a deceased, inactive, or otherwise ineligible holder's name to enable transfer, recovery, or continued ownership rights.",
      'This process requires compliance with company procedures and may involve legal documentation depending on the nature of holding.',
      'WAARIS Legacy provides structured support to ensure the deletion is carried out correctly and efficiently.',
    ],
    points: [
      'Eligibility review for deletion requests',
      'Documentation support for survivorship / legal heir claims',
      'Preparation of declarations, affidavits, and forms',
      'Coordination with relevant institutions',
      'Ownership record updation assistance',
    ],
  },
  {
    num: '06',
    id: 'suspense-escrow',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Suspense Escrow Account Claims',
    paras: [
      'Securities, dividends, or entitlements may be placed in suspense or escrow accounts when ownership remains unresolved, documentation is incomplete, or corporate actions are pending clarification.',
      'These assets often remain dormant for years due to procedural complexity and lack of claimant awareness.',
      'Our firm assists clients in identifying, substantiating, and recovering such entitlements through structured claim handling and stakeholder coordination.',
    ],
    points: [
      'Tracing of holdings in suspense / escrow accounts',
      'Ownership verification support',
      'Preparation of claim submissions',
      'Liaison with issuers, custodians, and registrars',
      'Advisory on procedural resolution pathways',
    ],
  },
];

const WHY_US = [
  'Specialized expertise in financial asset recovery and investor services',
  'End-to-end handling of documentation and compliance requirements',
  'Professional, transparent, and confidential service approach',
  'Focus on rightful ownership restoration and legacy preservation',
];

const ServicesPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`${styles.page} ${isDark ? styles.pageDark : ''}`}>

      {/* ── HERO ── */}
      <section className={`${styles.hero} ${isDark ? styles.heroDark : ''}`}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgCircle1} />
          <div className={styles.heroBgCircle2} />
          <div className={styles.heroTopRule} />
          <div className={styles.heroBottomRule} />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>What We Do</span>
            <span className={styles.eyebrowLine} />
          </div>
          <h1 className={styles.heroTitle}>
            Our <em className={styles.heroTitleEm}>Recovery</em>
            <br />Services
          </h1>
          <p className={styles.heroDesc}>
            At WAARIS Legacy, we provide specialized advisory and execution support for recovery,
            correction, and transmission of financial securities and related investor entitlements.
            Our services are designed to simplify complex procedural requirements and help rightful
            owners reclaim what belongs to them.
          </p>
          {/* Nav pills */}
          <div className={styles.heroNav}>
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={styles.heroNavPill}>
                <span className={styles.heroNavNum}>{s.num}</span>
                <span className={styles.heroNavLabel}>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className={`${styles.servicesList} ${isDark ? styles.servicesListDark : ''}`}>
        <div className={styles.inner}>
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`${styles.serviceBlock} ${i % 2 !== 0 ? styles.serviceBlockAlt : ''} ${isDark ? styles.serviceBlockDark : ''}`}
            >
              {/* ── Number ribbon ── */}
              <div className={styles.numRibbon}>
                <span className={styles.numBig}>{s.num}</span>
                <div className={styles.numLine} />
              </div>

              {/* ── Content ── */}
              <div className={styles.serviceContent}>
                {/* Header */}
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconWrap}>
                    <div className={styles.serviceIcon}>{s.icon}</div>
                    <div className={styles.serviceIconGlow} />
                  </div>
                  <div className={styles.serviceTitleRow}>
                    <h2 className={styles.serviceTitle}>{s.title}</h2>
                    <a href="#contact" className={styles.serviceCtaBtn}>
                      Enquire Now
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.ctaArrow}>
                        <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className={styles.serviceDivider}>
                  <span className={styles.serviceDividerLine} />
                  <span className={styles.serviceDividerDiamond} />
                  <span className={styles.serviceDividerLine} />
                </div>

                {/* Body */}
                <div className={styles.serviceBody}>
                  <div className={styles.serviceParas}>
                    {s.paras.map((para, pi) => (
                      <p key={pi} className={styles.servicePara}>{para}</p>
                    ))}
                  </div>

                  <div className={styles.supportBox}>
                    <p className={styles.supportLabel}>
                      <span className={styles.supportLabelLine} />
                      Our support includes
                    </p>
                    <ul className={styles.points}>
                      {s.points.map((pt) => (
                        <li key={pt} className={styles.point}>
                          <span className={styles.pointDot} aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── WHY WAARIS ── */}
      <section className={`${styles.whySection} ${isDark ? styles.whySectionDark : ''}`}>
        <div className={styles.whyBg}>
          <div className={styles.whyBgGlow} />
        </div>
        <div className={styles.whyInner}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Why Choose Us</span>
            <span className={styles.labelLine} />
          </div>
          <h2 className={styles.whyHeading}>
            Why Clients Choose{' '}
            <em className={styles.whyEm}>WAARIS Legacy</em>
          </h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond} />
            <span className={styles.dividerLine} />
          </div>
          <ul className={styles.whyList}>
            {WHY_US.map((item, i) => (
              <li key={item} className={styles.whyItem}>
                <span className={styles.whyItemNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.whyItemText}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Consult callout */}
          <div className={styles.consultBox}>
            <p className={styles.consultText}>
              Every recovery matter is unique. Our team can assess your situation and recommend
              the most effective pathway toward resolution.
            </p>
            <a href="#contact" className={styles.consultBtn}>
              Request a Consultation
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.consultArrow}>
                <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* <CTABanner /> */}
    </main>
  );
};

export default ServicesPage;