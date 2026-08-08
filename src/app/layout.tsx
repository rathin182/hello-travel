import type { Metadata } from "next";
import { Cinzel, Syne, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VOYAGE MONOCHROME // Cinematographic Luxury Travel & Expeditions",
  description: "High-fashion cinematographic travel showcase featuring curated global expeditions, vintage European aesthetic, and 3D immersive navigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${syne.variable} ${inter.variable} bg-black text-white antialiased`}>
      <body className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans bg-grain overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
