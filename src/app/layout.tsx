import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const krungthep = localFont({
  src: "../components/Krungthep.ttf",
  variable: "--font-krungthep",
});

export const metadata: Metadata = {
  title: "Studyverse Medicine",
  description: "Your gateway to medical education excellence for schools and premed organizations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} ${krungthep.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
