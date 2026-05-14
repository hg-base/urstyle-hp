import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const noto = Noto_Sans_JP({
  variable: '--font-noto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | URSTYLE ENTERPRISE',
    default: 'URSTYLE ENTERPRISE | 軽貨物配送・大型家電設置',
  },
  description:
    '神奈川・東京エリアの軽貨物配送と大型家電設置はユアスタイル合同会社へ。スピードと信頼で、お客様の物流と生活をサポートします。',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={noto.variable}>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
