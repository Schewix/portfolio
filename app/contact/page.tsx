import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/copy-email";
import { siteConfig } from "@/lib/site";

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
        <p className="text-muted-foreground">
          Want to collaborate or talk reliability? Drop a note. I usually reply
          within a couple of days.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mt-2 text-sm text-muted-foreground">{siteConfig.email}</p>
          <div className="mt-4 flex items-center gap-2">
            <Button asChild variant="secondary">
              <a href={`mailto:${siteConfig.email}`}>Send email</a>
            </Button>
            <CopyEmail email={siteConfig.email} />
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">LinkedIn</h2>
          <p className="mt-2 text-sm text-muted-foreground">/in/osevcik11</p>
          <Button asChild variant="secondary" className="mt-4">
            <Link href={siteConfig.linkedin}>Open profile</Link>
          </Button>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">GitHub</h2>
          <p className="mt-2 text-sm text-muted-foreground">Placeholder</p>
          <Button asChild variant="secondary" className="mt-4">
            <Link href={siteConfig.github}>Open GitHub</Link>
          </Button>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick message</h2>
        <Card>
          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <Input name="subject" placeholder="Subject" />
            <textarea
              name="body"
              placeholder="Message"
              rows={5}
              className="w-full rounded-2xl border border-border/70 bg-card/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button type="submit">Open email client</Button>
          </form>
        </Card>
      </section>
    </div>
  );
}
