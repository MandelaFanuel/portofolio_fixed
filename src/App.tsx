import { useEffect, useMemo } from 'react';
import { About, Contact, Experience, Projects, Skills, Stats } from './components/Sections';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { SocialLinks } from './components/SocialLinks';
import type { Theme } from './components/ThemeIcon';
import { content, type Language } from './data/content';
import { usePreference } from './hooks/usePreference';

export function App() {
  const [theme, setTheme] = usePreference<Theme>('fanuel-theme', 'light');
  const [language, setLanguage] = usePreference<Language>('fanuel-language', 'fr');
  const t = useMemo(() => content[language], [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
  }, [theme, language]);

  return (
    <div className="site-shell">
      <Navbar nav={t.nav} theme={theme} language={language} setTheme={setTheme} setLanguage={setLanguage} />
      <main id="top">
        <Hero hero={t.hero} />
        <Stats stats={t.stats} />
        <About about={t.about} identity={t.identity} />
        <Experience experience={t.experience} education={t.education} />
        <Skills skills={t.skills} languages={t.languages} />
        <Projects projects={t.projects} />
        <Contact contact={t.contact} />
      </main>
      <footer>
        <img src="/profile.jpg" alt="" aria-hidden="true" />
        <span>{t.footer}</span>
        <SocialLinks compact />
      </footer>
    </div>
  );
}
