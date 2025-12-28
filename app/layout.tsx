import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Trattoria Sacchi | 美食の芸術",
  description: "イタリアの伝統と革新が織りなす、五感の旅。",
  icons: {
    icon: "/sacchi.png",
    shortcut: "/sacchi.png",
    apple: "/sacchi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${lato.variable} antialiased bg-white text-stone-900 selection:bg-primary-red/20 selection:text-primary-red overflow-hidden`}
      >
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
