const RUNDINOVA_URL = 'https://rundinova.com';

export function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(RundiNova Tech)/g);

  return (
    <>
      {parts.map((part, index) => (
        part === 'RundiNova Tech' ? (
          <a key={`${part}-${index}`} className="inline-link" href={RUNDINOVA_URL} target="_blank" rel="noreferrer">
            {part}
          </a>
        ) : part
      ))}
    </>
  );
}
