import Link from "next/link";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { TagBadge } from "@/components/tag-badge";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

export const generateStaticParams = async () =>
  getAllProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary
  };
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <article className="space-y-8">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Project · {formatDate(project.date)} · {project.readingTime} min read
          </p>
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
        </header>
        <div className="prose prose-neutral dark:prose-invert">
          <Mdx source={project.content} />
        </div>
      </article>

      <aside className="space-y-6">
        <Card>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Project meta
          </h2>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center justify-between">
              <span>Year</span>
              <span className="text-foreground">{new Date(project.date).getFullYear()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Focus</span>
              <span className="text-foreground">{project.tags[0]}</span>
            </div>
            {project.repoUrl && (
              <div className="flex items-center justify-between">
                <span>Repo</span>
                <Link href={project.repoUrl} className="text-accent">
                  Open
                </Link>
              </div>
            )}
            {project.liveUrl && (
              <div className="flex items-center justify-between">
                <span>Live</span>
                <Link href={project.liveUrl} className="text-accent">
                  Visit
                </Link>
              </div>
            )}
          </div>
        </Card>

        {project.toc?.length ? (
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contents
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {project.toc.map((item: { value: string; url: string; depth: number }) => (
                <li key={item.url} className={item.depth === 3 ? "pl-3" : ""}>
                  <a href={item.url} className="text-muted-foreground hover:text-foreground">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
      </aside>
    </div>
  );
}
