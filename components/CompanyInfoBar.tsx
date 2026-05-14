'use client'

const items = [
  '神奈川・東京',
  '保有車両 9台',
  '令和２年創業',
  '軽貨物配送・大型家電設置',
  '神奈川・東京',
  '保有車両 9台',
  '令和２年創業',
  '軽貨物配送・大型家電設置',
]

export default function CompanyInfoBar() {
  return (
    <div className="bg-[#1a1a1a] text-white overflow-hidden">
      <div className="flex items-center">
        <div
          className="shrink-0 bg-[var(--accent)] px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-widest z-10"
          style={{ minWidth: 'fit-content' }}
        >
          会社情報
        </div>
        <div className="overflow-hidden flex-1">
          <div className="marquee-track flex">
            {items.map((item, i) => (
              <span
                key={i}
                className="inline-block text-xs sm:text-sm text-white/80 px-5 sm:px-8 py-3 sm:py-4 border-r border-white/10 shrink-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
