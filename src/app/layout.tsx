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
  title: "NEXKART ATELIER — Contemporary Haute Fashion",
  description:
    "Curated architectural menswear and womenswear defined by sculptural cuts, exceptional Italian fabrics, and uncompromising minimalist elegance.",
  keywords: [
    "fashion",
    "luxury",
    "atelier",
    "cashmere",
    "tailoring",
    "designer clothing",
    "minimalist fashion",
  ],
  openGraph: {
    title: "NEXKART ATELIER — Contemporary Haute Fashion",
    description:
      "Architectural volume meets raw tactility. Discover curated menswear, womenswear, and artisanal accessories.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#FAFAFA] text-[#111111] antialiased">
        <Providers>
          <AnnouncementBar />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CartDrawer />
          <SearchModal />
        </Providers>
      </body>
    </html>
  );
}
