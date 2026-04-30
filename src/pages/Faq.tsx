import styles from '../faq.module.css';

const FAQS = [
  {
    q: "Who is eligible to claim these assets?",
    a: "Any rightful shareholder, nominee, or legal heir can initiate a recovery claim. Our team assists in verifying eligibility with precision and discretion.",
  },
  {
    q: "How long does the recovery process take?",
    a: "Timelines vary depending on documentation and regulatory approvals, but most cases are resolved within a structured and guided timeframe.",
  },
  {
    q: "Do I need to visit any office physically?",
    a: "No. The entire process is designed to be seamless and remote, with our team managing filings and follow-ups on your behalf.",
  },
  {
    q: "Is there any upfront fee?",
    a: "No upfront commitment is required. We begin with a complimentary eligibility assessment before proceeding further.",
  },
];

const FAQ = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.label}>Clarifications</span>
          <h2 className={styles.heading}>
            Frequently Asked <em>Questions</em>
          </h2>
        </div>

        <div className={styles.list}>
          {FAQS.map((item, i) => (
            <details key={i} className={styles.item}>
              <summary className={styles.question}>
                {item.q}
              </summary>
              <p className={styles.answer}>
                {item.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;