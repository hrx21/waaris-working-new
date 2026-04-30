import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import LightLogo from '../assets/logo.jpg';
import { Menu, X } from 'lucide-react';
const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Process',  href: '/process'  },
  { label: 'Contact',  href: '/contact'  },
];

const ABOUT_DROPDOWN = [
  { label: 'Our Company', href: '/about#company' },
  { label: 'Our Associates', href: '/about#associates' },
  { label: 'Our Partners', href: '/about#partners' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

const dropdownRef = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

useEffect(() => {
  const handler = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setAboutOpen(false);
    }
  };

  document.addEventListener('mousedown', handler);
  return () => document.removeEventListener('mousedown', handler);
}, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <img src={LightLogo} alt="Waaris Legacy" className={styles.logoImg} />
      </Link>

      {/* Links */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>

        {/* About Dropdown */}
<li
  ref={dropdownRef}
  className={styles.dropdownParent}
>
  <button
    className={styles.dropdownTrigger}
    onClick={() => setAboutOpen(o => !o)}
  >
    About
    <ChevronDown
      size={13}
      className={`${styles.chevron} ${aboutOpen ? styles.chevronOpen : ''}`}
    />
  </button>

  <ul className={`${styles.dropdown} ${aboutOpen ? styles.show : ''}`}>
    {ABOUT_DROPDOWN.map(item => (
      <li key={item.href}>
        <Link
          to={item.href}
          className={styles.dropdownItem}
          onClick={() => {
            setAboutOpen(false);
            setMenuOpen(false);
          }}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</li>

        {/* Other Links */}
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <Link to={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}

        {/* CTA */}
        <li>
          <Link to="/contact" className={styles.cta}>
            Get Started
          </Link>
        </li>
      </ul>

      {/* Actions */}
      <div className={styles.actions}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}

        </button>
          <button
  className={styles.hamburger}
  onClick={() => setMenuOpen(p => !p)}
>
  {menuOpen ? <X size={22} /> : <Menu size={22} />}
</button>
        {/* <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(p => !p)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;