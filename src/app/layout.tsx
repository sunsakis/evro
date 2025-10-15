import type { Metadata } from "next";
import { Oswald, Lexend_Zetta } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const lexendZetta = Lexend_Zetta({
  variable: "--font-lexend-zetta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVRO - Open Euro Finance",
  description: "The trusted foundation of open euro finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} ${lexendZetta.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
