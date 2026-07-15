import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Content, Language } from '../data/content';
import { ThemeIcon, type Theme } from './ThemeIcon';

const languages: { code: Language; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'sw', label: 'SW' }
];

type NavbarProps = {
  nav: Content['nav'];
  theme: Theme;
  language: Language;
  setTheme: Dispatch<SetStateAction<Theme>>;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export function Navbar({ nav, theme, language, setTheme, setLanguage }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const links = [
    ['#about', nav.about],
    ['#experience', nav.experience],
    ['#skills', nav.skills],
    ['#projects', nav.projects],
    ['#contact', nav.contact]
  ];

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Mandela KASUMBA Fanuel">
        <img src="/profile.jpg" alt="Mandela KASUMBA Fanuel" />
        <span>Fanuel045</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigation principale">
        {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
      </nav>

      <div className="nav-actions">
        <div className="language-switch" aria-label="Language selector">
          <svg className="globe-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.8 2.6 4.2 5.9 4.2 10S14.8 19.4 12 22M12 2C9.2 4.6 7.8 7.9 7.8 12S9.2 19.4 12 22M3 12h18M4.8 7h14.4M4.8 17h14.4" />
          </svg>
          {languages.map((item) => (
            <button
              key={item.code}
              className={language === item.code ? 'active' : ''}
              onClick={() => setLanguage(item.code)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Changer de thème"
          title="Thème"
        >
          <ThemeIcon theme={theme} />
        </button>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu mobile" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Navigation mobile">
        {links.map(([href, label]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
