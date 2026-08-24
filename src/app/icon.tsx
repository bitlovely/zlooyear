import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0f10",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            color: "#3b5bdb",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          Z
        </div>
      </div>
    ),
    { ...size },
  );
}
