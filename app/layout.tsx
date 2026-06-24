import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serving Our Justice (SOJ)",
  description:
    "SOJ is a student-led nonprofit initiative dedicated to raising awareness, sharing resources, and supporting women affected by domestic abuse through education, outreach, and community advocacy.",
  keywords: [
    "domestic abuse awareness",
    "student nonprofit",
    "women support",
    "community outreach",
    "advocacy",
    "SOJ",
    "Serving Our Justice",
  ],
  openGraph: {
    title: "Serving Our Justice (SOJ)",
    description:
      "A student-led initiative supporting women affected by domestic abuse through awareness, education, and community advocacy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
