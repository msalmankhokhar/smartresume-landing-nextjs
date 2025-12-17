import type { Metadata } from "next";
import { Geist as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700', '800' ]
})

export const metadata: Metadata = {
  title: "SmartResume - AI-Powered Recruitment Platform",
  description: "Transform your hiring process with SmartResume's AI-powered resume analysis, intelligent candidate matching, and automated screening. Hire better, faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
