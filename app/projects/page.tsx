import Link from "next/link";
import type { Metadata } from "next";
import { FolderOpen, Github, Mail, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getAllProjects,
  getProjectTags,
  getProjectsLastUpdated
} from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";

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
  const featuredCount = projects.filter((project) => project.featured).length;
  const activeTag = typeof searchParams.tag === "string" ? searchParams.tag : "";
  const filteredProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  const lastUpdated = getProjectsLastUpdated();
  const needsFiller = filteredProjects.length < 6;

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="max-w-2xl text-muted-foreground">{siteConfig.copy.projectsIntro}</p>
      </header>

      <div className="grid gap-8 md:grid-cols-[280px_minmax(0,1fr)] md:items-start">
        <aside className="space-y-4 md:sticky md:top-24">
          <Card className="space-y-4 border-border/80 bg-card/70">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Filters
              </h2>
              <a
                href="#all-tags"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                View all tags
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                asChild
                variant={activeTag ? "secondary" : "primary"}
                className="h-8 px-3 text-xs"
              >
                <Link href="/projects">All</Link>
              </Button>
              {tags.slice(0, 8).map((tag) => (
                <Button
                  key={tag}
                  asChild
                  variant={activeTag === tag ? "primary" : "secondary"}
                  className="h-8 px-3 text-xs"
                >
                  <Link href={`/projects?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/projects" className="hover:text-foreground">
                Clear filters
              </Link>
              <span>•</span>
              <span>{filteredProjects.length} visible</span>
            </div>
          </Card>

          <Card className="space-y-3 border-border/80 bg-card/70">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Stats
            </h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Total projects</span>
                <span className="font-medium text-foreground">{projects.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Featured</span>
                <span className="font-medium text-foreground">{featuredCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last updated</span>
                <span className="font-medium text-foreground">
                  {lastUpdated ? formatDate(lastUpdated) : "n/a"}
                </span>
              </div>
            </div>
          </Card>

          <Card className="space-y-4 border-border/80 bg-card/70">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Want to see more?
            </h2>
            <div className="flex flex-col gap-2">
              <Button asChild variant="secondary" className="justify-start">
                <Link href={siteConfig.links.github}>
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/contact">
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </Button>
            </div>
          </Card>
        </aside>

        <div className="space-y-8">
          {filteredProjects.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-border/70 bg-card/60 py-10 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-muted/40">
                <FolderOpen className="h-5 w-5 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold">No projects for this filter</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                This tag does not have a public write-up yet. Clear filters or
                explore currently featured projects.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <Button asChild variant="secondary">
                  <Link href="/projects">Clear filters</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/contact">Ask for details</Link>
                </Button>
              </div>
            </Card>
          )}

          {needsFiller ? (
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="border-border/80 bg-card/70">
                <h2 className="inline-flex items-center gap-2 text-lg font-semibold">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Other work (high-level)
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {siteConfig.projects.otherWork.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {siteConfig.projects.showUpcomingIdeas &&
              siteConfig.projects.upcomingIdeas.length ? (
                <Card className="border-border/80 bg-card/70">
                  <h2 className="text-lg font-semibold">Upcoming / Ideas</h2>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {siteConfig.projects.upcomingIdeas.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : null}
            </div>
          ) : null}

          <Card id="all-tags" className="border-border/80 bg-card/70">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                All tags
              </h2>
              <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground">
                Clear filters
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  asChild
                  variant={activeTag === tag ? "primary" : "secondary"}
                  className="h-8 px-3 text-xs"
                >
                  <Link href={`/projects?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
