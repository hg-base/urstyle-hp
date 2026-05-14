type Props = {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section
      className="relative flex items-center justify-center text-white text-center overflow-hidden"
      style={{ minHeight: 'clamp(200px, 30vh, 320px)', background: 'var(--dark)' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/hero-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 px-4 py-16 md:py-20">
        {subtitle && (
          <p className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4 font-light">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest">
          {title}
        </h1>
        <div className="section-divider bg-white! mx-auto mt-5" />
      </div>
    </section>
  )
}
