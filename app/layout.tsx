import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NewMUN VII - Model United Nations',
  description: 'NewMUN VII - The premier Model United Nations Conference',
  generator: 'Next.js',
  applicationName: 'NewMUN',
  keywords: ['MUN', 'Model United Nations', 'Conference', 'Debate', 'Diplomacy'],
  authors: [{ name: 'MR.TNSR' }],
  creator: 'Sanjay Jayesh',
  openGraph: {
    title: 'NewMUN VII',
    description: 'The premier Model United Nations Conference',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewMUN VII',
    description: 'Model United Nations Conference',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
