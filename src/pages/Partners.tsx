import { useTheme } from '../context/ThemeContext';
import styles from '../partner.module.css';
import zaidImg from '../assets/zaid.jpg';
import harshImg from '../assets/harsh.jpg';
import bilalImg from '../assets/bilal.jpg';
import ritulImg from '../assets/ritul.jpg';

const PARTNERS = [
  {
    name: 'CA Zaid Kadiwal',
        image: zaidImg,

    role: 'Founder & CEO',
    sub: 'Strategic Advisor · Wealth Recovery Specialist',
    initials: 'ZK',
    years: '12+',
    yearsLabel: 'Years Experience',
    tags: ['Deloitte Alumni', 'Indirect Taxation', 'Wealth Recovery'],
    bio: [
      'With over 12 years of professional experience, CA Zaid Kadiwal brings together deep expertise in financial advisory, regulatory compliance, and wealth recovery solutions.',
      'He spent 6.5 years with Deloitte, gaining exposure to corporate advisory frameworks. He brings 8 years of hands-on Indirect Taxation experience and 4 years specializing in wealth recovery.',
    ],
    quote: 'Every unclaimed asset carries a story. My mission is to ensure that story reaches its rightful heir.',
  },
  {
    name: 'Harsh Khandelwal',
    role: 'Co-Founder & Partner',
    sub: 'Data Strategy & Operations',
    initials: 'HK',
        image: harshImg,
    years: '4+',
    yearsLabel: 'Years in Recovery',
    tags: ['Inter CA', 'Data Intelligence', 'Process Optimization'],
    bio: [
      'Harsh Khandelwal is a wealth recovery specialist with 4 years of experience in data-driven asset tracing and operational execution.',
      'As an Inter CA pursuing CA Final, he leads database development, analytical research, and process optimization — enabling efficient identification and recovery of unclaimed financial assets.',
    ],
    quote: 'Behind every successful recovery lies the power of accurate data, structured systems, and disciplined execution.',
  },
  {
    name: 'Bilal Qureshi',
    role: 'Co-Founder & Partner',
        image: bilalImg,
    sub: 'Business Development & Client Relations',
    initials: 'BQ',
    years: '10+',
    yearsLabel: 'Years Experience',
    tags: ['Business Development', 'Client Relations', 'Sales Strategy'],
    bio: [
      'Bilal Qureshi brings over 10 years of professional experience, marked by a strong entrepreneurial mindset and a proven track record in sales, relationship management, and business growth.',
      'With 8 years in client-facing functions, he consistently drives partnerships, expands business opportunities, and strengthens customer engagement across industries.',
    ],
    quote: 'Trust is the foundation of every successful relationship, and every relationship creates an opportunity for meaningful growth.',
  },
  {
    name: 'Ritul Patle',
    role: 'Co-Founder & Partner',
        image: ritulImg,

    sub: 'Compliance & Legal Strategy',
    initials: 'RP',
    years: 'CA',
    yearsLabel: 'Final Candidate',
    tags: ['Legal Documentation', 'Compliance Management', 'Regulatory Affairs'],
    bio: [
      'Ritul Patle contributes specialized expertise in legal documentation, compliance management, and client deliverables within the wealth recovery domain.',
      'As an Inter CA pursuing CA Final, she combines technical financial understanding with a strong command over procedural and regulatory requirements.',
    ],
    quote: 'Strong compliance is not a formality — it is the foundation of every successful recovery.',
  },
];

const OrnamentDivider = () => (
  <div className={styles.ornament} aria-hidden="true">
    <span className={styles.ornamentLine} />
    <span className={styles.ornamentDiamond} />
    <span className={styles.ornamentLine} />
  </div>
);

const Partners = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`${styles.partners} ${isDark ? styles.partnersDark : ''}`}
      id="partners"
    >
      {/* Decorative bg */}
      <div className={styles.bgPattern} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>
      <div className={styles.bgRule} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>The Royal Court</span>
          </div>
          <h2 className={styles.heading}>
            The Custodians of{' '}
            <em className={styles.headingEm}>Your Legacy</em>
          </h2>
          <p className={styles.subheading}>
            Four founding partners. One unwavering mission — to restore what rightfully belongs to you.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerLine} />
        </div>

        {/* ── Grid ── */}
        <div className={styles.grid}>
          {PARTNERS.map((p, i) => (
            <article
              key={p.name}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Ghost number */}
              <span className={styles.num} aria-hidden="true">
                {/* {String(i + 1).padStart(2, '0')} */}
              </span>

              {/* Top accent bar on hover */}
              <div className={styles.cardBar} aria-hidden="true" />

              {/* Corner ornaments */}
              <div className={styles.cornerTL} aria-hidden="true" />
              <div className={styles.cornerBR} aria-hidden="true" />

              {/* Avatar + identity */}
              <div className={styles.cardTop}>
                <div className={styles.avatar}>
                  <div className={styles.avatarRing} aria-hidden="true" />
                  {/* <div className={styles.avatarInner}>
                    <span className={styles.avatarInitials}>{p.initials}</span>
                  </div> */}
                  <div className={styles.avatarInner}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} className={styles.avatarImg} />
                    ) : (
                      <span className={styles.avatarInitials}>{p.initials}</span>
                    )}
                  </div>
                </div>
                <div className={styles.identity}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.role}>{p.role}</p>
                  <p className={styles.roleSub}>{p.sub}</p>
                </div>
                <div className={styles.statBadge}>
                  <span className={styles.statNum}>{p.years}</span>
                  <span className={styles.statLabel}>{p.yearsLabel}</span>
                </div>
              </div>

              <OrnamentDivider />

              {/* Tags */}
              <div className={styles.tags}>
                {p.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

              {/* Bio */}
              <div className={styles.bio}>
                {p.bio.map((para, j) => <p key={j}>{para}</p>)}
              </div>

              {/* Quote */}
              <blockquote className={styles.quote}>
                <span className={styles.quoteMarks} aria-hidden="true">"</span>
                <p>{p.quote}</p>
                <cite className={styles.quoteCite}>— {p.name}</cite>
              </blockquote>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;