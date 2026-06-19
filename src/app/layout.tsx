import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Window Film & Glass, Andheri West, Mumbai`,
    template: `%s · ${site.name}`,
  },
  description:
    "Sun control, frosted, safety, and one-way privacy window film in Mumbai. Rated 5.0 across 24 reviews. Based in Andheri West. Free site visit.",
  keywords: [
    "window film Mumbai",
    "sun control film",
    "frosted glass film",
    "glass and mirror shop Andheri",
    "window tinting Mumbai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Window Film & Glass, Mumbai`,
    description:
      "Sun control, frosted, safety, and one-way privacy window film. Rated 5.0 across 24 reviews in Andheri West, Mumbai.",
  },
  twitter: { card: "summary_large_image", title: site.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
