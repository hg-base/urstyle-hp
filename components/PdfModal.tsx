'use client'

import { useState } from 'react'
import { FileText, X } from 'lucide-react'

type Props = {
  src: string
  title: string
  label?: string
  className?: string
  style?: React.CSSProperties
}

export default function PdfModal({ src, title, label, className = '', style }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70 ${className}`}
        style={style}
      >
        <FileText className="w-4 h-4 shrink-0" />
        {label ?? title}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ background: 'rgba(0,0,0,0.85)' }}
        >
          {/* ヘッダー */}
          <div className="flex items-center justify-between bg-white px-4 sm:px-6 py-3 shrink-0">
            <p className="text-sm font-semibold tracking-wide text-[var(--text)] truncate pr-4">
              {title}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-100 transition-colors shrink-0"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* PDF iframe */}
          <iframe
            src={src}
            title={title}
            className="flex-1 w-full border-0"
            allow="fullscreen"
          />
        </div>
      )}
    </>
  )
}
