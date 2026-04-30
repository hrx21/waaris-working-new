import ServicesSection from '../components/Services';
import Process         from '../components/Process';
import CTABanner       from '../components/CTABanner';
import styles          from './Page.module.css';

const ServicesPage = () => (
  <main className={styles.page}>
    <div className={styles.pageHero}>
      <div className={styles.pageHeroInner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span>What We Do</span>
        </div>
        <h1>Our <em>Recovery Services</em></h1>
        <p>End-to-end solutions for unclaimed shares, IEPF recovery, dormant assets, and legal succession.</p>
      </div>
    </div>

    <ServicesSection />
    <Process />
    <CTABanner />
  </main>
);

export default ServicesPage;