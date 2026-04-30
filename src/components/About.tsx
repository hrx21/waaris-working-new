import styles from './About.module.css';

const POINTS = [
  { icon: '📜', title: 'Physical to Demat Conversion', desc: 'We handle the complete process of converting your old paper share certificates into digital demat format through NSDL/CDSL.' },
  { icon: '🏦', title: 'IEPF Claim Recovery', desc: 'Unclaimed dividends and shares transferred to IEPF? We file and follow up on your behalf for a smooth recovery.' },
  { icon: '🧬', title: 'Transmission of Shares', desc: 'Transferring shares from a deceased family member to legal heirs — we manage all paperwork end-to-end.' },
];

const About = () => (
  <section className={styles.about} id="about">
    <div className="section-inner">
      <div className={styles.grid}>
        <div className={styles.visual}>
          <div className={styles.mainBox}>
            <div className={styles.bigNumber}>10+</div>
            <p className={styles.quote}>"Every old certificate holds a story — and potential wealth waiting to be reclaimed."</p>
            <p className={styles.quoteAttr}>— Waaris Legacy</p>
          </div>
          <div className={styles.floatCard}>
            <strong>₹Cr+</strong>
            <span>Wealth Recovered</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className="section-label">
            <span className="section-label-line" />
            <span>Who We Are</span>
          </div>
          <h2 className="section-title">
            We Bridge the Gap Between <em>Old Paper & Real Wealth</em>
          </h2>
          <p className="section-desc">
            Waaris Legacy Wealth Recovery LLP is a specialist firm dedicated to helping families and individuals unlock the true value of dormant physical share certificates, unclaimed IEPF assets, and inherited shareholdings.
          </p>
          <div className={styles.points}>
            {POINTS.map(p => (
              <div key={p.title} className={styles.point}>
                <div className={styles.pointIcon}>{p.icon}</div>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
