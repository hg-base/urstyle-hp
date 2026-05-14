'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { FileText, X } from 'lucide-react'

// A4 native dimensions at 96dpi
const A4_W = 794
const A4_H = 1123
const BTN_H = 60

// PDF viewers add ~5% side margin — zoom in slightly to clip it
const VIEWER_ZOOM = 1.08

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

  useEffect(() => { setMounted(true) }, [])

  const recalc = useCallback(() => {
    setScale((window.innerWidth / A4_W) * VIEWER_ZOOM)
  }, [])

  const handleOpen = useCallback(() => {
    setScale((window.innerWidth / A4_W) * VIEWER_ZOOM)
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
    window.addEventListener('resize', recalc, { passive: true })
    return () => {
      window.removeEventListener('resize', recalc)
      document.documentElement.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top      = ''
      document.body.style.left     = ''
      document.body.style.right    = ''
      window.scrollTo(0, scrollY)
    }
  }, [open, recalc])

  // Horizontal centering: shift left by half the overflow so margins are clipped equally
  const visualW  = A4_W * scale
  const shiftX   = (visualW - (typeof window !== 'undefined' ? window.innerWidth : visualW)) / 2

  const overlay = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#000', display: 'flex', flexDirection: 'column' }}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* × button */}
      <div style={{ height: BTN_H, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px' }}>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="閉じる"
          style={{
            width: 48, height: 48,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 12,
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: 'none', cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <X style={{ width: 24, height: 24, color: '#fff' }} strokeWidth={2.5} />
        </button>
      </div>

      {/* PDF area: overflow:hidden clips the zoom-in overhang */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: -shiftX,
            width: A4_W,
            height: A4_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
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
