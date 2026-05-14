'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const goals = [
  {
    num: '08',
    color: '#A21942',
    title: '働きがいも経済成長も',
    body: '当社は、ドライバーや設置スタッフが誇りを持って働ける環境づくりに取り組んでいます。適切な報酬・安定した就業機会の提供を通じ、持続的な経済成長を支えます。',
  },
  {
    num: '11',
    color: '#FD9D24',
    title: '住み続けられるまちづくりを',
    body: '大型家電設置サービスを通じて、引越し後の生活環境を安心・快適に整えるお手伝いをしています。地域に根差した物流インフラとして、まちの利便性向上に貢献します。',
  },
  {
    num: '12',
    color: '#BF8B2E',
    title: 'つくる責任 つかう責任',
    body: '配送ルートの最適化・積載率向上により、資源・燃料の無駄を削減しています。また、梱包材のリサイクルや廃棄物削減に向けた取り組みを推進しています。',
  },
  {
    num: '13',
    color: '#3F7E44',
    title: '気候変動に具体的な対策を',
    body: '燃費効率の高い軽貨物車両の採用やエコドライブの徹底により、CO₂排出量の削減に努めています。将来的にはEV車両への移行も視野に入れ、脱炭素社会に貢献します。',
  },
]

export default function SdgsAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {goals.map((g, i) => (
        <div
          key={g.num}
          className="border rounded overflow-hidden"
          style={{ borderColor: 'var(--border)' }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center gap-4 p-5 text-left transition-colors"
            style={{
              background: open === i ? g.color : 'white',
            }}
          >
            <span
              className="shrink-0 w-12 h-12 rounded flex items-center justify-center text-lg font-bold text-white"
              style={{ background: g.color, opacity: open === i ? 0.9 : 1 }}
            >
              {g.num}
            </span>
            <span
              className="flex-1 text-sm sm:text-base font-semibold tracking-wide"
              style={{ color: open === i ? 'white' : 'var(--text)' }}
            >
              {g.title}
            </span>
            <span style={{ color: open === i ? 'white' : 'var(--muted)' }}>
              {open === i ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </span>
          </button>

          <div
            className="accordion-content"
            style={{ maxHeight: open === i ? '300px' : '0' }}
          >
            <p
              className="px-5 py-5 text-sm leading-relaxed border-t"
              style={{
                color: 'var(--muted)',
                borderColor: 'var(--border)',
              }}
            >
              {g.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
