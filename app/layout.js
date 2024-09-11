// ? Components
import AOSInit from "@/components/AOS/AOSInit";

//  ? Fonts
import { EB_Garamond } from "next/font/google";

// ? Stylesheet
import "./globals.css";

const garamond = EB_Garamond({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-architects-daughter",
});

export const metadata = {
  title: "Akande Olalekan Toheeb",
  description: "Akande Olalekan Toheeb's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={garamond.className}>{children}</body>
    </html>
  );
}
