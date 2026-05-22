import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sandy Horne Photography | Australian Bird & Nature Photographer",
    template: "%s | Sandy Horne Photography",
  },
  description:
    "Sandy Horne is an Australian nature photographer specialising in birds, wildlife, and landscapes. Based in Australia.",
  metadataBase: new URL("https://sandyhornephoto.com.au"),
  openGraph: {
    title: "Sandy Horne Photography",
    description: "Australian Bird & Nature Photographer",
    url: "https://sandyhornephoto.com.au",
    siteName: "Sandy Horne Photography",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandy Horne Photography",
    description: "Australian Bird & Nature Photographer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
