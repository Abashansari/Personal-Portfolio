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
  metadataBase: new URL("https://abashansari.vercel.app"),

  title: {
    default: "Abash Ansari | Full-Stack Developer | Portfolio",
    template: "%s | Abash Ansari",
  },

  description:
    "Abash Ansari is a Full-Stack Developer building modern web, mobile, desktop, AI, and machine learning applications.",

  authors: [
    {
      name: "Abash Ansari",
      url: "https://abashansari.vercel.app",
    },
  ],

  creator: "Abash Ansari",
  publisher: "Abash Ansari",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Abash Ansari | Full-Stack Developer | Portfolio",
    description:
      "Abash Ansari is a Full-Stack Developer building modern web, mobile, desktop, AI, and machine learning applications.",
    url: "https://abashansari.vercel.app",
    siteName: "Abash Ansari",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abash Ansari | Full-Stack Developer | Portfolio",
    description:
      "Abash Ansari is a Full-Stack Developer building modern web, mobile, desktop, AI, and machine learning applications.",
  },
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