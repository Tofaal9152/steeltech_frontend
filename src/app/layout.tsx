import AppProviders from "@/providers/app-providers";
import type { Metadata } from "next";
// add poppins font
import { Geist, Geist_Mono, Michroma, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Steeltech Industries Ltd.",
  description:
    "Steeltech Industries Ltd. is a leading manufacturer and supplier of high-quality steel pipes, tubes, and fittings, serving a wide range of industries with durable and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} ${michroma.variable}  antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
