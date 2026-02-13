import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { TagBadge } from "@/components/tag-badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering mindset, experience timeline, and toolbox of Ondřej Ševčík.",
  openGraph: {
    title: "About",
    description:
      "Engineering mindset, experience timeline, and toolbox of Ondřej Ševčík.",
    url: `${siteConfig.url}/about`
  }
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="max-w-3xl text-muted-foreground">{siteConfig.copy.aboutIntro}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/80 bg-card/70">
          <h2 className="text-lg font-semibold">Engineering mindset</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            I bias towards composable systems, clear runbooks, and feedback loops
            that keep operational decisions visible. Mentoring and knowledge
            sharing are part of the engineering process, not side tasks.
          </p>
        </Card>
        <Card className="border-border/80 bg-card/70">
          <h2 className="text-lg font-semibold">Currently</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.company} in {siteConfig.location}. Current focus is
            reliability architecture, observability, and PKI automation workflows.
          </p>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <div className="relative space-y-8 pl-8 before:absolute before:bottom-0 before:left-2 before:top-2 before:w-px before:bg-border">
          {siteConfig.timeline.map((item) => (
            <article key={`${item.role}-${item.period}`} className="relative">
              <span className="absolute -left-[29px] top-2 h-4 w-4 rounded-full border border-accent/70 bg-background" />
              <Card className="border-border/80 bg-card/70">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.role} · {item.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {item.impact.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Toolbox</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {siteConfig.toolbox.map((group) => (
            <Card key={group.group} className="border-border/80 bg-card/70">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {group.group}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((tool) => (
                  <TagBadge key={`${group.group}-${tool}`} label={tool} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Community & Volunteering</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {siteConfig.community.map((item) => (
            <Card key={item.title} className="border-border/80 bg-card/70">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {item.impact.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
