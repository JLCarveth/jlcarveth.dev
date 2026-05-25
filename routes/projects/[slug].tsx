import { PageProps } from "$fresh/server.ts";
import { Head as IHead } from "$fresh/runtime.ts";
import { projects } from "../../lib/projects.ts";
import Footer from "../../components/Footer.tsx";

export default function ProjectDetail(props: PageProps) {
  const { slug } = props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <IHead>
          <title>Project Not Found — jlcarveth.dev</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" content="light dark" />
          <link rel="stylesheet" href="/css/styles.css" />
        </IHead>
        <main>
          <div className="project-detail-not-found">
            <a href="/" className="project-detail-back">← Back</a>
            <p>Project not found.</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <IHead>
        <title>{project.name} — jlcarveth.dev</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="description" content={project.description} />
        <link rel="stylesheet" href="/css/styles.css" />
        <script defer src="/js/script.js" data-domain="jlcarveth.dev" />
      </IHead>
      <main>
        <article className="project-detail">
          <header className="project-detail-header">
            <a href="/#projects" className="project-detail-back">← Back</a>
            <div className="project-detail-meta">
              <span className="section-label">// project</span>
              <h1 className="project-detail-title">{project.name}</h1>
              <p className="project-detail-description">{project.description}</p>
              <div className="project-detail-actions">
                <a
                  href={project.url}
                  className="hero-link hero-link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project ↗
                </a>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {project.images && project.images.length > 0 && (
            <section className="project-detail-gallery">
              {project.images.map((src, i) => (
                <figure className="project-detail-figure" key={i}>
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="project-detail-image"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </section>
          )}
        </article>
        <Footer />
      </main>
    </>
  );
}
