import { projects } from "../lib/projects.ts";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <span className="section-label">// work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of things I've built</p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-header">
              <h3 className="project-name">{p.name}</h3>
              <a href={p.url} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}>
                ↗
              </a>
            </div>
            <p className="project-description">{p.description}</p>
            <div className="project-card-footer">
              <div className="project-tags">
                {p.tags.map((tag, j) => (
                  <span className="project-tag" key={j}>{tag}</span>
                ))}
              </div>
              <a href={`/projects/${p.slug}`} className="project-details-link">
                Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
