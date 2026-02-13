import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#0b0d14",
          color: "#f8fafc"
        }}
      >
        <div
          style={{
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#84f1d0"
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 56, fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 24, color: "#cbd5f5" }}>{siteConfig.role}</div>
        <div style={{ fontSize: 20, color: "#84f1d0" }}>{siteConfig.location}</div>
      </div>
    ),
    size
  );
}
