import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools, software, and workflows used by Ondřej Ševčík.",
  openGraph: {
    title: "Uses",
    description: "Tools, software, and workflows used by Ondřej Ševčík.",
    url: `${siteConfig.url}/uses`
  }
};

export default function UsesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Uses</h1>
      <Card>
        <p className="text-sm text-muted-foreground">
          Placeholder for the gear, software, and workflows I use daily.
        </p>
      </Card>
    </div>
  );
}
