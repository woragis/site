import type { MetadataRoute } from "next";
import { publishedArticles, publishedProjects } from "@/content/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ["", "/projetos", "/artigos"].map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.7 : 1 }));
  return [
    ...pages,
    ...publishedProjects.map((project) => ({ url: `${siteUrl}/projetos/${project.slug}`, changeFrequency: "yearly" as const, priority: 0.8 })),
    ...publishedArticles.map((article) => ({ url: `${siteUrl}/artigos/${article.slug}`, lastModified: article.publishedAt, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
