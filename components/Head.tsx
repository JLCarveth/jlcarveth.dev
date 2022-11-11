import { Head as IHead } from "$fresh/runtime.ts";

export default function Head() {
  return (
    <IHead>
      <title>🦕jlcarveth.dev🦕</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="/css/styles.css"/>
    </IHead>
  );
}
