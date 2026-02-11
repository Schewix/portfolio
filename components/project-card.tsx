import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TagBadge } from "@/components/tag-badge";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{formatDate(project.date)}</span>
        {project.featured && (
          <span className="rounded-full border border-accent/40 px-2 py-1 text-[10px] text-accent">
            Featured
          </span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">
          <Link href={project.url} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.summary}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </Card>
  );
}
