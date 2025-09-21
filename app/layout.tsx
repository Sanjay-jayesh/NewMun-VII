import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NewMUN',
  description: 'NewMUN',
  generator: 'MR.TNSR',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
