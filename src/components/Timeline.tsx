import type { TimelineItem } from '../data/content';
import { LinkedText } from './LinkedText';

export function Timeline({ items, compact = false }: { items: TimelineItem[]; compact?: boolean }) {
  return (
    <div className={`timeline ${compact ? 'compact' : ''}`}>
      {items.map((item) => (
        <article className="timeline-item" key={`${item.period}-${item.title}`}>
          <div className="timeline-marker">
            <span>{item.year}</span>
            <time>{item.period}</time>
          </div>
          <div>
            <h3><LinkedText text={item.title} /></h3>
            {item.placeUrl ? (
              <a className="timeline-place" href={item.placeUrl} target="_blank" rel="noreferrer">
                <LinkedText text={item.place} />
              </a>
            ) : (
              <strong><LinkedText text={item.place} /></strong>
            )}
            <p><LinkedText text={item.description} /></p>
          </div>
        </article>
      ))}
    </div>
  );
}
