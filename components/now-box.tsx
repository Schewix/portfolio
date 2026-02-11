import { Card } from "@/components/ui/card";

export function NowBox() {
  return (
    <Card className="border-dashed border-border/60">
      <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Now
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Building internal reliability tooling, mentoring junior engineers, and
        experimenting with PKI automation workflows. (Placeholder)
      </p>
    </Card>
  );
}
