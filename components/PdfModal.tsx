'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!open) return
    const scrollY = window.scrollY
    document.documentElement.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      window.scrollTo(0, scrollY)
    }
  }, [open])

  const overlay = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
      }}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div style={{ flexShrink: 0, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px' }}>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="閉じる"
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: 'none',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <X style={{ width: 24, height: 24, color: '#fff' }} strokeWidth={2.5} />
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        <iframe
          src={src}
          title={title}
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          allow="fullscreen"
        />
      </div>
    </div>
  )

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

      {mounted && open && createPortal(overlay, document.body)}
    </>
  )
}
