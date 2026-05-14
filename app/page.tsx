import type { Metadata } from 'next'
import HeroSlider from '@/components/HeroSlider'

export const metadata: Metadata = {
  title: '軽貨物配送・大型家電設置 | ユアスタイル合同会社',
  description:
    '神奈川・東京エリアの軽貨物配送と大型家電設置はユアスタイル合同会社へ。相模原・平塚・横浜・大和・厚木エリア対応。EC・宅配便配送から洗濯機・冷蔵庫設置まで、スピードと信頼でサポートします。',
  keywords: [
    '軽貨物配送 神奈川',
    '家電設置 神奈川',
    '洗濯機設置 相模原',
    '冷蔵庫設置 横浜',
    '大型家電設置 厚木',
    '軽貨物ドライバー 募集',
    'ユアスタイル合同会社',
  ],
  alternates: { canonical: 'https://urstyle-ent.com' },
  openGraph: {
    title: '軽貨物配送・大型家電設置 | ユアスタイル合同会社',
    description:
      '神奈川・東京エリアの軽貨物配送と大型家電設置はユアスタイル合同会社へ。',
    url: 'https://urstyle-ent.com',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 2149,
        height: 1299,
        alt: 'ユアスタイル合同会社 - 軽貨物配送・大型家電設置',
      },
    ],
  },
}

import CompanyInfoBar from '@/components/CompanyInfoBar'
import ContactCTA from '@/components/ContactCTA'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PhotoStrip from '@/components/PhotoStrip'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Tv } from 'lucide-react'

const aboutPhotos = [
  { src: '/images/photo-04.webp', alt: '配送スタッフ', pos: 'object-top' },
  { src: '/images/photo-02.webp', alt: '家電設置作業', pos: 'object-top' },
  { src: '/images/photo-03.webp', alt: '保有車両', pos: 'object-center' },
]

