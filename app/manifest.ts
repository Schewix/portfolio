import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ondřej Ševčík",
    short_name: "OŠ",
    description: "SRE / DevOps / Automation portfolio and notes.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d14",
    theme_color: "#0b0d14",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png"
      }
    ]
  };
}
