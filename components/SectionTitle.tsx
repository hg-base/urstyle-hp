type Props = {
  title: string
  label?: string
  light?: boolean
}

export default function SectionTitle({ title, label, light = false }: Props) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {label && (
        <p
          className={`text-[10px] tracking-[0.35em] uppercase font-medium mb-3 ${
            light ? 'text-white/40' : 'text-[var(--muted)]'
          }`}
        >
          {label}
        </p>
      )}
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
