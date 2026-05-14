'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'トップ', href: '/' },
  { label: '私たちについて', href: '/#about' },
  { label: '事業内容', href: '/#services' },
  { label: '会社概要', href: '/company' },
  { label: '採用情報', href: '/recruit' },
  { label: 'SDGsへの取り組み', href: '/sdgs' },
  {
    label: 'お問い合わせ',
    href: 'https://forms.gle/RkNefMUiLMJBbRgV8',
    external: true,
  },
]

// Section IDs that correspond to anchor nav links on the homepage
const SECTIONS = ['about', 'services']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Scroll-spy: track which section is currently in view
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const update = () => {
      const offset = window.scrollY + 100 // header height buffer
      let current = ''
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) current = id
      }
      setActiveSection(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [pathname])

  const isActive = (href: string) => {
    if (href.startsWith('http')) return false
    if (href === '/#about') return pathname === '/' && activeSection === 'about'
    if (href === '/#services') return pathname === '/' && activeSection === 'services'
    if (href.includes('#')) return false
    if (href === '/') return pathname === '/' && activeSection === ''
    return pathname.startsWith(href)
  }

  const solid = scrolled || open

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: solid ? 'rgba(10,10,10,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="shrink-0 min-h-[44px] flex items-center">
            <Image
              src="/images/logo.webp"
              alt="URSTYLE ENTERPRISE"
              width={148}
              height={56}
              className="h-8 w-auto sm:h-9 md:h-11"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                {...(l.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className={`nav-link text-sm px-3 py-2 tracking-wide transition-colors ${
                  isActive(l.href)
                    ? 'active text-white'
                    : l.external
                    ? 'text-white/80 hover:text-[var(--accent-hover)]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — animated height */}
      <div
        className="lg:hidden overflow-hidden"
        style={{
          maxHeight: open ? '520px' : '0',
          transition: 'max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <nav className="flex flex-col px-4 pb-6 pt-2 gap-0">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              {...(l.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={`text-sm px-3 py-4 tracking-wide transition-colors border-b border-white/5 last:border-0 min-h-[44px] flex items-center ${
                isActive(l.href)
                  ? 'text-white font-medium'
                  : l.external
                  ? 'text-white/80 hover:text-[var(--accent-hover)]'
                  : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
