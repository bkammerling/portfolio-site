import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: "Ben Kammerling - Frontend Developer & Marketing Specialist",
  description: "Frontend Developer, Marketeer, Designer, and creative problem-solver based in London. Building digital experiences that grow businesses.",
  keywords: ["frontend developer", "react developer", "marketing", "ui/ux designer", "london"],
  authors: [{ name: "Ben Kammerling" }],
  creator: "Ben Kammerling",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://benkammerling.com",
    title: "Ben Kammerling - Frontend Developer & Marketing Specialist",
    description: "Frontend Developer, Marketeer, Designer, and creative problem-solver based in London.",
    siteName: "Ben Kammerling Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Kammerling - Frontend Developer & Marketing Specialist",
    description: "Frontend Developer, Marketeer, Designer, and creative problem-solver based in London.",
    creator: "@benkammerling",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
