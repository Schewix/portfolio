"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export function AnalyticsProvider() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS;

  if (provider === "vercel") {
    return <Analytics />;
  }

  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    if (!domain) return null;
    return (
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
      />
    );
  }

  return null;
}
