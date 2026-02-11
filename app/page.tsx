import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { NoteCard } from "@/components/note-card";
import { NowBox } from "@/components/now-box";
import { getFeaturedProjects, getLatestNotes } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const latestNotes = getLatestNotes(3);

  return (
    <div className="space-y-20">
      <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            {siteConfig.company} · {siteConfig.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Ondřej Ševčík
          </h1>
          <p className="text-lg text-muted-foreground">
            SRE/DevOps engineer focused on automation, platform reliability, and
            security-adjacent systems. I build calm, observable infrastructure
            with pragmatic guardrails.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/notes">Read Notes</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Snapshot
            </div>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Role</span>
                <span className="text-foreground">{siteConfig.role}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Currently</span>
                <span className="text-foreground">SRE @ Red Hat</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Location</span>
                <span className="text-foreground">Brno</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Focus</span>
                <span className="text-foreground">Automation + PKI</span>
              </div>
            </div>
          </Card>
          <NowBox />
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">What I do</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Reliability",
              description:
                "Designing resilient systems, SLOs, and incident response playbooks that scale with teams."
            },
            {
              title: "Automation",
              description:
                "Reducing toil with self-service tooling, policy-as-code, and GitOps workflows."
            },
            {
              title: "Platform",
              description:
                "Building developer platforms that hide complexity and keep feedback loops fast."
            },
            {
              title: "Security / PKI",
              description:
                "Automating certificate lifecycles, secrets hygiene, and secure-by-default patterns."
            }
          ].map((item) => (
            <Card key={item.title}>
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
