const projects = [
  {
    name: "Pastebin",
    url: "https://paste.jlcarveth.dev",
    description:
      "A self-hosted paste service for sharing code snippets and text. Minimal, fast, and accessible without an account.",
    tags: ["Deno", "TypeScript", "PostgreSQL"],
  },
  {
    name: "Notes",
    url: "https://notes.jlcarveth.dev",
    description:
      "Personal markdown-based notes application. Lightweight and private — built for quick capture and retrieval.",
    tags: ["Deno", "Fresh", "Preact"],
  },
  {
    name: "jlcarveth.dev",
    url: "https://jlcarveth.dev",
    description:
      "This portfolio site. Built with Deno and Fresh for server-side rendering and minimal client-side overhead.",
    tags: ["Deno", "Fresh", "Preact", "TypeScript"],
  },
  {
    name: "Blog",
    url: "https://blog.jlcarveth.dev",
    description:
      "Technical writing on software development, systems programming, and engineering decisions across the stack.",
    tags: ["Technical Writing"],
  },
];

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
            <div className="project-tags">
              {p.tags.map((tag, j) => (
                <span className="project-tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
