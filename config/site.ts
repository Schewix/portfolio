const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  email: process.env.NEXT_PUBLIC_EMAIL,
  github: process.env.NEXT_PUBLIC_GITHUB_URL,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  cvUrl: process.env.NEXT_PUBLIC_CV_URL,
  showUpcomingIdeas: process.env.NEXT_PUBLIC_SHOW_UPCOMING_IDEAS === "true"
};

export const siteConfig = {
  name: "Ondřej Ševčík",
  title: "Ondřej Ševčík — SRE / DevOps / Automation",
  description:
    "SRE/DevOps engineer focused on reliability, automation, and security-adjacent systems. Based in Brno.",
  url: env.siteUrl || "http://localhost:3000",
  locale: "cs-CZ",
  author: "Ondřej Ševčík",
  role: "SRE / DevOps / Automation / Security-adjacent",
  currentRole: "SRE @ Red Hat",
  company: "Currently: SRE @ Red Hat",
  location: "Brno",
  education: "Ostravská univerzita",
  signatureLine: "I like boring production systems and elegant tooling.",
  copy: {
    homeIntro:
      "SRE/DevOps engineer focused on automation, platform reliability, and security-adjacent systems. I build calm, observable infrastructure with pragmatic guardrails.",
    projectsIntro:
      "Reliability, automation, and security-adjacent work. The list keeps growing, and each project highlights impact over implementation trivia.",
    notesIntro:
      "Practical write-ups from SRE and platform engineering work. Low frequency, high signal.",
    aboutIntro:
      "I approach infrastructure the same way I approach product work: make invisible complexity observable, remove friction, and empower people to ship safely. I like systems that are boring in production and elegant in design.",
    contactIntro:
      "Want to collaborate or talk reliability? I usually reply within a couple of days."
  },
  whatIDo: [
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
  ],
  links: {
    email: env.email || "hello@example.com",
    linkedin: env.linkedin || "https://www.linkedin.com/in/osevcik11",
    github: env.github || "https://github.com/USERNAME",
    cvUrl: env.cvUrl || ""
  },
  now: {
    current: [
      "PKI automation",
      "Ansible tooling",
      "Observability guardrails"
    ],
    next: [] as string[]
  },
  notes: {
    cadence: "I publish ~2x/year. Notes are dense and practical.",
    recommendedStart: ["making-toil-visible", "pki-rotation-checklist"]
  },
  projects: {
    showUpcomingIdeas: env.showUpcomingIdeas,
    otherWork: [
      "Automated repetitive platform checks and reduced weekly ops overhead.",
      "Improved runbook consistency to speed up incident handovers across shifts.",
      "Helped teams adopt safer defaults for secrets and certificate handling.",
      "Built small internal tools that removed manual review bottlenecks.",
      "Standardized reliability metrics to make service health easier to compare."
    ],
    upcomingIdeas: [
      "Ops readiness scorecard for service teams",
      "Incident timeline helper for faster postmortems",
      "Cross-cluster certificate policy linter"
    ]
  },
  timeline: [
    {
      role: "SRE",
      company: "Red Hat",
      period: "2022 — Present",
      impact: [
        "Automation for recurring operational workflows",
        "Observability standards for service reliability",
        "Incident response maturity and runbook improvements"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Product teams",
      period: "2019 — 2022",
      impact: [
        "CI/CD and infrastructure-as-code foundations",
        "Platform guardrails for safer releases",
        "Delivery tooling focused on reducing operational toil"
      ]
    },
    {
      role: "Student",
      company: "Ostravská univerzita",
      period: "2015 — 2019",
      impact: [
        "Systems and networking fundamentals",
        "Early security and automation experimentation"
      ]
    }
  ],
  community: [
    {
      title: "Pionyr / SPTO events",
      summary:
        "Co-organization of youth events, camps, and competitions with a focus on reliable operations.",
      impact: [
        "Improved event logistics for multi-day programs",
        "Supported smoother registration and scoring workflows",
        "Consistent participant communication under tight timelines"
      ]
    },
    {
      title: "Scoring and portal tooling",
      summary:
        "Built and maintained lightweight tooling for event scoring and coordination.",
      impact: [
        "Stack: Next.js + Supabase with offline-first workflows",
        "Reduced manual score processing and reporting delays",
        "More stable UX for organizers and volunteers"
      ]
    }
  ],
  toolbox: [
    {
      group: "Infra",
      items: ["Linux", "Kubernetes", "Terraform", "Vault", "PKI"]
    },
    {
      group: "Observability",
      items: ["Prometheus", "Grafana", "OpenTelemetry", "Loki"]
    },
    {
      group: "Automation",
      items: ["Ansible", "GitHub Actions", "Python", "Go"]
    },
    {
      group: "Web",
      items: ["Next.js", "TypeScript", "Tailwind CSS"]
    }
  ]
};

export type SiteConfig = typeof siteConfig;
