'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
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
  const [mounted, setMounted] = useState(false)

  // Wait for client mount before using createPortal
  useEffect(() => { setMounted(true) }, [])

  const calcScale = useCallback(() => {
    const sidePad = 20
    const topPad  = 64   // space for × button
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
    document.body.style.top      = `-${scrollY}px`
    document.body.style.left     = '0'
    document.body.style.right    = '0'
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

  // Rendered via createPortal so it escapes any CSS transform ancestor
  // (AnimateOnScroll uses transform: translateY which would trap fixed children)
  const overlay = (
    <div
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          9999,
        backgroundColor: '#000',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
      }}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* × button — top-right, floating on black */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="閉じる"
        style={{
          position:        'absolute',
          top:             16,
          right:           16,
          width:           48,
          height:          48,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          borderRadius:    12,
          backgroundColor: 'rgba(255,255,255,0.15)',
          border:          'none',
          cursor:          'pointer',
          zIndex:          10000,
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <X style={{ width: 24, height: 24, color: '#fff' }} strokeWidth={2.5} />
      </button>

      {/* PDF card — centered, scaled to fit 1 A4 page */}
      <div style={{ width: A4_W * scale, height: A4_H * scale, flexShrink: 0 }}>
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

      {/* Portal bypasses the transform stacking context of AnimateOnScroll */}
      {mounted && open && createPortal(overlay, document.body)}
    </>
  )
}
