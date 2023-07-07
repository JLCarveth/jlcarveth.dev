import { Head as IHead } from "$fresh/runtime.ts";

export default function Head() {
  return (
    <IHead>
      <title>John Carveth</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      <link rel="stylesheet" href="/css/styles.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />
      <script defer src="/js/script.js" data-domain="jlcarveth.dev" />
    </IHead>
  );
}
