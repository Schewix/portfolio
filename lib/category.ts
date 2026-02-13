import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  KeyRound,
  Layers3,
  ShieldCheck,
  Wrench
} from "lucide-react";

export type ContentCategory =
  | "pki"
  | "observability"
  | "automation"
  | "platform"
  | "reliability"
  | "general";

export type CategoryMeta = {
  label: string;
  icon: LucideIcon;
  accentClass: string;
};

const categoryMap: Record<ContentCategory, CategoryMeta> = {
  pki: {
    label: "PKI",
    icon: KeyRound,
    accentClass: "from-cyan-400/30 via-cyan-300/10 to-transparent"
  },
  observability: {
    label: "Observability",
    icon: Activity,
    accentClass: "from-emerald-400/30 via-emerald-300/10 to-transparent"
  },
  automation: {
    label: "Automation",
    icon: Bot,
    accentClass: "from-sky-400/30 via-sky-300/10 to-transparent"
  },
  platform: {
    label: "Platform",
    icon: Layers3,
    accentClass: "from-indigo-400/30 via-indigo-300/10 to-transparent"
  },
  reliability: {
    label: "Reliability",
    icon: ShieldCheck,
    accentClass: "from-teal-400/30 via-teal-300/10 to-transparent"
  },
  general: {
    label: "General",
    icon: Wrench,
    accentClass: "from-accent/30 via-accent/10 to-transparent"
  }
};

const normalizedCategory = (tag: string): ContentCategory => {
  const value = tag.toLowerCase();

  if (value.includes("pki") || value.includes("cert") || value.includes("security")) {
    return "pki";
  }

  if (value.includes("observability") || value.includes("otel") || value.includes("monitor")) {
    return "observability";
  }

  if (value.includes("automation") || value.includes("ansible") || value.includes("gitops")) {
    return "automation";
  }

  if (value.includes("platform") || value.includes("kubernetes")) {
    return "platform";
  }

  if (value.includes("reliability") || value.includes("incident") || value.includes("sre")) {
    return "reliability";
  }

  return "general";
};

export const getCategoryMeta = (tags: string[]) => {
  const primaryTag = tags[0];
  if (!primaryTag) return categoryMap.general;
  return categoryMap[normalizedCategory(primaryTag)];
};
