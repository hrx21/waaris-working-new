import AboutSection from '../components/About';
import Partners     from '../pages/Partners';
import Testimonials from '../components/Testimonials';
import CTABanner    from '../components/CTABanner';
import styles       from '../page.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import styles1 from '../servicePage.module.css';

const WHY_US = [
  'Specialized expertise in financial asset recovery and investor services',
  'End-to-end handling of documentation and compliance requirements',
  'Professional, transparent, and confidential service approach',
  'Focus on rightful ownership restoration and legacy preservation',
];

const AboutPage = () => {
    const { hash } = useLocation();
      const { theme } = useTheme();

  const isDark = theme === 'dark';

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [hash]);

  return (

  <main className={styles.page}>

    {/* ── Page hero banner ── */}
    <div className={styles.pageHero}>
      <div className={styles.pageHeroInner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span>Our Story</span>
        </div>
        <h1>About <em>Waaris Legacy</em></h1>
        <p>We exist to ensure that no family's financial legacy is lost to time, paperwork, or complexity.</p>
      </div>
    </div>

    <AboutSection />
    <Partners />
          <section className={`${styles1.whySection} ${isDark ? styles1.whySectionDark : ''}`}>
        <div className={styles1.whyBg}>
          <div className={styles1.whyBgGlow} />
        </div>
        <div className={styles1.whyInner}>
          <div className={styles1.label}>
            <span className={styles1.labelLine} />
            <span className={styles1.labelText}>Why Choose Us</span>
            <span className={styles1.labelLine} />
          </div>
          <h2 className={styles1.whyHeading}>
            Why Clients Choose{' '}
            <em className={styles1.whyEm}>WAARIS Legacy</em>
          </h2>
          <div className={styles1.divider}>
            <span className={styles1.dividerLine} />
            <span className={styles1.dividerDiamond} />
            <span className={styles1.dividerLine} />
          </div>
          <ul className={styles1.whyList}>
            {WHY_US.map((item:any, i:any) => (
              <li key={item} className={styles1.whyItem}>
                <span className={styles1.whyItemNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles1.whyItemText}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Consult callout */}
          <div className={styles1.consultBox}>
            <p className={styles1.consultText}>
              Every recovery matter is unique. Our team can assess your situation and recommend
              the most effective pathway toward resolution.
            </p>
            <a href="#contact" className={styles1.consultBtn}>
              Request a Consultation
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles1.consultArrow}>
                <path d="M4 10h12m-5-5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    <Testimonials />
    <CTABanner />
  </main>
);
}
export default AboutPage;