import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '採用情報',
  description:
    'ユアスタイル合同会社では軽貨物ドライバー・大型家電設置スタッフを募集中。未経験歓迎・安定案件。神奈川（相模原・横浜・厚木）・東京エリアで働きたい方はぜひご応募ください。',
  keywords: [
    '軽貨物ドライバー 募集 神奈川',
    '家電設置 スタッフ 募集',
    '軽貨物 求人 相模原',
    '軽貨物 求人 横浜',
    '軽貨物 未経験',
    'ユアスタイル 採用',
    '配送 ドライバー 求人',
  ],
  alternates: { canonical: 'https://urstyle-ent.com/recruit' },
  openGraph: {
    title: '採用情報 | ユアスタイル合同会社',
    description:
      '軽貨物ドライバー・大型家電設置スタッフ募集中。未経験歓迎・神奈川（相模原・横浜・厚木）・東京エリア。',
    url: 'https://urstyle-ent.com/recruit',
    images: [
      {
        url: '/images/photo-08.webp',
        width: 1200,
        height: 800,
        alt: 'ユアスタイル合同会社スタッフ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '採用情報 | ユアスタイル合同会社',
    description:
      '軽貨物ドライバー・大型家電設置スタッフ募集中。未経験歓迎・神奈川（相模原・横浜・厚木）・東京エリア。',
    images: ['/images/photo-08.webp'],
  },
}

const features = [
  '安定した案件数・収入',
  '未経験者歓迎・丁寧にサポート',
  '柔軟な勤務スタイル',
  '小規模ならではの働きやすい環境',
  '神奈川・東京エリアでの業務',
]

export default function RecruitPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム', url: 'https://urstyle-ent.com' },
          { name: '採用情報', url: 'https://urstyle-ent.com/recruit' },
        ]}
      />
      <PageHero title="採用情報" subtitle="Recruitment" />

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-[10px] tracking-[0.35em] uppercase font-medium text-[var(--muted)] mb-3">
              Join Us
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-wide mb-6"
              style={{ color: 'var(--dark)' }}
            >
              一緒に現場を支えるメンバーを<br className="hidden sm:inline" />募集しています
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1}>
            <p
              className="text-sm md:text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: 'var(--muted)' }}
            >
              ユアスタイル合同会社は、軽貨物配送と大型家電設置を通じて、
              お客様の生活を支える仕事をしています。
              未経験でも丁寧にサポートしますので、まずはお気軽にお問い合わせください。
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Job description */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="募集について" label="Positions" />
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Positions */}
            <AnimateOnScroll delay={1}>
              <div>
                <h3
                  className="text-lg font-bold tracking-wide mb-6 pb-3 border-b"
                  style={{
                    color: 'var(--text)',
                    borderColor: 'var(--accent)',
                    borderBottomWidth: '2px',
                  }}
                >
                  募集職種
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: '軽貨物ドライバー',
                      desc: 'EC・宅配便配送やスポット配送を担当していただきます。普通自動車免許があればOK。',
                    },
                    {
                      title: '大型家電設置スタッフ',
                      desc: '引越し後の洗濯機・冷蔵庫などの設置・接続・動作確認を担当していただきます。',
                    },
                  ].map((pos) => (
                    <div
                      key={pos.title}
                      className="p-5 rounded border"
                      style={{
                        borderColor: 'var(--border)',
                        background: 'var(--bg-alt)',
                      }}
                    >
                      <h4
                        className="text-base font-semibold mb-2"
                        style={{ color: 'var(--text)' }}
                      >
                        {pos.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--muted)' }}
                      >
                        {pos.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Features */}
            <AnimateOnScroll delay={2}>
              <div>
                <h3
                  className="text-lg font-bold tracking-wide mb-6 pb-3 border-b"
                  style={{
                    color: 'var(--text)',
                    borderColor: 'var(--accent)',
                    borderBottomWidth: '2px',
                  }}
                >
                  URSTYLEで働く魅力
                </h3>
                <ul className="space-y-4">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: 'var(--muted)' }}
                    >
                      <CheckCircle
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: 'var(--accent)' }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* CTA */}
          <AnimateOnScroll delay={3}>
            <div
              className="mt-16 p-6 sm:p-8 md:p-10 rounded text-center"
              style={{ background: 'var(--bg-alt)' }}
            >
              <p
                className="text-base font-semibold tracking-wide mb-2"
                style={{ color: 'var(--text)' }}
              >
                詳しい募集要項・エントリーはこちら
              </p>
              <p
                className="text-sm mb-8"
                style={{ color: 'var(--muted)' }}
              >
                エンゲージから詳細の確認・応募が可能です。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://en-gage.net/urstyle-recruit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary min-h-[44px] w-full sm:w-auto justify-center"
                >
                  募集要項を見る（エンゲージ）
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://forms.gle/RkNefMUiLMJBbRgV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline min-h-[44px] w-full sm:w-auto justify-center"
                  style={{ color: 'var(--text)' }}
                >
                  お問い合わせフォーム
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
