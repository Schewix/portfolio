import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function NowBox({ recently }: { recently?: string }) {
  const nextItems = siteConfig.now.next.filter((item) => item.trim().length);

  return (
    <Card className="border-dashed border-border/60 bg-card/70">
      <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Now
      </div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
          <span>
            <span className="font-medium text-foreground">Now:</span>{" "}
            {siteConfig.now.current.join(", ")}
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
          <span>
            <span className="font-medium text-foreground">Recently:</span>{" "}
            {recently || "Recently shipped reliability-focused project work."}
          </span>
        </li>
        {nextItems.length ? (
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>
              <span className="font-medium text-foreground">Next:</span>{" "}
              {nextItems.join(", ")}
            </span>
          </li>
        ) : null}
      </ul>
    </Card>
  );
}
