export default function Hero() {
  return (
    <div className="hero-section">
      <nav className="hero-nav">
        <span className="hero-nav-logo">jlcarveth.dev</span>
        <div className="hero-nav-links">
          <a href="https://github.com/jlcarveth" className="hero-nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://blog.jlcarveth.dev" className="hero-nav-link" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
      </nav>

      <div className="hero-content">
        <span className="hero-label">&lt; software developer /&gt;</span>
        <h1 className="hero-title">
          John<br />Carveth<span className="hero-cursor" />
        </h1>
        <p className="hero-description">
          Software developer & IT specialist based in Toronto, Ontario.
          I build robust systems, clean interfaces, and love working across the
          full stack — from embedded hardware to web applications.
        </p>
        <div className="hero-links">
          <a href="https://paste.jlcarveth.dev" className="hero-link hero-link-primary" target="_blank" rel="noopener noreferrer">
            Pastebin ↗
          </a>
          <a href="https://notes.jlcarveth.dev" className="hero-link hero-link-secondary" target="_blank" rel="noopener noreferrer">
            Notes ↗
          </a>
        </div>
      </div>

      <div className="hero-accent-bar" />
    </div>
  );
}
