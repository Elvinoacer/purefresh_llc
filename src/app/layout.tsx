import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://purefresh-llc.vercel.app"),
  title: "Purefresh Premium Drinking Water | Nakuru • Maili Sita",
  description:
    "Purefresh Premium Drinking Water — KEBS-certified, WHO-compliant purified water in Nakuru, Kenya. Affordable refills, advanced reverse osmosis, and over 150 vending outlets serving low- and middle-income households across the Rift Valley.",
  keywords: [
    "Purefresh",
    "Purefresh Nakuru",
    "Purefresh Maili Sita",
    "premium drinking water Kenya",
    "water refill Nakuru",
    "reverse osmosis Kenya",
    "KEBS certified water",
    "affordable water Kenya",
    "fluoride-free water",
    "water vending Kenya",
  ],
  authors: [{ name: "Purefresh Kenya" }],
  creator: "Purefresh Kenya",
  publisher: "Purefresh Kenya",
  icons: {
    icon: "/purefresh-mark.svg",
    apple: "/purefresh-mark.svg",
  },
  openGraph: {
    title: "Purefresh Premium Drinking Water | Nakuru",
    description:
      "KEBS-certified, WHO-compliant purified water. Affordable refills, advanced reverse osmosis. Serving Nakuru, Naivasha, Nairobi, Kajiado, Machakos & Kiambu.",
    url: "https://purefresh-llc.vercel.app",
    siteName: "Purefresh Premium Drinking Water",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/pure_fresh.webp",
        width: 1200,
        height: 630,
        alt: "Purefresh Premium Drinking Water — Nakuru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purefresh Premium Drinking Water | Nakuru",
    description:
      "KEBS-certified, WHO-compliant purified water. Affordable refills, advanced reverse osmosis across Kenya.",
    images: ["/pure_fresh.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
