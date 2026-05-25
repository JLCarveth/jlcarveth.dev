import { Head as IHead } from "$fresh/runtime.ts";

export default function Head() {
  return (
    <IHead>
      <title>John Carveth — Software Developer</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light dark" />
      <meta name="description" content="Software developer & IT specialist based in Toronto, Ontario. Full-stack, systems programming, and embedded development." />
      <link rel="stylesheet" href="/css/styles.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <script defer src="/js/script.js" data-domain="jlcarveth.dev" />
    </IHead>
  );
}
