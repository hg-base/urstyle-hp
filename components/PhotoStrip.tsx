import Image from 'next/image'

type Photo = { src: string; alt: string; pos?: string }

type Props = {
  photos: Photo[]
  className?: string
}

// Each photo is ~34vw wide. Target scroll speed ≈ 4.25 vw/s
// → duration (s) = n × 34 / 4.25 ≈ n × 8
function duration(n: number) {
  return `${n * 8}s`
}

export default function PhotoStrip({ photos, className = '' }: Props) {
  const doubled = [...photos, ...photos]

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className="flex"
        style={{ animation: `marquee ${duration(photos.length)} linear infinite` }}
      >
        {doubled.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] shrink-0 w-[80vw] sm:w-[40vw] md:w-[34vw]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`object-cover ${photo.pos ?? 'object-top'}`}
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 34vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
