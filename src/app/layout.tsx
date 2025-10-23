import type { Metadata } from "next";
import { Oswald, Lexend_Zetta } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
});

const lexendZetta = Lexend_Zetta({
  variable: "--font-lexend-zetta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVRO - EVOLUTIONARY RESONATING ORGANISM",
  description: "An open-source protocol that maintains synthetic value units through fully decentralized smart-contract mechanics. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${lexendZetta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
