import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Singh Kothariya | Data Analyst & Business Analyst",
  description:
    "Portfolio of Himanshu Singh Kothariya — Data Analyst & Business Analyst. Turning raw data into business decisions with SQL, Python, Excel, and Power BI.",
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "Power BI",
    "SQL",
    "Python",
    "Product Analyst",
    "Himanshu Singh Kothariya",
  ],
  openGraph: {
    title: "Himanshu Singh Kothariya | Data Analyst & Business Analyst",
    description:
      "Turning raw data into business decisions with SQL, Python, Excel, and Power BI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LoadingScreen />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
