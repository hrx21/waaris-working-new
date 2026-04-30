import styles from './TrustBar.module.css';

const ITEMS = [
  // { icon: '✅', text: 'SEBI Compliant' },
  // { icon: '🏛️', text: 'NSDL / CDSL Registered' },
    { icon: '✔️', text: 'Trusted Financial Recovery Advisors' },
  { icon: '✔️', text: 'Specialized in IEPF & Unclaimed Assets' },
  { icon: '✔️', text: 'End-to-End Documentation Support' },
  { icon: '✔️', text: 'Pan India Service' },
  // { icon: '🔒', text: '100% Secure & Confidential' },
  // { icon: '📞', text: 'Dedicated Support' },
  // { icon: '📍', text: 'Pan India Service' },
];

const TrustBar = () => (
  <div className={styles.bar}>
    {ITEMS.map(item => (
      <div key={item.text} className={styles.item}>
        <span>{item.icon}</span> {item.text}
      </div>
    ))}
  </div>
);

export default TrustBar;
