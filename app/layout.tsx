import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    card: "summary",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
