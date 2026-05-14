type Props = {
  title: string
  light?: boolean
}

export default function SectionTitle({ title, light = false }: Props) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2
        className={`text-2xl md:text-3xl font-bold tracking-widest ${
          light ? 'text-white' : 'text-[var(--dark)]'
        }`}
      >
        {title}
      </h2>
      <div className={`section-divider ${light ? 'bg-white!' : ''}`} />
    </div>
  )
}
