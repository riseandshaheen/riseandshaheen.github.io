import { siteData } from "../data";

type WorkItem = {
  title: string;
  summary: string;
  link: string;
  thumbnail: string;
  type: string;
  tech?: string[];
};

export default function PastWork() {
  const { projects, content } = siteData;

  const toProjectItem = (p: (typeof projects)[number]): WorkItem => ({
    title: p.name,
    summary: p.description,
    link: p.link,
    thumbnail: p.thumbnail,
    type: "Project",
    tech: p.tech,
  });

  const items: WorkItem[] = [
    ...projects.filter((p) => p.recent).map(toProjectItem),
    ...content.jsSeries.slice(0, 1).map((v) => ({ ...v, type: "Video Series" })),
    ...content.tutorials.map((t) => ({ ...t, type: (t as { type?: string }).type || "Tutorial" })),
    ...content.podcasts.map((p) => ({ ...p, type: "Podcast" })),
    ...content.articles.map((a) => ({ ...a, type: "Article" })),
    ...projects.filter((p) => !p.recent).map(toProjectItem),
  ];

  return (
    <section id="work" className="section">
      <h2 className="section-title">What I've been doing lately</h2>

      <div className="work-grid">
        {items.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
          >
            {item.thumbnail && (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="work-card-thumb"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="work-card-body">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="work-tags">
                <span className="type-tag">{item.type}</span>
                {item.tech?.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
