import Link from "next/link";
import {
  Building2,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  UserRound
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { NoteCard } from "@/components/note-card";
import { NowBox } from "@/components/now-box";
import { getFeaturedProjects, getLatestNotes } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const latestNotes = getLatestNotes(3);
  const latestFeatured = featuredProjects[0];

  return (
    <div className="space-y-20">
      <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {siteConfig.company} · {siteConfig.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-muted-foreground">{siteConfig.copy.homeIntro}</p>
          <p className="text-sm text-accent">{siteConfig.signatureLine}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/notes">Read Notes</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-border/80 bg-card/70">
            <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Snapshot
            </div>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2">
                  <UserRound className="h-4 w-4" /> Role
                </span>
                <span className="text-right text-foreground">{siteConfig.role}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> Currently
                </span>
                <span className="text-right text-foreground">{siteConfig.currentRole}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Location
                </span>
                <span className="text-right text-foreground">{siteConfig.location}</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
              <Button asChild variant="secondary" className="h-8 px-2">
                <a href={`mailto:${siteConfig.links.email}`}>
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </Button>
              <Button asChild variant="secondary" className="h-8 px-2">
                <Link href={siteConfig.links.linkedin}>
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="secondary" className="h-8 px-2">
                <Link href={siteConfig.links.github}>
                  <Github className="h-3.5 w-3.5" /> GitHub
                </Link>
              </Button>
            </div>

            {siteConfig.links.cvUrl ? (
              <Button asChild variant="ghost" className="mt-3 w-full">
                <Link href={siteConfig.links.cvUrl}>
                  <FileDown className="h-4 w-4" /> Open CV
                </Link>
              </Button>
            ) : null}
          </Card>

          <NowBox
            recently={
              latestFeatured
                ? `${latestFeatured.title} (${latestFeatured.tags[0] || "project"})`
                : undefined
            }
          />
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">What I do</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.whatIDo.map((item) => (
            <Card key={item.title} className="border-border/80 bg-card/70">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest notes</h2>
          <Link
            href="/notes"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Read all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
    </div>
  );
}
