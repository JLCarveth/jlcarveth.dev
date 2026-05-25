import Head from "../components/Head.tsx";
import Hero from "../components/Hero.tsx";
import Projects from "../components/Projects.tsx";
import Skills from "../islands/Skills.tsx";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <footer className="site-footer">
          <span className="footer-copy">© 2026 <em>John Carveth</em></span>
          <div className="footer-links">
            <a href="https://github.com/jlcarveth" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://blog.jlcarveth.dev" className="footer-link" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href="https://paste.jlcarveth.dev" className="footer-link" target="_blank" rel="noopener noreferrer">Pastebin</a>
          </div>
        </footer>
      </main>
    </>
  );
}
