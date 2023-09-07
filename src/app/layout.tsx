import '@/styles/globals.css'
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

import Header from "@/components/header"

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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}>
          <Header/>
          <main className="relative">{children}</main>
          
      </body>
    </html>
  )
}
