import type { Content } from '../data/content';
import { SocialLinks } from './SocialLinks';

export function Hero({ hero }: { hero: Content['hero'] }) {
  return (
    <section className="hero section-pad">
      <div className="hero-copy">
        <p className="role">{hero.role}</p>
        <h1>{hero.headline}</h1>
        <Portrait mobile />
        <p className="intro">{hero.intro}</p>
        <div className="hero-highlights">
          {hero.highlights.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#contact">{hero.ctaContact}</a>
          <a className="button secondary" href="#experience">{hero.ctaExperience}</a>
        </div>
        <SocialLinks />
      </div>
      <Portrait />
    </section>
  );
}

function Portrait({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`portrait-panel ${mobile ? 'mobile-portrait' : 'desktop-portrait'}`} aria-label="Photo de profil">
      <img src="/profile.jpg" alt="Mandela KASUMBA Fanuel" />
      <div>
        <strong>Mandela KASUMBA Fanuel</strong>
        <span>Gitega - RundiNova Tech</span>
      </div>
    </div>
  );
}
