import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import DarkLogo from '../assets/darklord.png';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => (
  <footer className={styles.footer}>

    {/* Top rule */}
    <div className={styles.topRule} aria-hidden="true">
      <span className={styles.ruleLine} />
      <span className={styles.ruleDiamond} />
      <span className={styles.ruleLine} />
    </div>

    <div className={styles.inner}>

      {/* ── Brand — full logo image only ── */}
      <div className={styles.brand}>
        <Link to="/">
          <img
            src={DarkLogo}
            alt="Waaris Legacy"
            className={styles.logoImg}
          />
        </Link>
      </div>

      {/* ── Nav links ── */}
      <nav className={styles.links} aria-label="Footer navigation">
        {NAV_LINKS.map(l => (
          <Link key={l.href} to={l.href} className={styles.link}>
            {l.label}
          </Link>
        ))}
      </nav>

      {/* ── Contact block ── */}
      <div className={styles.contact}>
        <a href="mailto:info@waarislegacy.com" className={styles.contactItem}>
          info@waarislegacy.com
        </a>
        <a href="tel:+91XXXXXXXXXX" className={styles.contactItem}>
          +91 96531 66634
        </a>
        <p className={styles.contactItem} style={{ cursor: 'default' }}>
          Mumbai, Maharashtra, India
        </p>
      </div>

    </div>

    {/* Bottom strip */}
    <div className={styles.bottom}>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Waaris Legacy Wealth Recovery LLP. All rights reserved.
      </p>
      <p className={styles.legal}>
        Trusted Financial Recovery Advisors · Legal &amp; Compliant
      </p>
    </div>

  </footer>
);

export default Footer;