import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";
import CursorEffect from "@/components/CursorEffect";
import { yearsOfExperience } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Ganesh MB | Full Stack Developer",
  description: `Portfolio of Ganesh MB — Full Stack Developer specializing in React, Next.js, Node.js, and Blockchain technologies with ${yearsOfExperience} years of experience.`,
  keywords: [
    "Ganesh MB",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MERN Stack",
    "Blockchain",
    "Portfolio",
  ],
  authors: [{ name: "Ganesh MB" }],
  openGraph: {
    title: "Ganesh MB | Full Stack Developer",
    description:
      "Portfolio of Ganesh MB — Full Stack Developer specializing in React, Next.js, Node.js, and Blockchain technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary transition-colors duration-300">
        <ThemeProvider>
          <CursorEffect />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
