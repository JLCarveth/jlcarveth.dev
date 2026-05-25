export interface Project {
  slug: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "pastebin",
    name: "Pastebin",
    url: "https://paste.jlcarveth.dev",
    description:
      "A self-hosted paste service for sharing code snippets and text. Minimal, fast, and accessible without an account.",
    tags: ["Deno", "TypeScript", "PostgreSQL"],
    images: ["/img/deployment.webp"],
  },
  {
    slug: "notes",
    name: "Notes",
    url: "https://notes.jlcarveth.dev",
    description:
      "Personal markdown-based notes application. Lightweight and private — built for quick capture and retrieval.",
    tags: ["Deno", "Fresh", "Preact"],
    images: ["/img/web-design.webp"],
  },
  {
    slug: "portfolio",
    name: "jlcarveth.dev",
    url: "https://jlcarveth.dev",
    description:
      "This portfolio site. Built with Deno and Fresh for server-side rendering and minimal client-side overhead.",
    tags: ["Deno", "Fresh", "Preact", "TypeScript"],
    images: ["/img/bg.webp"],
  },
  {
    slug: "blog",
    name: "Blog",
    url: "https://blog.jlcarveth.dev",
    description:
      "Technical writing on software development, systems programming, and engineering decisions across the stack.",
    tags: ["Technical Writing"],
    images: ["/img/web-hosting.webp"],
  },
];
