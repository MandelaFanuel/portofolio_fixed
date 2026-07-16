import type { Content } from '../data/content';
import { useState, type FormEvent } from 'react';
import { LinkedText } from './LinkedText';
import { SectionTitle } from './SectionTitle';
import { SocialLinks } from './SocialLinks';
import { Timeline } from './Timeline';

export function Stats({ stats }: { stats: Content['stats'] }) {
  return (
    <section className="stats" aria-label="Indicateurs">
      {stats.map((item) => (
        <article key={item.label}>
          <strong>{item.value}</strong>
          <span><LinkedText text={item.label} /></span>
        </article>
      ))}
    </section>
  );
}

export function About({ about, identity }: { about: Content['about']; identity: Content['identity'] }) {
  return (
    <section id="about" className="section-pad about-section">
      <SectionTitle title={about.title} centered />
      <div className="two-column about-grid">
        <div>
        {about.paragraphs.map((paragraph) => (
          <p className="body-copy" key={paragraph}><LinkedText text={paragraph} /></p>
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
      </div>
    </section>
  );
}

export function Experience({ experience, education }: { experience: Content['experience']; education: Content['education'] }) {
  return (
    <section id="experience" className="section-pad journey-sections">
      <div className="journey-section">
        <SectionTitle title={experience.title} centered />
        <Timeline items={experience.items} compact />
      </div>
      <div className="journey-section">
        <SectionTitle title={education.title} centered />
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
            <h3><LinkedText text={group.title} /></h3>
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
  const [status, setStatus] = useState('');

  return (
    <section id="contact" className="section-pad contact-section">
      <SectionTitle title={contact.title} centered />
      <p>{contact.text}</p>
      <p className="form-notice">{contact.formNotice}</p>
      <div className="contact-icons">
        <SocialLinks />
      </div>
      <div className="contact-panel">
        <form className="contact-form" onSubmit={(event) => handleContactSubmit(event, contact.email, setStatus)}>
          <input name="name" type="text" placeholder="Nom complet" required />
          <input name="email" type="email" placeholder="Adresse email" required />
          <input name="subject" type="text" placeholder="Sujet" required />
          <textarea name="message" placeholder="Message" rows={5} required />
          <button className="button primary" type="submit">Envoyer le message</button>
          {status ? <p className="form-status" role="status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}

async function handleContactSubmit(event: FormEvent<HTMLFormElement>, fallbackEmail: string, setStatus: (message: string) => void) {
  event.preventDefault();
  const form = event.currentTarget;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (!serviceId || !templateId || !publicKey) {
    const subject = encodeURIComponent(String(data.subject || 'Contact depuis le portfolio'));
    const body = encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
    window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
    setStatus('Votre application email va s’ouvrir avec le message préparé.');
    return;
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: data.email,
      to_email: fallbackEmail
    }
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus('Le message n’a pas pu être envoyé. Veuillez réessayer.');
      return;
    }

    form.reset();
    setStatus('Message envoyé avec succès.');
  } catch {
    setStatus('Connexion indisponible. Veuillez réessayer.');
  }
}
