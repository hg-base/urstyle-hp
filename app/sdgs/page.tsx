import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import SdgsAccordion from '@/components/SdgsAccordion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SDGsへの取り組み',
  description:
    'ユアスタイル合同会社のSDGsへの取り組みページです。目標8・11・12・13に対する具体的な取り組みをご紹介します。',
}

export default function SdgsPage() {
  return (
    <>
      <PageHero
        title="SDGsへの取り組み"
        subtitle="Sustainable Development Goals"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="私たちの取り組み" label="Sustainability" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={1}>
            <p
              className="mt-10 md:mt-12 text-base leading-relaxed text-center max-w-2xl mx-auto mb-14"
              style={{ color: 'var(--muted)' }}
            >
              ユアスタイル合同会社は、持続可能な社会の実現に向けて、
              軽貨物配送・大型家電設置事業を通じた4つのSDGs目標の達成に取り組んでいます。
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2}>
            <SdgsAccordion />
          </AnimateOnScroll>

          {/* SDG badge row */}
          <AnimateOnScroll delay={3}>
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {[
                { num: '08', color: '#A21942' },
                { num: '11', color: '#FD9D24' },
                { num: '12', color: '#BF8B2E' },
                { num: '13', color: '#3F7E44' },
              ].map((g) => (
                <div
                  key={g.num}
                  className="w-16 h-16 rounded flex items-center justify-center text-xl font-bold text-white shadow"
                  style={{ background: g.color }}
                >
                  {g.num}
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Declaration */}
          <AnimateOnScroll delay={4}>
            <div
              className="mt-16 p-6 md:p-8 rounded border-l-4 text-center"
              style={{
                background: 'var(--bg-alt)',
                borderLeftColor: '#3F7E44',
              }}
            >
              <h3
                className="text-sm font-semibold tracking-wide mb-3"
                style={{ color: 'var(--text)' }}
              >
                パートナーシップ構築宣言
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--muted)' }}
              >
                当社は、取引先様・協力会社様との連携強化、適正な取引の推進、
                共存共栄の実現を目的として、パートナーシップ構築宣言を公表しています。
              </p>
              <Link
                href="https://drive.google.com/file/d/1Mr2xdhsHNHoS3fmM-Z1LCCT2DHrDpbGx/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: '#3F7E44' }}
              >
                宣言書を見る
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
