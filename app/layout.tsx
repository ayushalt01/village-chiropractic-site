import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
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

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: "Pain Atlanta | Chiropractor in Stone Mountain, GA",
    template: "%s | Pain Atlanta",
  },
  description:
    "Pain Atlanta - Serving the Stone Mountain area for 27 years. Multidisciplinary chiropractic care for auto injuries, sports injuries, brain injury, joint repair, impairment ratings, and chronic pain with same-day appointments available.",
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
  authors: [{ name: "Pain Atlanta" }],
  creator: "Pain Atlanta",
  metadataBase: new URL("https://www.painatlanta.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.painatlanta.com",
    siteName: "Pain Atlanta",
    title: "Pain Atlanta | Chiropractor in Stone Mountain, GA",
    description:
      "Serving Stone Mountain, GA for 27 years. Expert chiropractic care for auto injuries, sports injuries, brain injury, joint repair, impairment ratings, and chronic pain.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pain Atlanta | Chiropractor in Stone Mountain, GA",
    description:
      "Serving Stone Mountain, GA for 27 years. Expert chiropractic care for auto injuries, sports injuries, brain injury, joint repair, impairment ratings, and chronic pain.",
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(googleVerification && {
    verification: {
      google: googleVerification,
    },
  }),
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

