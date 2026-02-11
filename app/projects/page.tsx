import Link from "next/link";
import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectTags } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected reliability, automation, and security-adjacent projects by Ondřej Ševčík.",
  openGraph: {
    title: "Projects",
    description:
      "Selected reliability, automation, and security-adjacent projects by Ondřej Ševčík.",
    url: `${siteConfig.url}/projects`
  }
};

export default function ProjectsPage({
  searchParams
}: {
  searchParams: { tag?: string };
}) {
  const projects = getAllProjects();
  const tags = getProjectTags();
  const activeTag = typeof searchParams.tag === "string" ? searchParams.tag : "";
  const filteredProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-muted-foreground">
          A selection of reliability, automation, and security-adjacent projects.
          Filter by focus area below.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          asChild
          variant={activeTag ? "secondary" : "primary"}
          className="text-xs"
        >
          <Link href="/projects">All</Link>
        </Button>
        {tags.map((tag) => (
          <Button
            key={tag}
            asChild
            variant={activeTag === tag ? "primary" : "secondary"}
            className="text-xs"
          >
            <Link href={`/projects?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
