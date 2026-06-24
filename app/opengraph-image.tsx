import { ImageResponse } from "next/og";

export const alt = "Serving Our Justice (SOJ) — Student-Led Advocacy Initiative";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1220",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            backgroundColor: "rgba(117,49,103,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            backgroundColor: "rgba(47,67,112,0.14)",
          }}
        />

        {/* Badge circle */}
        <div
          style={{
            width: 108,
            height: 108,
            borderRadius: "50%",
            backgroundColor: "#753167",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "9px",
              fontFamily: "sans-serif",
              paddingLeft: "9px",
            }}
          >
            SOJ
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "white",
            fontFamily: "sans-serif",
            textAlign: "center",
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          Serving Our Justice
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.45)",
            fontFamily: "sans-serif",
            textAlign: "center",
            maxWidth: 720,
          }}
        >
          Student-led advocacy and resource-sharing initiative
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div style={{ width: 40, height: 2, backgroundColor: "#753167" }} />
          <span
            style={{
              color: "rgba(255,255,255,0.22)",
              fontSize: 18,
              fontFamily: "sans-serif",
            }}
          >
            soj-website-two.vercel.app
          </span>
          <div style={{ width: 40, height: 2, backgroundColor: "#753167" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
