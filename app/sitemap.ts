import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllNotes, getAllProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = ["", "/projects", "/notes", "/about", "/contact", "/uses"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString()
    })
  );

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${baseUrl}${project.url}`,
    lastModified: new Date(project.date).toISOString()
  }));

  const noteRoutes = getAllNotes().map((note) => ({
    url: `${baseUrl}${note.url}`,
    lastModified: new Date(note.date).toISOString()
  }));

  return [...routes, ...projectRoutes, ...noteRoutes];
}
