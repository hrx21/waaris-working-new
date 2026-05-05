import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import LightLogo from '../assets/logo.jpg';
import { Menu, X } from 'lucide-react';

const ABOUT_DROPDOWN = [
{ label: 'Our Company', href: '/about#about' },
  // { label: 'Our Associates', href: '/about#associates' },
{ label: 'Our Partners', href: '/about#partners' },
];

const SERVICES_DROPDOWN = [
  { label: 'IEPF Claims',                   href: '/services#iepf-claims'                },
  { label: 'Transmission of Securities',    href: '/services#transmission-of-securities' },
  { label: 'Duplicate Share Certificate',   href: '/services#duplicate-share-certificate'},
  { label: 'Name Correction / Name Change', href: '/services#name-correction'            },
  { label: 'Name Deletion',                 href: '/services#name-deletion'              },
  { label: 'Suspense Escrow Account Claims',href: '/services#suspense-escrow'            },
];

const OTHER_LINKS = [
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [aboutOpen,    setAboutOpen]    = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const aboutRef    = useRef<HTMLLIElement | null>(null);
  const servicesRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node))
        setAboutOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node))
        setServicesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };
  // Add this helper near the top of Navbar component
const scrollToSection = (href: string) => {
  closeAll();
  const [path, hash] = href.split('#');
  if (window.location.pathname === path && hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <img src={LightLogo} alt="Waaris Legacy" className={styles.logoImg} />
      </Link>

      {/* Links */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>

        {/* About Dropdown */}
        <li ref={aboutRef} className={styles.dropdownParent}>
          <button
            className={styles.dropdownTrigger}
            onClick={() => { setAboutOpen(o => !o); setServicesOpen(false); }}
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
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          </ul>
        </li>

        {/* Services Dropdown */}
        <li ref={servicesRef} className={styles.dropdownParent}>
          <button
            className={styles.dropdownTrigger}
            onClick={() => { setServicesOpen(o => !o); setAboutOpen(false); }}
          >
            Services
            <ChevronDown
              size={13}
              className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ''}`}
            />
          </button>
          <ul className={`${styles.dropdown} ${servicesOpen ? styles.show : ''}`}>
            {SERVICES_DROPDOWN.map(item => (
              <li key={item.href}>
                <Link to={item.href} className={styles.dropdownItem} onClick={closeAll}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Other Links */}
        {OTHER_LINKS.map(link => (
          <li key={link.href}>
            <Link to={link.href} onClick={closeAll}>
              {link.label}
            </Link>
          </li>
        ))}

        {/* CTA */}
        <li>
          <Link to="/contact" className={styles.cta} onClick={closeAll}>
            Get Started
          </Link>
        </li>
      </ul>

      {/* Actions */}
      <div className={styles.actions}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
        </button>
        <button className={styles.hamburger} onClick={() => setMenuOpen(p => !p)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;