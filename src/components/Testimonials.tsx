import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    initial: 'R', name: 'Ramesh Iyer', location: 'Mumbai, Maharashtra',
    text: 'We had no idea my late father\'s share certificates were worth over ₹8 lakhs. Waaris Legacy recovered everything within the promised timeline. Absolutely professional.',
  },
  {
    initial: 'P', name: 'Priya Sharma', location: 'Delhi, NCR',
    text: 'The IEPF claim process seemed impossible to us. The team guided us step by step and recovered my mother\'s unclaimed dividends without any hassle. Highly recommended.',
  },
  {
    initial: 'A', name: 'Arjun Mehta', location: 'Pune, Maharashtra',
    text: 'Transmission of shares from my grandfather\'s estate was handled with great care and legal accuracy. The team was responsive and transparent throughout.',
  },
];

const Testimonials = () => (
  <section className={styles.section} id="testimonials">
    <div className="section-inner">
      <div className="section-label">
        <span className="section-label-line" />
        <span>Client Stories</span>
      </div>
      <h2 className="section-title">Families Who Reclaimed Their <em>Legacy</em></h2>
      <div className={styles.grid}>
        {TESTIMONIALS.map(t => (
          <div key={t.name} className={styles.card}>
            <div className={styles.quoteMark}>"</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initial}</div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.location}</span>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
