import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/topnav";
import HomeFooter from "./ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FSE Cheat Sheet",
  description: "Quick reference guide for full stack engineer skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grid">
        <div className="itemNav"><TopNav /></div>
        <div className="itemMain">{children}</div>
        <div className="itemFooter"><HomeFooter /></div>
      </body>
    </html>
  );
}
