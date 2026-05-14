'use client'

import { useState, useEffect, useCallback } from 'react'
import { FileText, X } from 'lucide-react'

// A4 at 96 dpi
const A4_W = 794
const A4_H = 1123

type Props = {
  src: string
  title: string
  label?: string
  className?: string
  style?: React.CSSProperties
}

export default function PdfModal({ src, title, label, className = '', style }: Props) {
  const [open, setOpen] = useState(false)
  const [scale, setScale] = useState(1)

  const calcScale = useCallback(() => {
    const sidePad = 20   // left + right margin
    const topPad  = 64   // room for the × button
    const botPad  = 20
    const availW = window.innerWidth  - sidePad * 2
    const availH = window.innerHeight - topPad - botPad
    setScale(Math.min(availW / A4_W, availH / A4_H, 1))
  }, [])

  useEffect(() => {
    if (!open) return

    // iOS-safe scroll lock
    const scrollY = window.scrollY
    document.documentElement.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top    = `-${scrollY}px`
    document.body.style.left   = '0'
    document.body.style.right  = '0'
    document.body.style.overflow = 'hidden'

    calcScale()
    window.addEventListener('resize', calcScale, { passive: true })

    return () => {
      window.removeEventListener('resize', calcScale)
      document.documentElement.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top      = ''
      document.body.style.left     = ''
      document.body.style.right    = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
    }
  }, [open, calcScale])

  return (
    <>
      {/* Trigger button */}
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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Close button — top-right, floating on black backdrop */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 active:bg-white/35 transition-colors"
            aria-label="閉じる"
          >
            <X className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>

          {/*
            Outer div reserves the exact scaled footprint so flex centering works.
            The iframe itself is rendered at full A4 size, then shrunk via CSS transform.
            This keeps the PDF crisp rather than rendering at low resolution.
          */}
          <div
            style={{
              width:  A4_W * scale,
              height: A4_H * scale,
              flexShrink: 0,
            }}
          >
            <iframe
              src={src}
              title={title}
              style={{
                width:           A4_W,
                height:          A4_H,
                border:          'none',
                display:         'block',
                transform:       `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </>
  )
}
