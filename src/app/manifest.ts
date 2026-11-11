import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jezreel de Andrade — Portfólio",
    short_name: "Jezreel",
    description: "Portfólio profissional de desenvolvimento de software.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1ede5",
    theme_color: "#f1ede5",
    lang: "pt-BR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