const recruitPhotos = [
  { src: '/images/photo-08.webp', alt: 'URSTYLEスタッフ', pos: 'object-top' },
  { src: '/images/photo-10.webp', alt: 'URSTYLEチーム', pos: 'object-top' },
  { src: '/images/photo-09.webp', alt: '現場作業スタッフ', pos: 'object-top' },
  { src: '/images/photo-11.webp', alt: 'URSTYLEスタッフ', pos: 'object-top' },
]

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CompanyInfoBar />

      {/* ── About ── */}
      <section id="about" className="pt-20 md:pt-28 lg:pt-36 pb-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="私たちについて" label="01 / About" />
          </AnimateOnScroll>

          <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-12 md:pb-16 lg:pb-20">
            <AnimateOnScroll delay={1}>
              <div>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide leading-snug mb-6"
                  style={{ color: 'var(--text)' }}
                >
                  軽貨物配送と大型家電設置で<br />
                  現場業務を支える会社です。
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed mb-4"
                  style={{ color: 'var(--muted)' }}
                >
                  ユアスタイル合同会社は、軽貨物配送および大型家電設置業務を行っています。
                  配送から設置まで、現場状況に応じた対応を行っています。
                </p>
                <p
                  className="text-sm sm:text-base leading-relaxed mb-10"
                  style={{ color: 'var(--muted)' }}
                >
                  神奈川・東京を中心に、スピードと信頼をもってお客様のご要望にお応えします。
                </p>
                <div
                  className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {[
                    { label: '創業', value: '2020年' },
                    { label: '保有車両', value: '9台' },
                    { label: '対応エリア', value: '神奈川・東京' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div
                        className="text-sm sm:text-2xl font-bold mb-1 whitespace-nowrap"
                        style={{ color: 'var(--accent)' }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-[10px] sm:text-[11px] tracking-wide"
                        style={{ color: 'var(--muted)' }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded overflow-hidden shadow-xl">
                  <Image
                    src="/images/photo-10.webp"
                    alt="ユアスタイル スタッフ"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded hidden lg:block"
                  style={{ background: 'var(--accent)', opacity: 0.12 }}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* フルブリード フォトストリップ */}
        <AnimateOnScroll delay={3}>
          <PhotoStrip photos={aboutPhotos} />
        </AnimateOnScroll>
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        className="py-20 md:py-28 lg:py-36"
        style={{ background: 'var(--bg-alt)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="事業内容" label="02 / Services" />
          </AnimateOnScroll>

          {/* Service 1 - テキスト左 + 画像右 */}
          <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimateOnScroll delay={1}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                    style={{ background: 'var(--accent)' }}
                  >
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold tracking-wide"
                    style={{ color: 'var(--text)' }}
                  >
                    貨物軽自動車運送
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--muted)' }}
                >
                  軽貨物車両による配送業務を行っています。宅配やスポット配送など、現場状況に応じた対応を行っています。
                </p>
                <ul className="text-sm space-y-2" style={{ color: 'var(--muted)' }}>
                  {['EC・宅配便配送', 'スポット・ルート配送', '神奈川・東京エリア対応'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'var(--accent)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg">
                <Image
                  src="/images/photo-05.webp"
                  alt="軽貨物配送"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Service 2 - 画像左 + テキスト右 */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimateOnScroll delay={1} className="order-2 md:order-1">
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg">
                <Image
                  src="/images/photo-06.webp"
                  alt="大型家電設置"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2} className="order-1 md:order-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                    style={{ background: 'var(--accent)' }}
                  >
                    <Tv className="w-5 h-5 text-white" />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold tracking-wide"
                    style={{ color: 'var(--text)' }}
                  >
                    大型家電の設置・据え付け
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--muted)' }}
                >
                  引越しに伴う洗濯機などの大型家電設置を行っています。接続作業や動作確認まで丁寧に対応します。
                </p>
                <ul className="text-sm space-y-2" style={{ color: 'var(--muted)' }}>
                  {['洗濯機・冷蔵庫の設置', '接続・動作確認まで対応', '東京都・神奈川県対応'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'var(--accent)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={3}>
            <div className="mt-12 text-center">
              <Link
                href="https://forms.gle/RkNefMUiLMJBbRgV8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[44px] w-full sm:w-auto justify-center"
              >
                業務のご依頼・ご相談はこちら
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Recruit teaser ── */}
      <section className="pt-20 md:pt-28 pb-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="採用情報" label="03 / Recruit" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={1}>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-10 md:pb-14">
              <p
                className="text-sm sm:text-base leading-relaxed max-w-xl"
                style={{ color: 'var(--muted)' }}
              >
                ユアスタイル合同会社では、軽貨物および大型家電設置業務を行うスタッフを募集しています。
                配送業務や引越しに伴う家電設置など、現場作業を中心とした仕事です。
                未経験の方でも、実務を通して作業を覚えていただけます。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/recruit" className="btn-primary min-h-[44px] w-full sm:w-auto justify-center">
                  採用情報を見る
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://en-gage.net/urstyle-recruit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline min-h-[44px] w-full sm:w-auto justify-center"
                  style={{ color: 'var(--text)' }}
                >
                  募集要項を見る
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* フルブリード フォトストリップ */}
        <AnimateOnScroll delay={2}>
          <PhotoStrip photos={recruitPhotos} />
        </AnimateOnScroll>
      </section>

      {/* ── SDGs teaser ── */}
      <section className="py-16 md:py-20" style={{ background: '#1c2b1e' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <AnimateOnScroll>
              <div>
                <p className="text-xs tracking-[0.3em] text-white/40 mb-2 uppercase">
                  Sustainability
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-3">
                  SDGsへの取り組み
                </h2>
                <p className="text-sm text-white/60 max-w-md leading-relaxed">
                  ユアスタイルは持続可能な社会の実現に向けて、事業活動を通じてSDGsの目標達成に取り組んでいます。
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={1}>
              <Link
                href="/sdgs"
                className="btn-outline text-white border-white/30 hover:bg-white/10 shrink-0 min-h-[44px] justify-center"
              >
                詳しく見る
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
