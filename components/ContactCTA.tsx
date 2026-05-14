import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section
      className="relative py-24 md:py-32 text-white text-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/contact-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-4">
          お問い合わせ
        </h2>
        <div className="section-divider bg-white! mx-auto mb-8" />
        <p className="text-sm md:text-base text-white/85 mb-2">
          配送業務や大型家電設置のご相談など、
        </p>
        <p className="text-sm md:text-base text-white/85 mb-2">
          お気軽にお問い合わせください。
        </p>
        <p className="text-sm md:text-base text-white/85 mb-10">
          業務提携や採用に関するお問い合わせも受け付けています。
        </p>
        <Link
          href="https://forms.gle/RkNefMUiLMJBbRgV8"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto mx-auto"
        >
          お問い合わせフォーム
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
