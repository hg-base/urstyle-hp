'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/images/photo-01.webp', alt: '業務写真 1' },
  { src: '/images/photo-02.webp', alt: '業務写真 2' },
  { src: '/images/photo-03.webp', alt: '業務写真 3' },
  { src: '/images/photo-04.webp', alt: '業務写真 4' },
  { src: '/images/photo-05.webp', alt: '業務写真 5' },
  { src: '/images/photo-06.webp', alt: '業務写真 6' },
  { src: '/images/photo-07.webp', alt: '業務写真 7' },
]

export default function RecruitCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla])

  useEffect(() => {
    if (!embla) return
    const onSelect = () => setSelected(embla.selectedScrollSnap())
    embla.on('select', onSelect)
    return () => { embla.off('select', onSelect) }
  }, [embla])

  useEffect(() => {
    if (!embla) return
    const t = setInterval(() => embla.scrollNext(), 3500)
    return () => clearInterval(t)
  }, [embla])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative shrink-0 h-56 sm:h-72 md:h-80"
              style={{ flex: '0 0 100%' }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm z-10"
        aria-label="前の写真"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm z-10"
        aria-label="次の写真"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`写真 ${i + 1}`}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background:
                i === selected
                  ? 'var(--accent)'
                  : 'var(--border)',
              transform: i === selected ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
