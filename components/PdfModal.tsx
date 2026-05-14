'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { FileText, X } from 'lucide-react'

const A4_W = 794
const A4_H = 1123

type Layout = { scale: number; top: number; left: number }

function calcLayout(): Layout {
  const pad    = 12
  const btnH   = 64
  const availW = window.innerWidth  - pad * 2
  const availH = window.innerHeight - btnH - pad
  const scale  = Math.min(availW / A4_W, availH / A4_H, 1)
  const pdfW   = A4_W * scale
  const pdfH   = A4_H * scale
  return {
    scale,
    left: (window.innerWidth  - pdfW) / 2,
    top:  btnH + (availH - pdfH) / 2,
  }
}

type Props = {
  src: string
  title: string
  label?: string
  className?: string
  style?: React.CSSProperties
}

export default function PdfModal({ src, title, label, className = '', style }: Props) {
  const [open, setOpen] = useState(false)
  const [layout, setLayout] = useState<Layout>({ scale: 1, top: 0, left: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const handleOpen = useCallback(() => {
    setLayout(calcLayout())
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const scrollY = window.scrollY
    document.documentElement.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top      = `-${scrollY}px`
    document.body.style.left     = '0'
    document.body.style.right    = '0'
    const onResize = () => setLayout(calcLayout())
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      document.documentElement.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top      = ''
      document.body.style.left     = ''
      document.body.style.right    = ''
      window.scrollTo(0, scrollY)
    }
  }, [open])

  const { scale, top, left } = layout

  const overlay = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#000' }}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="閉じる"
        style={{
          position: 'absolute', top: 12, right: 16,
          width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 12,
          backgroundColor: 'rgba(255,255,255,0.15)',
          border: 'none', cursor: 'pointer',
          zIndex: 10000,
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <X style={{ width: 24, height: 24, color: '#fff' }} strokeWidth={2.5} />
      </button>

      <div
        style={{
          position: 'absolute',
          top,
          left,
          width:  A4_W * scale,
          height: A4_H * scale,
          overflow: 'hidden',
        }}
      >
        <div style={{ width: A4_W, height: A4_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
          <iframe
            src={src}
            title={title}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
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
