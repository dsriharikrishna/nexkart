import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AnnouncementBar } from "@/components/navigation/AnnouncementBar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchModal } from "@/components/overlays/SearchModal";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXKART — Fast Fashion Quick Commerce",
  description:
    "Shop stylish clothes, jackets, shirts, dresses, and shoes delivered to your door in 45-60 minutes.",
  keywords: [
    "fashion",
    "quick commerce",
    "online shopping",
    "shirts",
    "dresses",
    "jackets",
    "shoes",
    "fast delivery",
  ],
  openGraph: {
    title: "NEXKART — Fast Fashion Quick Commerce",
    description:
      "Find clothes for every day. Fast delivery to your doorstep in minutes.",
    type: "website",
    locale: "en_IN",
  },
};

import { MobileBottomBar } from "@/components/navigation/MobileBottomBar";
import { ToastContainer } from "@/components/ui/ToastContainer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-[#171717] antialiased pb-16 lg:pb-0">
        <Providers>
          <AnnouncementBar />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <MobileBottomBar />
          <CartDrawer />
          <SearchModal />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
