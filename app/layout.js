// ? Components
import AOSInit from "@/components/AOS/AOSInit";
import Navigation from "@/components/Navigation/Navigation";
import Loader from "./Loader/Loader";

//  ? Fonts
import { EB_Garamond } from "next/font/google";

// ? Stylesheet
import "./globals.css";
import { Suspense } from "react";

const garamond = EB_Garamond({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-architects-daughter",
});

export const metadata = {
  title: "Akande Olalekan Toheeb",
  description: "Akande Olalekan Toheeb's Portfolio Website",
  applicationName: "Akande Olalekan Toheeb's Portfolio Website",
  referrer: "origin-when-cross-origin",
  keywords: ["Front-end Development", "Technical Writing", "Cloud Engineering"],
  authors: [{ name: "Akande Olalekan Toheeb" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "/favicon.ico",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <AOSInit />
        <Navigation />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}
