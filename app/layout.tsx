import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MakinaFleo — Unmanned Vehicles & IoT Technology",
  description:
    "İnsansız hava araçları, otonom kara robotları ve IoT çözümleri ile geleceğin teknolojisini inşa ediyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${orbitron.variable} ${inter.variable} font-inter bg-background text-foreground antialiased`}
      >
        <LanguageProvider>
          <div className="grid-bg" aria-hidden="true" />
          <div className="scan-overlay" aria-hidden="true" />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
