type SocialItem = {
  href: string;
  label: string;
  icon: 'facebook' | 'linkedin' | 'x' | 'github' | 'phone' | 'whatsapp';
};

const socials: SocialItem[] = [
  { href: 'https://www.facebook.com/profile.php?id=100070378223025', label: 'Facebook', icon: 'facebook' },
  { href: 'https://www.linkedin.com/in/mandela-kasumba-fanuel-b9228717a', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://x.com/MandelaFanuel2', label: 'X', icon: 'x' },
  { href: 'https://github.com/Fanuel045', label: 'GitHub', icon: 'github' },
  { href: 'https://wa.me/25769096758', label: 'WhatsApp', icon: 'whatsapp' },
  { href: 'tel:+25769096758', label: 'Téléphone', icon: 'phone' }
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? 'compact' : ''}`} aria-label="Réseaux sociaux et contact rapide">
      {socials.map((item) => (
        <a
          key={item.icon}
          href={item.href}
          target={item.icon === 'phone' ? undefined : '_blank'}
          rel={item.icon === 'phone' ? undefined : 'noreferrer'}
          aria-label={item.label}
          title={item.label}
        >
          <SocialIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
}

function SocialIcon({ icon }: { icon: SocialItem['icon'] }) {
  if (icon === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 8.2h2.1V4.8c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.7v3.8H8V24h4.1v-7.2h3.4l.5-3.8h-3.9v-2.6c0-1.1.3-2.2 2.1-2.2Z" />
      </svg>
    );
  }

  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.3 7.8H1.4V24h3.9V7.8ZM3.4 0C2.1 0 1 1 1 2.3s1 2.3 2.4 2.3 2.4-1 2.4-2.3S4.8 0 3.4 0ZM23 14.7c0-4.6-2.5-7.2-6-7.2-2.8 0-4 1.5-4.7 2.6V7.8H8.5V24h3.9v-8.1c0-2.1.4-4.1 3-4.1 2.5 0 2.6 2.4 2.6 4.3V24h4V14.7Z" />
      </svg>
    );
  }

  if (icon === 'x') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 1.5h3.4l-7.5 8.6 8.8 12.4h-6.9l-5.4-7.1-6.2 7.1H1.7l8-9.2L1.2 1.5h7.1l4.9 6.5 5.7-6.5Zm-1.2 18.8h1.9L7.3 3.6h-2l12.4 16.7Z" />
      </svg>
    );
  }

  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.5 11.5 0 0 1 12 6.4c1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (icon === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5A11.7 11.7 0 0 0 2.1 17.6L.5 23.5l6-1.6A11.7 11.7 0 0 0 24 11.8a11.6 11.6 0 0 0-3.5-8.3ZM12.2 21c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.6.9 1-3.5-.2-.4A9.2 9.2 0 1 1 12.2 21Zm5.1-6.9c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.4 2.3 4.1 3.1c-.8.2-1.4.9-1.4 1.8 0 9.1 7.3 16.4 16.4 16.4.9 0 1.6-.6 1.8-1.4l.8-3.3c.2-.8-.2-1.6-.9-1.9l-3.6-1.5c-.6-.3-1.4-.1-1.8.4l-1.5 1.8a12.8 12.8 0 0 1-5.3-5.3l1.8-1.5c.5-.4.7-1.1.4-1.8L9.3 3.2c-.3-.7-1.1-1.1-1.9-.9Z" />
    </svg>
  );
}
