export function SectionTitle({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      <span />
      <h2>{title}</h2>
    </div>
  );
}
