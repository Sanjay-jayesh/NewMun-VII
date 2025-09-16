import type { Metadata } from "next"
import "./globals.css"
import ResizableNavbar from "@/components/resizable-navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "NewMUN",
  description: "NewMUN",
  generator: "MR.TNSR",
  icons: { icon: "/logo.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-background text-foreground antialiased min-h-screen">
        {/* Client component */}
        <ResizableNavbar />

        <main>{children}</main>

        {/* Client component */}
        <Footer />
      </body>
    </html>
  )
}
