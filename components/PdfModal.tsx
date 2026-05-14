'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

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
          className="fixed inset-0 z-[200] flex flex-col"
          style={{ background: 'rgba(0,0,0,0.92)' }}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between bg-white px-4 sm:px-6 shrink-0 shadow-md" style={{ minHeight: '56px' }}>
            <p className="text-sm font-semibold tracking-wide truncate pr-4" style={{ color: 'var(--text)' }}>
              {title}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors shrink-0 min-h-[40px]"
              aria-label="閉じる"
            >
              <X className="w-4 h-4" />
              <span>閉じる</span>
            </button>
          </div>

          {/* PDF iframe — fills all remaining viewport height */}
          <iframe
            src={src}
            title={title}
            className="flex-1 w-full border-0 block"
            allow="fullscreen"
          />
        </div>
      )}
    </>
  )
}
