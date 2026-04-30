import styles from './CTABanner.module.css';

const CTABanner = () => (
  <div className={styles.banner}>
    <div className={styles.inner}>
      <div>
        <h2 className={styles.title}>
          Don't Let Your <em>Legacy</em><br />Gather Dust Any Longer
        </h2>
        <p className={styles.subtitle}>Get a free consultation today. No commitment, no paperwork upfront.</p>
      </div>
      <div className={styles.actions}>
        <a href="#contact" className="btn-primary" style={{ fontSize: '14px', padding: '18px 44px' }}>
          Get Free Consultation
        </a>
        <a href="tel:+91XXXXXXXXXX" className={styles.phone}>📞 Call Us Now</a>
      </div>
    </div>
  </div>
);

export default CTABanner;
