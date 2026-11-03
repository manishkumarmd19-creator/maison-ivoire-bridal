import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maisonivoire.in"),
  title: {
    default: "Maison Ivoire — Bridal Atelier, New Delhi",
    template: "%s | Maison Ivoire",
  },
  description:
    "Quietly extraordinary wedding gowns, hand-finished in New Delhi. Made to measure for the bride you are becoming. Private appointments by request.",
  keywords: [
    "bridal atelier",
    "wedding dress New Delhi",
    "made to measure bridal gown",
    "luxury bridal couture",
    "bespoke wedding dress India",
  ],
  authors: [{ name: "Maison Ivoire" }],
  creator: "Maison Ivoire",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Maison Ivoire",
    title: "Maison Ivoire — Bridal Atelier, New Delhi",
    description:
      "Quietly extraordinary wedding gowns, hand-finished in New Delhi. Private appointments by request.",
    images: [
      {
        url: "/images/bride-candidate-1.jpg",
        width: 1600,
        height: 2000,
        alt: "A bride in an ivory satin gown framed by cream drapery.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Ivoire — Bridal Atelier, New Delhi",
    description:
      "Quietly extraordinary wedding gowns, hand-finished in New Delhi. Private appointments by request.",
    images: ["/images/bride-candidate-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
