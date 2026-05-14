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
      <div className="relative z-10 px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-3">
          {title}
        </h1>
        <div className="section-divider bg-white! mx-auto" />
        {subtitle && (
          <p className="mt-4 text-sm md:text-base text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
