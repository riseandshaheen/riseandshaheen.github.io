import { siteData } from "../data";

export default function Events() {
  return (
    <section id="events" className="section">
      <h2 className="section-title">📍 Events</h2>
      <div className="events-grid">
        {siteData.events.map((event, i) => (
          <div key={i} className="event-card">
            <img src={event.image} alt={event.name} className="event-img" />
            <span className="event-name">{event.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
