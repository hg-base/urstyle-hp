'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { FileText, X } from 'lucide-react'

const A4_W = 794
const A4_H = 1123
const BTN_H = 64

type State = { scale: number; top: number }

function calcState(): State {
  const scale    = window.innerWidth / A4_W
  const availH   = window.innerHeight - BTN_H
  const pdfH     = A4_H * scale
  const top      = Math.max(0, (availH - pdfH) / 2)
  return { scale, top }
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
  const [state, setState] = useState<State>({ scale: 1, top: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const handleOpen = useCallback(() => {
    setState(calcState())
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

    const onResize = () => setState(calcState())
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

  const { scale, top } = state

  const overlay = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#000', display: 'flex', flexDirection: 'column' }}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* × ボタン */}
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

      {/* PDF エリア：overflow:hidden でクリップ */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* A4 ネイティブサイズで描画 → scale で縮小 */}
        <div
          style={{
            position: 'absolute',
            top,
            left: 0,
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
