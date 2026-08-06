import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "supratik-kar-research.karsupratik86.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Dr. Supratik Kar | Computational Chemistry & Predictive Toxicology";
  const description = "Research, publications, open tools, funding, mentorship and scientific service from Dr. Supratik Kar and the CMM Laboratory at Kean University.";

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: origin,
      siteName: "Supratik Kar Research",
      title,
      description,
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Supratik Kar Research — Predictive chemistry. Responsible discovery." }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
