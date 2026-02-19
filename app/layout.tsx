import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icasr.ae"),
  title: "ICASR | International Center for Applied Studies & Research",
  description:
    "Experience excellence at ICASR - International Center for Applied Studies & Research. A globally accredited institution offering online courses, HR solutions, marketing strategy, and education fairs.",
  keywords:
    "ICASR, International Center for Applied Studies & Research, UAE college, Dubai university, international education, online courses, HR solutions, marketing strategy, education fairs",
  icons: {
    icon: "/images/ICASR-ICON.svg",
    shortcut: "/images/ICASR-ICON.svg",
    apple: "/images/ICASR-ICON.svg",
  },
  openGraph: {
    title: "ICASR | International Center for Applied Studies & Research",
    description:
      "A globally accredited institution offering online courses, HR solutions, marketing strategy, and education fairs.",
    images: ["/images/ICASR-LOGO_01-01.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
