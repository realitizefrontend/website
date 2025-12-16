import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";

import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Realitize - Enterprise AI Solutions | Custom AI, Automation & Secure Deployment",
  description:
    "Realitize builds secure, enterprise-grade AI systems and workflow automation solutions. You keep full data and model ownership while we design, develop and deploy custom AI aligned to your operations.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} bg-white font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-white`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
