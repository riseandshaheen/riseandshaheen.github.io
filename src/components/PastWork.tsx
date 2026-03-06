import { siteData } from "../data";

export default function PastWork() {
  const { projects, content } = siteData;

  const contentItems = [
    ...content.jsSeries.slice(0, 1).map((v) => ({ ...v, type: "Video Series" })),
    ...content.tutorials.map((t) => ({ ...t, type: (t as { type?: string }).type || "Tutorial" })),
    ...content.podcasts.map((p) => ({ ...p, type: "Podcast" })),
    ...content.articles.map((a) => ({ ...a, type: "Article" })),
  ];

  return (
    <section id="work" className="section">
      <h2 className="section-title">🔍 Past Work Highlights</h2>

      <div className="work-grid">
        {contentItems.map((item, i) => (
          <a
            key={`content-${i}`}
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
              />
            )}
            <div className="work-card-body">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="work-tags">
                <span className="type-tag">{item.type}</span>
              </div>
            </div>
          </a>
        ))}

        {projects.map((project, i) => (
          <a
            key={`proj-${i}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
          >
            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt={project.name}
                className="work-card-thumb"
              />
            )}
            <div className="work-card-body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="work-tags">
                <span className="type-tag">Project</span>
                {project.tech.map((t) => (
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
