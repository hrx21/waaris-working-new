import AboutSection from '../components/About';
import Partners     from '../pages/Partners';
import Testimonials from '../components/Testimonials';
import CTABanner    from '../components/CTABanner';
import styles       from '../page.module.css';

const AboutPage = () => (
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
    <Testimonials />
    <CTABanner />
  </main>
);

export default AboutPage;