import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

/* Body / UI — clean, neutral, highly legible */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Display — a warm, soft-edged serif. Adds editorial warmth and a
   premium, hand-crafted feel without ever reading as "childish". */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soj-website-two.vercel.app"),
  title: "Serving Our Justice (SOJ) — Student-Led Advocacy & Awareness",
  description:
    "SOJ is a student-led advocacy and resource-sharing initiative dedicated to raising awareness, sharing resources, and advocating for women affected by domestic abuse through education, outreach, and community action.",
  keywords: [
    "domestic abuse awareness",
    "student advocacy initiative",
    "women support",
    "community outreach",
    "advocacy",
    "SOJ",
    "Serving Our Justice",
    "domestic violence resources",
    "student advocacy",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Serving Our Justice (SOJ)",
    description:
      "A student-led initiative supporting women affected by domestic abuse through awareness, education, resource-sharing, and community advocacy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serving Our Justice (SOJ)",
    description:
      "Student-led advocacy for awareness, resources, and support for women affected by domestic abuse.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased bg-canvas text-ink">
        {/* No-JS / pre-hydration safety net: scroll-reveal wrappers default to
            opacity:0 for the animation. If JavaScript never runs, force them
            visible so all content is still readable. */}
        <noscript>
          <style>{`.motion-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        {/* Shared logo gradient — defined once, referenced by every emblem */}
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          focusable="false"
          style={{ position: "absolute" }}
        >
          <defs>
            <linearGradient id="soj-emblem-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8e3f7e" />
              <stop offset="100%" stopColor="#5d2550" />
            </linearGradient>
          </defs>
        </svg>

        {children}
      </body>
    </html>
  );
}
