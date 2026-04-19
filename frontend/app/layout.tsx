import type { Metadata } from 'next'
import { Manrope, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Premium serif for large display headings — creates the editorial luxury feel
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Clinical Excellence — The Architectural Healer',
    template: '%s | Clinical Excellence',
  },
  description:
    'Clinical Excellence redefines healthcare through the perfect fusion of modern clinical infrastructure, precision architecture, and deeply empathetic care. Founded 1984.',
  keywords: ['hospital', 'healthcare', 'clinical excellence', 'cardiology', 'neurology', 'oncology', 'specialists', 'appointment'],
  openGraph: {
    title: 'Clinical Excellence — The Future of Healing is Architectural',
    description: 'World-class healthcare with 250+ specialists, 15 Centers of Excellence, and a 99% patient satisfaction rate.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${cormorant.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface antialiased font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
