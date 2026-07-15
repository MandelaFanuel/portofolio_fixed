import type { Content } from '../data/content';
import type { FormEvent } from 'react';
import { SectionTitle } from './SectionTitle';
import { SocialLinks } from './SocialLinks';
import { Timeline } from './Timeline';

export function Stats({ stats }: { stats: Content['stats'] }) {
  return (
    <section className="stats" aria-label="Indicateurs">
      {stats.map((item) => (
        <article key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

export function About({ about, identity }: { about: Content['about']; identity: Content['identity'] }) {
  return (
    <section id="about" className="two-column section-pad">
      <div>
        <SectionTitle title={about.title} />
        {about.paragraphs.map((paragraph) => (
          <p className="body-copy" key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <aside className="identity-card">
        <h2>{identity.title}</h2>
        {identity.items.map((item) => (
          <div className="identity-row" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </aside>
    </section>
  );
}

export function Experience({ experience, education }: { experience: Content['experience']; education: Content['education'] }) {
  return (
    <section id="experience" className="section-pad journey-sections">
      <div className="journey-section">
        <SectionTitle title={experience.title} />
        <Timeline items={experience.items} compact />
      </div>
      <div className="journey-section">
        <SectionTitle title={education.title} />
        <Timeline items={education.items} compact />
      </div>
    </section>
  );
}

export function Skills({ skills, languages }: { skills: Content['skills']; languages: Content['languages'] }) {
  return (
    <section id="skills" className="section-pad">
      <SectionTitle title={skills.title} centered />
      <div className="skill-grid">
        {skills.groups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="language-panel">
        <h3>{languages.title}</h3>
        <div>
          {languages.items.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Projects({ projects }: { projects: Content['projects'] }) {
  return (
    <section id="projects" className="section-pad projects-section">
      <SectionTitle title={projects.title} centered />
      <p className="section-intro">{projects.intro}</p>
      <div className="project-groups">
        {projects.groups.map((group) => (
          <div className="project-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="project-grid">
              {group.items.map((project) => {
                const content = (
                  <>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      {project.status ? <span>{project.status}</span> : null}
                    </div>
                  </>
                );

                return project.url ? (
                  <a className="project-card linked" key={project.title} href={project.url} target="_blank" rel="noreferrer" aria-label={project.title}>
                    {content}
                  </a>
                ) : (
                  <article className="project-card" key={project.title}>{content}</article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact({ contact }: { contact: Content['contact'] }) {
  return (
    <section id="contact" className="section-pad contact-section">
      <SectionTitle title={contact.title} centered />
      <p>{contact.text}</p>
      <div className="contact-panel">
        <div className="contact-icons">
          <SocialLinks />
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input name="name" type="text" placeholder="Nom complet" required />
          <input name="email" type="email" placeholder="Adresse email" required />
          <input name="subject" type="text" placeholder="Sujet" required />
          <textarea name="message" placeholder="Message" rows={5} required />
          <button className="button primary" type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}

async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    alert('Le formulaire sera actif après configuration EmailJS.');
    return;
  }

  const formData = new FormData(form);
  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: Object.fromEntries(formData.entries())
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    alert('Erreur lors de l’envoi. Veuillez réessayer.');
    return;
  }

  form.reset();
  alert('Message envoyé avec succès.');
}
