import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: "#0E1518",
        display: "flex",
        position: "relative",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Top gradient strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #12A39A 0%, #0C7C75 100%)",
          display: "flex",
        }}
      />

      {/* Right accent bar */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 6,
          height: 630,
          background: "#12A39A",
          display: "flex",
        }}
      />

      {/* Left content column — 730px */}
      <div
        style={{
          width: 730,
          height: 630,
          display: "flex",
          flexDirection: "column",
          padding: "72px 56px 72px 80px",
          flexShrink: 0,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: "#12A39A",
              borderRadius: 4,
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "#12A39A",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Andheri West, Mumbai · Est. {site.founded}
          </span>
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#F3F6F6",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          {site.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#5C6F72",
            lineHeight: 1.55,
            maxWidth: 560,
          }}
        >
          {site.tagline}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Service chips */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          {[
            "Sun Control",
            "Frosted Glass",
            "One-Way Privacy",
            "Safety Film",
            "UV Protection",
            "Decorative",
          ].map((s) => (
            <div
              key={s}
              style={{
                padding: "5px 13px",
                border: "1px solid rgba(18, 163, 154, 0.28)",
                borderRadius: 100,
                fontSize: 12,
                color: "#8A9B9D",
                display: "flex",
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(227, 234, 234, 0.1)",
            paddingTop: 22,
          }}
        >
          <div style={{ fontSize: 15, color: "#E8A33D", display: "flex" }}>
            {site.rating.value} · {site.rating.count} Google Reviews
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#5C6F72",
              letterSpacing: "0.06em",
              fontFamily: "monospace",
            }}
          >
            elegantglassfilms.in
          </div>
        </div>
      </div>

      {/* Right artwork column — 470px, position: relative for child absolutes */}
      <div
        style={{
          flex: 1,
          height: 630,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/*
          Glass panel art: three stacked 248×320 panes, each offset 12px.
          Right column is ~470px wide, 630px tall.
          Center: 235, 315. Front panel top-left: 111, 155.
        */}

        {/* Back panel — offset 24px up-left */}
        <div
          style={{
            position: "absolute",
            top: 131,
            left: 87,
            width: 248,
            height: 320,
            border: "1px solid rgba(18, 163, 154, 0.1)",
            borderRadius: 8,
            display: "flex",
          }}
        />

        {/* Mid panel — offset 12px up-left */}
        <div
          style={{
            position: "absolute",
            top: 143,
            left: 99,
            width: 248,
            height: 320,
            border: "1px solid rgba(18, 163, 154, 0.22)",
            borderRadius: 8,
            display: "flex",
          }}
        />

        {/* Front glass pane with 4-quadrant window grid */}
        <div
          style={{
            position: "absolute",
            top: 155,
            left: 111,
            width: 248,
            height: 320,
            border: "2px solid rgba(18, 163, 154, 0.48)",
            borderRadius: 8,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top half */}
          <div
            style={{
              width: 248,
              height: 160,
              borderBottom: "1.5px solid rgba(18, 163, 154, 0.28)",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 123,
                height: 160,
                background: "rgba(18, 163, 154, 0.07)",
                borderRight: "1.5px solid rgba(18, 163, 154, 0.28)",
                display: "flex",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 160,
                background: "rgba(18, 163, 154, 0.03)",
                display: "flex",
              }}
            />
          </div>

          {/* Bottom half */}
          <div style={{ width: 248, flex: 1, display: "flex" }}>
            <div
              style={{
                width: 123,
                flex: 1,
                background: "rgba(18, 163, 154, 0.03)",
                borderRight: "1.5px solid rgba(18, 163, 154, 0.28)",
                display: "flex",
              }}
            />
            <div
              style={{
                flex: 1,
                background: "rgba(18, 163, 154, 0.07)",
                display: "flex",
              }}
            />
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
