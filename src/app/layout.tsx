import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abash Ansari | Full-Stack Developer",
  description: "Abash Ansari — Full-Stack Developer building web, mobile, desktop, AI, and machine learning applications.",
  openGraph: {
    title: "Abash Ansari | Full-Stack Developer",
    description: "Abash Ansari — Full-Stack Developer building web, mobile, desktop, AI, and machine learning applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abash Ansari | Full-Stack Developer",
    description: "Abash Ansari — Full-Stack Developer building web, mobile, desktop, AI, and machine learning applications.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-primary text-text-primary antialiased min-h-screen flex flex-col font-sans selection:bg-accent-teal selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
