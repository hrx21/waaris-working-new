import { useTheme } from '../context/ThemeContext';
import styles from './Services.module.css';

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
    desc: 'Unclaimed dividends and shares held by the Investor Education & Protection Fund are not lost — they are waiting. We identify, file, and recover your rightful assets.',
    fullDesc:
      'The Investor Education and Protection Fund (IEPF) holds shares, dividends, and other investor entitlements that remain unclaimed for a prescribed period. Recovering these assets often involves extensive documentation, statutory filings, and coordination with multiple stakeholders. At WAARIS Legacy, we offer end-to-end assistance for IEPF claim recovery, ensuring clients are guided through each stage with clarity and confidence — minimizing delays and maximizing the likelihood of successful recovery.',
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
    desc: 'We assist legal heirs in transferring shareholdings from deceased family members through the correct legal channels — with sensitivity and precision.',
    fullDesc:
      'In the event of the demise of a shareholder or investor, securities must be legally transmitted to the rightful heirs, nominees, or beneficiaries. This process often requires legal documentation, succession-related compliance, and procedural coordination with companies, registrars, and depositories. Our team ensures that ownership is transferred lawfully, efficiently, and in accordance with regulatory and corporate requirements.',
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
    desc: 'Lost, misplaced, or mutilated physical certificates can be replaced through a structured, compliant process. We manage every formality until the duplicate is issued.',
    fullDesc:
      'Physical share certificates that are lost, misplaced, mutilated, or destroyed can hinder ownership verification and future claims. Obtaining a duplicate certificate is often a mandatory step before any recovery, transmission, or dematerialization process can proceed. WAARIS Legacy assists in securing duplicate share certificates through a structured and compliant process, managing all procedural requirements with minimal inconvenience to clients.',
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
    desc: 'Spelling errors, marital name changes, or initials mismatches in investor records create obstacles. We correct and update records to ensure seamless future claims.',
    fullDesc:
      'Errors, inconsistencies, or outdated investor details in company records can create obstacles in financial recovery and ownership recognition. Common issues include spelling mistakes, marital name changes, initials mismatch, or variation in supporting documents. We provide professional assistance in correcting and updating investor records to ensure legal and procedural alignment — essential for avoiding claim rejections and ensuring seamless processing of future transactions.',
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
    desc: 'Joint holdings may require deletion of a deceased or inactive holder\'s name. We ensure the process is carried out correctly, efficiently, and with full compliance.',
    fullDesc:
      'Joint holdings may require deletion of a deceased, inactive, or otherwise ineligible holder\'s name to enable transfer, recovery, or continued ownership rights. This process requires compliance with company procedures and may involve legal documentation depending on the nature of the holding. WAARIS Legacy provides structured support to ensure the deletion is carried out correctly and efficiently.',
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
    title: 'Suspense & Escrow Account Claims',
    desc: 'Securities placed in suspense or escrow accounts often remain dormant for years. We trace, substantiate, and recover these entitlements through structured claim handling.',
    fullDesc:
      'Securities, dividends, or entitlements may be placed in suspense or escrow accounts when ownership remains unresolved, documentation is incomplete, or corporate actions are pending clarification. These assets often remain dormant for years due to procedural complexity and lack of claimant awareness. Our firm assists clients in identifying, substantiating, and recovering such entitlements through structured claim handling and stakeholder coordination.',
    points: [
      'Tracing of holdings in suspense / escrow accounts',
      'Ownership verification support',
      'Preparation of claim submissions',
      'Liaison with issuers, custodians, and registrars',
      'Advisory on procedural resolution pathways',
    ],
  },
];

/**
 * isExpanded — when true the card shows fullDesc + bullet points.
 * Pass isExpanded={true} on the /services page, false (default) on homepage.
 */
const Services = ({ isExpanded = false }) => {
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

        {/* ── HEADER ── */}
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
            {!isExpanded && (
              <a href="/services" className={styles.ctaBtn}>
                <span>View All Services</span>
                <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerLine} />
        </div>

        {/* ── GRID ── */}
        <div className={`${styles.grid} ${isExpanded ? styles.gridExpanded : ''}`}>
          {SERVICES.map((s) => (
            <div key={s.num} className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`} id={s.id}>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.iconWrap}>
                <div className={styles.icon}>{s.icon}</div>
              </div>
              <h3 className={styles.title}>{s.title}</h3>

              {/* Short desc always visible */}
              <p className={styles.desc}>{s.desc}</p>

              {/* Full content — only on services page */}
              {isExpanded && (
                <div className={styles.expandedContent}>
                  <p className={styles.fullDesc}>{s.fullDesc}</p>
                  <ul className={styles.points}>
                    {s.points.map((pt) => (
                      <li key={pt} className={styles.point}>
                        <span className={styles.pointDot} aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.cardFooter}>
                {isExpanded ? (
                  <a href="#contact" className={styles.link}>
                    Get Started
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.linkArrow}>
                      <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : (
                  <a href={`/services#${s.id}`} className={styles.link}>
                    Read more...
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.linkArrow}>
                      <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
              <div className={styles.cardBar} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
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