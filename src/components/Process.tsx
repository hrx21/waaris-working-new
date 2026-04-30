import styles from './Process.module.css';

const STEPS = [
  { n: '1', title: 'Eligibility Check', desc: 'Tell us about your assets — shares, dividends, or holdings. We assess your eligibility for free, no commitment required.' },
  { n: '2', title: 'Document Collection', desc: 'We guide you through exactly what documents are needed and help you gather them efficiently.' },
  { n: '3', title: 'Filing & Follow-ups', desc: 'Our team handles all filings with companies, IEPF, and regulators — and follows up until resolved.' },
  { n: '4', title: 'Asset Recovery', desc: 'Shares credited to your demat account. Your wealth is finally back where it belongs.' },
  // old steps commented:
  // { n: '1', title: 'Free Consultation', desc: '...' },
  // { n: '2', title: 'Document Review', desc: '...' },
  // { n: '3', title: 'We File & Follow Up', desc: '...' },
  // { n: '4', title: 'Wealth Reclaimed', desc: '...' },
];

const Process = () => (
  <section className={styles.process} id="process">
    <div className="section-inner">
      <div className="section-label">
        <span className="section-label-line" />
        <span>How It Works</span>
      </div>
      <h2 className="section-title" style={{ color: '#fff' }}>
        Simple 4-Step <em>Recovery Process</em>
      </h2>
      <div className={styles.steps}>
        {STEPS.map(s => (
          <div key={s.n} className={styles.step}>
            <div className={styles.circle}>{s.n}</div>
            <h4 className={styles.title}>{s.title}</h4>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
