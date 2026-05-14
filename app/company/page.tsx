import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactCTA from '@/components/ContactCTA'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import PdfModal from '@/components/PdfModal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: '会社概要',
  description:
    'ユアスタイル合同会社の会社概要ページ。横浜市港北区新横浜を拠点に、神奈川・東京で軽貨物配送・大型家電設置を展開。貨物軽自動車運送事業者（神運輸証第216号）。',
  keywords: [
    'ユアスタイル合同会社 会社概要',
    '軽貨物 会社 神奈川',
    '貨物軽自動車運送事業者',
    '神運輸証',
    '横浜市港北区',
    '新横浜',
    'ユアスタイル 郡司',
  ],
  alternates: { canonical: 'https://urstyle-ent.com/company' },
  openGraph: {
    title: '会社概要 | ユアスタイル合同会社',
    description:
      'ユアスタイル合同会社の会社概要。横浜市港北区新横浜を拠点に、神奈川・東京で軽貨物配送・大型家電設置を展開。',
    url: 'https://urstyle-ent.com/company',
    images: [
      {
        url: '/images/photo-10.webp',
        width: 1200,
        height: 800,
        alt: 'ユアスタイル合同会社スタッフ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '会社概要 | ユアスタイル合同会社',
    description:
      'ユアスタイル合同会社の会社概要。横浜市港北区新横浜を拠点に、神奈川・東京で軽貨物配送・大型家電設置を展開。',
    images: ['/images/photo-10.webp'],
  },
}

const rows: { label: string; value: string }[] = [
  { label: '会社名', value: 'ユアスタイル合同会社（URSTYLE LLC.）' },
  { label: '代表社員', value: '郡司 大輝' },
  { label: '創業', value: '2020年6月10日（個人事業）' },
  { label: '法人設立', value: '2025年11月6日' },
  {
    label: '本社所在地',
    value: '〒222-0033\n神奈川県横浜市港北区新横浜2丁目5-13-701',
  },
  {
    label: '事業内容',
    value:
      '■ 貨物軽自動車運送事業\n■ 大型家電設置・住環境整備事業\n■ 自動車関連事業\n■ AIを活用したSaaSプロダクトの企画・開発・運営\n■ 軽貨物業務支援SaaS「K-LEDGE（ケイレジ）」の企画・開発・運営',
  },
  {
    label: '保有車両',
    value: '軽貨物車両 9台（リース・借り上げ含む）',
  },
  {
    label: '保有資格',
    value: '■ 貨物軽自動車運送事業\n　神運輸証第216号\n　（関東運輸局　神奈川運輸支局）\n\n■ 貨物軽自動車安全管理者\n　JG001-2632749\n　（自動車事故対策機構）\n\n■ 古物商届出業者\n　第452760018432号\n　（神奈川県公安委員会）\n\n■ ガス可とう管接続工事監督者\n　14240378\n　（日本ガス機器検査協会）',
  },
  {
    label: 'サービス提供地域',
    value:
      '【軽貨物配送（発地）】\n・相模原市中央区清新（相模原中央SA）\n・相模原市南区下溝（相模原南SA）\n・平塚市大神\n・神奈川県横浜市旭区\n・神奈川県大和市中央林間\n・厚木市船子\n\n【大型家電設置（設置地域全域）】\n・東京都町田市\n・神奈川県相模原市\n・神奈川県厚木市\n・神奈川県愛甲郡',
  },
  {
    label: 'インボイス登録番号',
    value: 'T1021003016807\n（適格請求書発行事業者）',
  },
]

export default function CompanyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム', url: 'https://urstyle-ent.com' },
          { name: '会社概要', url: 'https://urstyle-ent.com/company' },
        ]}
      />
      <PageHero title="会社概要" subtitle="Company Profile" />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="会社情報" label="Company Profile" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={1}>
            <dl
              className="mt-12 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 sm:grid-cols-[180px_1fr] border-b py-4 sm:py-5 gap-1 sm:gap-8"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <dt
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: 'var(--text)' }}
                  >
                    {row.label}
                  </dt>
                  <dd
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: 'var(--muted)' }}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimateOnScroll>

          {/* Partnership declaration */}
          <AnimateOnScroll delay={2}>
            <div
              className="mt-10 p-6 md:p-8 rounded border-l-4"
              style={{
                background: 'var(--bg-alt)',
                borderLeftColor: 'var(--accent)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="shrink-0">
                  <Image
                    src="/images/photo-07.webp"
                    alt="パートナーシップ構築宣言ロゴ"
                    width={160}
                    height={82}
                    className="w-36 sm:w-40 h-auto"
                  />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold tracking-wide mb-3"
                    style={{ color: 'var(--text)' }}
                  >
                    パートナーシップ構築宣言
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--muted)' }}
                  >
                    当社は、取引先様・協力会社様との連携強化、適正な取引の推進、共存共栄の実現を目的として、パートナーシップ構築宣言を公表しています。
                  </p>
                  <PdfModal
                    src="/images/partnership-declaration.pdf"
                    title="パートナーシップ構築宣言書"
                    label="宣言書を見る"
                    style={{ color: 'var(--accent)' }}
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* かながわSDGsパートナー */}
          <AnimateOnScroll delay={3}>
            <div
              className="mt-5 p-6 md:p-8 rounded border-l-4"
              style={{
                background: 'var(--bg-alt)',
                borderLeftColor: '#3F7E44',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="flex items-center gap-4 shrink-0">
                  <Image
                    src="/images/photo-12.png"
                    alt="かながわSDGsパートナーロゴ"
                    width={140}
                    height={54}
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/images/photo-13.png"
                    alt="かながわSDGsパートナー認定バッジ"
                    width={72}
                    height={72}
                    className="w-14 h-14"
                  />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold tracking-wide mb-3"
                    style={{ color: 'var(--text)' }}
                  >
                    かながわSDGsパートナー
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--muted)' }}
                  >
                    当社は神奈川県のSDGs推進に取り組む事業者として、かながわSDGsパートナーに登録されています。
                  </p>
                  <PdfModal
                    src="/images/1825.pdf"
                    title="かながわSDGsパートナー登録証"
                    label="登録証を見る"
                    style={{ color: '#3F7E44' }}
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Vehicle list */}
          <AnimateOnScroll delay={4}>
            <div
              className="mt-5 p-6 md:p-8 rounded border-l-4"
              style={{
                background: 'var(--bg-alt)',
                borderLeftColor: 'var(--border)',
              }}
            >
              <h3
                className="text-sm font-semibold tracking-wide mb-3"
                style={{ color: 'var(--text)' }}
              >
                保有車両一覧
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: 'var(--muted)' }}
              >
                現在保有している車両の詳細一覧をご確認いただけます。
              </p>
              <Link
                href="https://docs.google.com/spreadsheets/d/1BL51f-dwf9wzuAT5IEV2Zt7MdGpgo3nLJHuUt9JaXkM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--text)' }}
              >
                車両一覧を見る
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
