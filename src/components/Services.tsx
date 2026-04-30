import styles from './Services.module.css';

const SERVICES = [
  {
    num: '01', icon: '📋',
    title: 'Physical Share to Demat Conversion',
    desc: 'Convert your old physical share certificates into active digital demat holdings. We handle KYC verification, company liaison, and NSDL/CDSL registration.',
  },
  {
    num: '02', icon: '🏛️',
    title: 'IEPF Claim Recovery',
    desc: 'Millions in unclaimed dividends and shares sit with the Investor Education & Protection Fund. We identify, file, and recover your rightful assets.',
  },
  {
    num: '03', icon: '🤝',
    title: 'Transmission of Shares',
    desc: 'Lost a loved one? We assist legal heirs in transferring shareholdings from deceased family members through the correct legal channels — with sensitivity and precision.',
  },
  {
    num: '04', icon: '🤝',
    title: 'Succession Support',
    desc: 'Legal heir & documentation assistance. Transferring shares from a deceased family member to rightful heirs — handled end-to-end.',
  },
];

const Services = () => (
  <section className={styles.services} id="services">
    <div className="section-inner">
      <div className={styles.header}>
        <div>
          <div className="section-label">
            <span className="section-label-line" />
            <span>Our Services</span>
          </div>
          <h2 className="section-title">
            Everything You Need to <em>Reclaim Your Wealth</em>
          </h2>
        </div>
<a href="#services" className="btn-primary">View All Services</a>
      </div>

      <div className={styles.grid}>
        {SERVICES.map(s => (
          <div key={s.num} className={styles.card}>
            <span className={styles.num}>{s.num}</span>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
            <a href="#contact" className={styles.link}>Enquire Now →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
