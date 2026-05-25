import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maayoithealth.org"),
  title: "Maayoit — Healthcare That Stands In For Family",
  description:
    "Professional medical cover designed with empathy. From individual care to community-wide health solutions across Nigeria.",
  openGraph: {
    title: "Maayoit — Healthcare That Stands In For Family",
    description:
      "Professional medical cover designed with empathy. From individual care to community-wide health solutions across Nigeria.",
    url: "https://maayoithealth.org",
    siteName: "Maayoit Healthcare Limited",
    images: [
      {
        url: "/seoimage.png",
        width: 467,
        height: 342,
        alt: "Maayoit Healthcare Limited",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maayoit — Healthcare That Stands In For Family",
    description:
      "Professional medical cover designed with empathy. From individual care to community-wide health solutions across Nigeria.",
    images: ["/seoimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${jetbrains.variable} font-sans antialiased flex flex-col min-h-screen bg-cream text-ink`}
      >
        <Navbar />
        <main className="flex-1 relative z-[1]">{children}</main>
        <Footer />
        <Script id="quickchat-widget" strategy="afterInteractive">
          {`(function(e,a,d,i,c,t=a.createElement(d)){e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},t.src=i,t.async=1,a.body.insertAdjacentElement("beforeend",t)})(window,document,"script","https://bubble.quickchat.ai/chat.js","_quickchat");_quickchat("init", "2wtzwro2tf");`}
        </Script>
      </body>
    </html>
  );
}
