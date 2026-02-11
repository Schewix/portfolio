import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { TagBadge } from "@/components/tag-badge";
import { siteConfig } from "@/lib/site";

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

const timeline = [
  {
    title: "SRE @ Red Hat",
    period: "2022 — Present",
    description:
      "Reliability engineering for core platform services. Focus on automation, observability, and incident response maturity."
  },
  {
    title: "DevOps Engineer",
    period: "2019 — 2022",
    description:
      "Built CI/CD pipelines, infrastructure-as-code workflows, and operational tooling for product teams."
  },
  {
    title: "Ostravská univerzita",
    period: "2015 — 2019",
    description:
      "Computer science foundations, systems engineering, and applied security."
  }
];

const toolbox = [
  "Linux",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Go",
  "Python",
  "GitHub Actions",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Vault",
  "PKI",
  "Next.js",
  "TypeScript"
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-muted-foreground">
          I approach infrastructure the same way I approach product work: make
          invisible complexity observable, remove friction, and empower people to
          ship safely. I like systems that are boring in production and elegant
          in design.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Engineering mindset</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            I bias towards small, composable systems, documented runbooks, and
            tight feedback loops. I enjoy mentoring and helping teams translate
            reliability goals into concrete automation.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Currently</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.company} · {siteConfig.location}. Working on reliability
            architecture, observability standards, and PKI automation.
          </p>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <div className="space-y-4">
          {timeline.map((item) => (
            <Card key={item.title}>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.period}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Toolbox</h2>
        <div className="flex flex-wrap gap-2">
          {toolbox.map((tool) => (
            <TagBadge key={tool} label={tool} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Community</h2>
        <Card>
          <p className="text-sm text-muted-foreground">
            Occasional mentoring, internal tech talks, and knowledge sharing.
            (Placeholder for future public talks or meetups.)
          </p>
        </Card>
      </section>
    </div>
  );
}
