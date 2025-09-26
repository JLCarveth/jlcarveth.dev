import Head from "../components/Head.tsx";
import Hero from "../components/Hero.tsx";
import Skills from "../islands/Skills.tsx";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
}
