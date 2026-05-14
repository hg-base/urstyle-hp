'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useRef } from 'react'

type Photo = { src: string; alt: string; pos?: string }

type Props = {
  photos: Photo[]
  className?: string
}

export default function PhotoStrip({ photos, className = '' }: Props) {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, playOnInit: true })
  )
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', containScroll: false },
    [autoplay.current]
  )

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Mobile: swipeable carousel with auto-advance */}
      <div className="sm:hidden overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative flex-[0_0_82%] mr-3 last:mr-0 aspect-[4/3] rounded overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.pos ?? 'object-top'}`}
                sizes="82vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: full-bleed 3-column strip */}
      <div className="hidden sm:grid sm:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`object-cover ${photo.pos ?? 'object-top'}`}
              sizes="33vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
