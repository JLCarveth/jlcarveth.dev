import Head from "../components/Head.tsx";
import Hero from "../components/Hero.tsx";
import Projects from "../components/Projects.tsx";
import Skills from "../islands/Skills.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
