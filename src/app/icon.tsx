import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "#0E1518",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 2×2 window-pane grid — visual mark for a glass film company */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ display: "flex", gap: 2 }}>
          <div style={{ width: 10, height: 10, background: "#12A39A", borderRadius: 1 }} />
          <div style={{ width: 10, height: 10, background: "#0C7C75", borderRadius: 1 }} />
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          <div style={{ width: 10, height: 10, background: "#0C7C75", borderRadius: 1 }} />
          <div style={{ width: 10, height: 10, background: "#12A39A", borderRadius: 1 }} />
        </div>
      </div>
    </div>,
    { ...size },
  );
}
