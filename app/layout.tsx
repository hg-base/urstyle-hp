import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const noto = Noto_Sans_JP({
  variable: '--font-noto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

const BASE_URL = 'https://urstyle-ent.com'

export const viewport: Viewport = {
  themeColor: '#c0392b',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | ユアスタイル合同会社',
    default: '軽貨物配送・大型家電設置 | ユアスタイル合同会社',
  },
  description:
    '神奈川・東京エリアの軽貨物配送と大型家電設置はユアスタイル合同会社へ。相模原・平塚・横浜・大和・厚木エリア対応。スピードと信頼で物流と生活をサポートします。',
  keywords: [
    'ユアスタイル合同会社',
    '軽貨物配送',
    '大型家電設置',
    '家電設置',
    '洗濯機設置',
    '冷蔵庫設置',
    '軽貨物ドライバー',
    '神奈川',
    '横浜',
    '相模原',
    '厚木',
    '大和',
    '平塚',
    '東京',
    'URSTYLE',
    '軽貨物',
    '配送',
    '引越し 家電',
    '設置 業者',
  ],
  authors: [{ name: 'ユアスタイル合同会社', url: BASE_URL }],
  creator: 'ユアスタイル合同会社',
  publisher: 'ユアスタイル合同会社',
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
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: BASE_URL,
    siteName: 'ユアスタイル合同会社',
    title: '軽貨物配送・大型家電設置 | ユアスタイル合同会社',
    description:
      '神奈川・東京エリアの軽貨物配送と大型家電設置はユアスタイル合同会社へ。スピードと信頼でお客様の物流と生活をサポートします。',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 2149,
        height: 1299,
        alt: 'ユアスタイル合同会社 - 軽貨物配送・大型家電設置',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '軽貨物配送・大型家電設置 | ユアスタイル合同会社',
    description:
      '神奈川・東京エリアの軽貨物配送と大型家電設置はユアスタイル合同会社へ。',
    images: ['/images/hero-bg.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={noto.variable}>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
