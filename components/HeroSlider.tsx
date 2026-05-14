'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/images/hero-bg.webp',
    alt: '高速道路を走るURSTYLEの車両群',
    heading: '軽貨物配送・大型家電設置',
    sub: '神奈川・東京を中心に、スピードと信頼でお届けします',
  },
  {
    src: '/images/photo-01.webp',
    alt: 'URSTYLEスタッフ',
    heading: '現場業務を\n支える会社です',
    sub: '一件一件、丁寧に対応します',
  },
  {
    src: '/images/photo-04.webp',
    alt: 'URSTYLE 配送業務',
    heading: '安全・確実・迅速に\nお届けします',
    sub: '保有車両 9台でエリアをカバー',
  },
]

const INTERVAL = 5000
const FADE_HALF = 450

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [imgKey, setImgKey] = useState(0)
  const [visible, setVisible] = useState(true)
  const goingRef = useRef(false)

  const goTo = useCallback((next: number) => {
    if (goingRef.current) return
    goingRef.current = true
    setVisible(false)
    setTimeout(() => {
      setIndex(next)
      setImgKey((k) => k + 1)
      setVisible(true)
      goingRef.current = false
    }, FADE_HALF)
  }, [])

  useEffect(() => {
    const t = setInterval(
      () => goTo((index + 1) % slides.length),
      INTERVAL
    )
    return () => clearInterval(t)
  }, [index, goTo])

  const goPrev = () => goTo((index - 1 + slides.length) % slides.length)
  const goNext = () => goTo((index + 1) % slides.length)

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(520px, 92vh, 900px)' }}
    >
      {/* Background with Ken Burns */}
      <div
        key={imgKey}
        className="ken-burns absolute inset-0"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_HALF}ms ease`,
        }}
      >
        <Image
          src={slides[index].src}
          alt={slides[index].alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: `opacity ${FADE_HALF}ms ease, transform ${FADE_HALF}ms ease`,
        }}
      >
        <div className="inline-block bg-[var(--accent)] text-xs text-white tracking-[0.25em] px-4 py-1.5 mb-6 font-medium uppercase">
          Urstyle Enterprise
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest leading-tight mb-5 whitespace-pre-line"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
        >
          {slides[index].heading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-10 tracking-wider max-w-xl">
          {slides[index].sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="https://forms.gle/RkNefMUiLMJBbRgV8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-[44px]"
          >
            お問い合わせ
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/company"
            className="btn-outline text-white border-white/50 hover:bg-white/10 min-h-[44px]"
          >
            会社概要を見る
          </Link>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={goPrev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors backdrop-blur-sm"
        aria-label="前のスライド"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors backdrop-blur-sm"
        aria-label="次のスライド"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-2.5 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`スライド ${i + 1}`}
            className="rounded-full transition-all duration-400"
            style={{
              width: i === index ? '28px' : '8px',
              height: '8px',
              background:
                i === index ? '#fff' : 'rgba(255,255,255,0.38)',
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2 text-white/35 select-none">
        <span
          className="text-[10px] tracking-[0.25em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
      </div>
    </section>
  )
}
