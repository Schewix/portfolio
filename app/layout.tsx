import "./globals.css";

import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { AnalyticsProvider } from "@/components/analytics";
import { siteConfig } from "@/lib/site";
import { getAllNotes, getAllProjects } from "@/lib/content";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — Ondřej Ševčík"
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  keywords: [
    "SRE",
    "DevOps",
    "Automation",
    "Security",
    "Platform Engineering",
    "Observability",
    "Brno",
    "Red Hat"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const paletteProjects = getAllProjects().map((project) => ({
    title: project.title,
    url: project.url,
    type: "Project" as const
  }));

  const paletteNotes = getAllNotes().map((note) => ({
    title: note.title,
    url: note.url,
    type: "Note" as const
  }));

  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={`${sora.variable} ${mono.variable} font-sans`}>
        <ThemeProvider>
          <div className="relative">
            <Navbar />
            <CommandPalette projects={paletteProjects} notes={paletteNotes} />
            <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-24">
              {children}
            </main>
            <Footer />
          </div>
          <AnalyticsProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
