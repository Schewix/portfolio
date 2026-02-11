const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  email: process.env.NEXT_PUBLIC_EMAIL,
  github: process.env.NEXT_PUBLIC_GITHUB_URL,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL
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
  company: "Currently: SRE @ Red Hat",
  location: "Brno",
  education: "Ostravská univerzita",
  email: env.email || "hello@example.com",
  linkedin: env.linkedin || "https://www.linkedin.com/in/osevcik11",
  github: env.github || "https://github.com/USERNAME"
};
