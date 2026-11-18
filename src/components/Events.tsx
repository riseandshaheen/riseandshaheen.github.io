import { siteData } from "../data";

export default function Events() {
  return (
    <section id="events" className="section">
      <h2 className="section-title">Where I've been lately</h2>
      <div className="events-grid">
        {siteData.events.map((event) => {
          const body = (
            <>
              <img src={event.image} alt={event.name} className="event-img" loading="lazy" decoding="async" />
              <span className="event-name">{event.name}</span>
            </>
          );

          return "link" in event && event.link ? (
            <a
              key={event.name}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="event-card"
            >
              {body}
            </a>
          ) : (
            <div key={event.name} className="event-card">
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
