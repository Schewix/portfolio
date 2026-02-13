import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/copy-email";
import { QuickMessageForm } from "@/components/quick-message-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ondřej Ševčík for collaboration or speaking.",
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with Ondřej Ševčík for collaboration or speaking.",
    url: `${siteConfig.url}/contact`
  }
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-muted-foreground">{siteConfig.copy.contactIntro}</p>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/80 bg-card/70">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold">
            <Mail className="h-4 w-4 text-accent" /> Email
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{siteConfig.links.email}</p>
          <div className="mt-4 flex items-center gap-2">
            <Button asChild variant="secondary">
              <a href={`mailto:${siteConfig.links.email}`}>Send email</a>
            </Button>
            <CopyEmail email={siteConfig.links.email} />
          </div>
        </Card>

        <Card className="border-border/80 bg-card/70">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold">
            <Linkedin className="h-4 w-4 text-accent" /> LinkedIn
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">/in/osevcik11</p>
          <Button asChild variant="secondary" className="mt-4">
            <Link href={siteConfig.links.linkedin}>
              Open profile <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </Card>

        <Card className="border-border/80 bg-card/70">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold">
            <Github className="h-4 w-4 text-accent" /> GitHub
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{siteConfig.links.github}</p>
          <Button asChild variant="secondary" className="mt-4">
            <Link href={siteConfig.links.github}>
              Open GitHub <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick message</h2>
        <Card className="border-border/80 bg-card/70">
          <QuickMessageForm
            email={siteConfig.links.email}
            linkedin={siteConfig.links.linkedin}
          />
        </Card>
      </section>
    </div>
  );
}
