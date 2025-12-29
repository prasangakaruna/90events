import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { ColorCustomizationProvider } from "@/contexts/ColorCustomizationContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "90Events - Etkinlik Biletleme Platformu",
  description: "Harika etkinlikleri keşfedin ve rezerve edin. Konserler, stand-up gösterileri, tiyatro ve daha fazlası için tek adresiniz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <TranslationProvider>
          <ThemeProvider>
            <ColorCustomizationProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ThemeSwitcher />
            </ColorCustomizationProvider>
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
