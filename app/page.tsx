import HeroSlider from '@/components/HeroSlider'
import CompanyInfoBar from '@/components/CompanyInfoBar'
import ContactCTA from '@/components/ContactCTA'
import SectionTitle from '@/components/SectionTitle'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Tv, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CompanyInfoBar />

      {/* ── About ── */}
      <section id="about" className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="私たちについて" />
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll delay={1}>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold tracking-wide leading-snug mb-6"
                  style={{ color: 'var(--text)' }}
                >
                  軽貨物配送と大型家電設置で<br />
                  現場業務を支える会社です。
                </h2>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: 'var(--muted)' }}
                >
                  ユアスタイル合同会社は、軽貨物配送および大型家電設置業務を行っています。
                  配送から設置まで、現場状況に応じた対応を行っています。
                </p>
                <p
                  className="text-base leading-relaxed mb-10"
                  style={{ color: 'var(--muted)' }}
                >
                  神奈川・東京を中心に、スピードと信頼をもってお客様のご要望にお応えします。
                </p>
                <div
                  className="grid grid-cols-3 gap-4 pt-6 border-t"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {[
                    { label: '創業', value: '2020年' },
                    { label: '保有車両', value: '9台' },
                    { label: '対応エリア', value: '神奈川・東京' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div
                        className="text-xl sm:text-2xl font-bold mb-1"
                        style={{ color: 'var(--accent)' }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-xs tracking-widest"
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
                    src="/images/photo-02.webp"
                    alt="ユアスタイル 業務風景"
                    fill
                    className="object-cover"
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
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        className="py-20 md:py-28 lg:py-36"
        style={{ background: 'var(--bg-alt)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="事業内容" />
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <AnimateOnScroll delay={1}>
              <div className="bg-white rounded shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/photo-05.webp"
                    alt="軽貨物配送"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div
                    className="absolute top-4 left-4 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--accent)' }}
                  >
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3
                    className="text-xl font-bold tracking-wide mb-3"
                    style={{ color: 'var(--text)' }}
                  >
                    貨物軽自動車運送
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: 'var(--muted)' }}
                  >
                    軽貨物車両による配送業務を行っています。宅配やスポット配送など、現場状況に応じた対応を行っています。
                  </p>
                  <ul
                    className="text-sm space-y-2 mt-auto"
                    style={{ color: 'var(--muted)' }}
                  >
                    {[
                      'EC・宅配便配送',
                      'スポット・ルート配送',
                      '神奈川・東京エリア対応',
                    ].map((item) => (
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
              </div>
            </AnimateOnScroll>

            {/* Service 2 */}
            <AnimateOnScroll delay={2}>
              <div className="bg-white rounded shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/photo-08.webp"
                    alt="大型家電設置"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div
                    className="absolute top-4 left-4 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--accent)' }}
                  >
                    <Tv className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3
                    className="text-xl font-bold tracking-wide mb-3"
                    style={{ color: 'var(--text)' }}
                  >
                    大型家電の設置・据え付け
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: 'var(--muted)' }}
                  >
                    引越しに伴う洗濯機などの大型家電設置を行っています。接続作業や動作確認まで丁寧に対応します。
                  </p>
                  <ul
                    className="text-sm space-y-2 mt-auto"
                    style={{ color: 'var(--muted)' }}
                  >
                    {[
                      '洗濯機・冷蔵庫の設置',
                      '接続・動作確認まで対応',
                      '東京都・神奈川県対応',
                    ].map((item) => (
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
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={3}>
            <div className="mt-12 text-center">
              <Link
                href="https://forms.gle/RkNefMUiLMJBbRgV8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                業務のご依頼・ご相談はこちら
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Recruit teaser ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionTitle title="採用情報" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={1}>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <Users
                  className="w-12 h-12"
                  style={{ color: 'var(--accent)' }}
                />
              </div>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: 'var(--muted)' }}
              >
                ユアスタイル合同会社では、現場を共に支えるメンバーを募集しています。
                <br />
                軽貨物ドライバー・家電設置スタッフとして一緒に働きませんか？
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/recruit" className="btn-primary min-h-[44px]">
                  採用情報を見る
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://en-gage.net/urstyle-recruit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline min-h-[44px]"
                  style={{ color: 'var(--text)' }}
                >
                  募集要項を見る（エンゲージ）
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
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
                  SDGsへの取組
                </h2>
                <p className="text-sm text-white/60 max-w-md leading-relaxed">
                  ユアスタイルは持続可能な社会の実現に向けて、事業活動を通じてSDGsの目標達成に取り組んでいます。
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={1}>
              <Link
                href="/sdgs"
                className="btn-outline text-white border-white/30 hover:bg-white/10 shrink-0 min-h-[44px]"
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
