import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEO from "@/components/Seo";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masjid Pemuda Indonesia",
  description: "Masjid Pemuda Indonesia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://masjid-pemuda-indonesia.vercel.app/",
    siteName: "Masjid Pemuda Indonesia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
