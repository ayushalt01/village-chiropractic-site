import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: "Village Chiropractic | Chiropractor in Stone Mountain, GA",
    template: "%s | Village Chiropractic",
  },
  description:
    "Village Chiropractic - Serving Stone Mountain, GA for 27 years. Expert chiropractic care for auto injuries, sports injuries, brain injury, joint repair, and chronic pain. Our goal is to prevent acute pain from becoming chronic pain.",
  keywords: [
    "chiropractor",
    "Stone Mountain",
    "Georgia",
    "chiropractic care",
    "back pain",
    "neck pain",
    "auto injury",
    "sports injury",
    "wellness",
  ],
  authors: [{ name: "Village Chiropractic" }],
  creator: "Village Chiropractic",
  metadataBase: new URL("https://villagechiropractic.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://villagechiropractic.com",
    siteName: "Village Chiropractic",
    title: "Village Chiropractic | Chiropractor in Stone Mountain, GA",
    description:
      "Serving Stone Mountain, GA for 27 years. Expert chiropractic care for auto injuries, sports injuries, brain injury, joint repair, and chronic pain.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Village Chiropractic | Chiropractor in Stone Mountain, GA",
    description:
      "Serving Stone Mountain, GA for 27 years. Expert chiropractic care for auto injuries, sports injuries, brain injury, joint repair, and chronic pain.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}

