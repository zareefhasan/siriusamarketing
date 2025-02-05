import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { CookieConsent } from "./components/CookieConsent"
import type { Metadata } from "next"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AI Tool - OpenAI + Next.js SaaS Boilerplate",
    template: "%s | AI Tool",
  },
  description: "The perfect starting point for your next AI-powered SaaS project",
  openGraph: {
    title: "AI Tool - OpenAI + Next.js SaaS Boilerplate",
    description: "The perfect starting point for your next AI-powered SaaS project",
    url: "https://aitool.com",
    siteName: "AI Tool",
    images: [
      {
        url: "https://aitool.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool - OpenAI + Next.js SaaS Boilerplate",
    description: "The perfect starting point for your next AI-powered SaaS project",
    images: ["https://aitool.com/og-image.png"],
    creator: "@aitool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}



import './globals.css'