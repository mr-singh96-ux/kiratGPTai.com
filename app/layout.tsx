import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KiratGPT AI",
  description: "Generate high-quality content effortlessly with AI",
  openGraph: {
    title: "AI Content Generator",
    description: "Generate high-quality content effortlessly with AI",
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generator",
    description: "Generate high-quality content effortlessly with AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Ensure that metadata.title is always a string */}
          <title>{"KiratGPT AI"}</title>
        </head>
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
