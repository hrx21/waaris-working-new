import ContactSection from '../components/Contact';
import styles         from './Page.module.css';

const ContactPage = () => (
  <main className={styles.page}>
    <div className={styles.pageHero}>
      <div className={styles.pageHeroInner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span>Reach Out</span>
        </div>
        <h1>Start Your <em>Recovery Journey</em></h1>
        <p>Our team responds within 24 hours. Free consultation, no commitment required.</p>
      </div>
    </div>

    <ContactSection />
  </main>
);

export default ContactPage;