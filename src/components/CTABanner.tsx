import styles from './CTABanner.module.css';

const CTABanner = () => (
  <div className={styles.banner}>

    {/* Top rule — same as Process topRule */}
    <div className={styles.rule} aria-hidden="true">
      <span className={styles.ruleLine} />
      <span className={styles.ruleDiamond} />
      <span className={styles.ruleLine} />
    </div>

    <div className={styles.inner}>

      {/* Left — text */}
      <div>
        {/* Label — same as Process .label */}
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span className={styles.labelText}>Take the First Step</span>
        </div>

        {/* Heading */}
        <h2 className={styles.title}>
          Don't Let Your <em>Legacy</em><br />
          Gather Dust Any Longer
        </h2>

        <p className={styles.subtitle}>
          Get a free consultation today. No commitment, no paperwork upfront.
        </p>
      </div>

      {/* Right — actions */}
      <div className={styles.actions}>
        <a href="#contact" className={styles.btnPrimary}>
          Get Free Consultation
        </a>
        <a href="tel:+91XXXXXXXXXX" className={styles.phone}>
          📞 Call Us Now
        </a>
      </div>

    </div>

    {/* Bottom rule */}
    <div className={styles.rule} aria-hidden="true">
      <span className={styles.ruleLine} />
      <span className={styles.ruleDiamond} />
      <span className={styles.ruleLine} />
    </div>

  </div>
);

export default CTABanner;