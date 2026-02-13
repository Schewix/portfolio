import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TagBadge } from "@/components/tag-badge";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/lib/content";
import { getCategoryMeta } from "@/lib/category";

export function ProjectCard({ project }: { project: Project }) {
  const category = getCategoryMeta(project.tags);
  const CategoryIcon = category.icon;

  return (
    <Card className="group relative flex h-full flex-col gap-4 overflow-hidden border-border/80 bg-card/70 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${category.accentClass}`} />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CategoryIcon className="h-3.5 w-3.5 text-accent" />
          {formatDate(project.date)}
        </span>
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
