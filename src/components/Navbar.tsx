import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process',  href: '/#process' },       // home section
  { label: 'Contact',  href: '/contact' },
  // No changes needed — these already match the brief
];

/* Same compact logo SVG used in coming-soon */
const WaarisLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="108" r="78" stroke="currentColor" strokeWidth="3.5" fill="none"/>
    <rect x="68" y="38" width="64" height="8" rx="1.5" fill="currentColor"/>
    <path d="M68 38 L68 22 L80 34 L100 14 L120 34 L132 22 L132 38 Z" fill="currentColor"/>
    <circle cx="100" cy="14" r="3.5" fill="currentColor"/>
    <circle cx="68"  cy="22" r="2.5" fill="currentColor"/>
    <circle cx="132" cy="22" r="2.5" fill="currentColor"/>
    <rect x="97.5" y="46" width="5" height="108" rx="2.5" fill="currentColor"/>
    <circle cx="100" cy="64" r="14" stroke="currentColor" strokeWidth="3.5" fill="none"/>
    <circle cx="100" cy="64" r="7"  stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M100 78 Q82 72 66 60"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M100 88 Q80 84 60 78"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none"/>
    <path d="M100 78 Q118 72 134 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M100 88 Q120 84 140 78" stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none"/>
    <path d="M100 154 Q100 166 100 176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M100 154 Q112 162 122 172" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M100 154 Q88 162 78 172"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

return (
  <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

    <Link to="/" className={styles.logo}>
      <div className={styles.logoIcon}><WaarisLogo size={26} /></div>
      <div className={styles.logoText}>
        <span className={styles.logoName}>WAARIS LEGACY</span>
        <span className={styles.logoTagline}>Where Legacy Finds Its Heir</span>
      </div>
    </Link>

    <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
      {NAV_LINKS.map(link => (
        <li key={link.href}>
          <Link to={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
        </li>
      ))}
      <li>
        <Link to="/contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
          Get Started
        </Link>
      </li>
    </ul>

    <div className={styles.actions}>
      <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
      </button>
      <button className={styles.hamburger} onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  </nav>
);
};

export default Navbar;