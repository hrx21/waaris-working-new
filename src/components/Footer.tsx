import styles from './Footer.module.css';

const LINKS = ['About', 'Services', 'Process', 'Testimonials', 'Contact'];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logo}>
      <span>WAARIS <em>LEGACY</em></span>
      <p>WHERE LEGACY FINDS ITS HEIR</p>
    </div>
    <nav className={styles.links}>
      {LINKS.map(l => (
        <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
      ))}
    </nav>
    <p className={styles.copy}>© {new Date().getFullYear()} Waaris Legacy Wealth Recovery LLP. All rights reserved.</p>
  </footer>
);

export default Footer;
