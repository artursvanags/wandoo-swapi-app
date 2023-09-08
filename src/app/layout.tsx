import '@/styles/globals.css'
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import type { Metadata } from 'next'
import { cn } from "@/lib/utils"
import Header from "@/components/layout/header"
import { siteConfig } from "@/config/site"
import { ThemeProvider } from '@/components/global/ThemeProvider'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.developer,
      url: "https://github.com/artursvanags",
    },
  ],
  creator: siteConfig.developer,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header/>
            <main className="relative">{children}</main>
          </ThemeProvider>
          
      </body>
    </html>
  )
}
