import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "UpToUs Campus Fiscal Awareness",
  description: "Learn the facts about U.S. fiscal policy. Take action on campus.",
  generator: "v0.app",
  openGraph: {
    title: "UpToUs Campus Fiscal Awareness",
    description: "Learn the facts about U.S. fiscal policy. Take action on campus.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UpToUs Campus Fiscal Awareness",
    description: "Learn the facts about U.S. fiscal policy. Take action on campus.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}>
        <Header />
        <div className="flex-1 min-w-0">{children}</div>
        <Footer />
        <Analytics />
        {/* Plausible Analytics - deferred load */}
        <Script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
