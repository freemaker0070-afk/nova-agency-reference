import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nova-agency.com'),
  title: {
    default: 'Nova Agency | 디지털 크리에이티브 에이전시',
    template: '%s | Nova Agency',
  },
  description: '혁신적인 디지털 경험을 창조합니다. 웹 개발, 브랜딩, UI/UX 디자인 전문 에이전시 Nova입니다.',
  keywords: ['웹 에이전시', '디지털 에이전시', '웹 개발', 'UI/UX 디자인', '브랜딩', '크리에이티브 에이전시'],
  authors: [{ name: 'Nova Agency' }],
  creator: 'Nova Agency',
  publisher: 'Nova Agency',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://nova-agency.com',
    siteName: 'Nova Agency',
    title: 'Nova Agency | 디지털 크리에이티브 에이전시',
    description: '혁신적인 디지털 경험을 창조합니다.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nova Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Agency | 디지털 크리에이티브 에이전시',
    description: '혁신적인 디지털 경험을 창조합니다.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
