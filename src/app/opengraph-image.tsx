import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 85% 10%, rgba(79,209,161,0.22), transparent 45%), #060807",
          color: "#e9eeeb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#9aa6a0" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#4fd1a1" }} />
          {`${site.role} · ${site.company}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#9aa6a0" }}>
            {`${site.headline.lead} ${site.headline.accent} ${site.headline.tail}`}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#4fd1a1" }}>
          Next.js · NestJS · Supabase · LangGraph
        </div>
      </div>
    ),
    size,
  );
}
