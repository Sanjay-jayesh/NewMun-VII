import type { Metadata } from 'next'
import './globals.css'
import ResizableNavbar from '@/components/resizable-navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'NewMUN',
  description: 'NewMUN',
  generator: 'MR.TNSR',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light"> {/* Force light mode */}
      <body
        className="bg-background text-foreground antialiased" 
        style={{ minHeight: '100vh' }}
      >
        {/* Navbar at the top */}
        <ResizableNavbar />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  )
}
