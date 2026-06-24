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
      <body className="antialiased bg-canvas text-ink">{children}</body>
    </html>
  );
}
