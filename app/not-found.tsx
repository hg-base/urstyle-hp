import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] py-20 px-4 text-center">
      <div
        className="text-8xl md:text-9xl font-bold mb-4 select-none"
        style={{ color: 'var(--accent)', opacity: 0.15 }}
      >
        404
      </div>
      <h1
        className="text-2xl md:text-3xl font-bold tracking-wide mb-4"
        style={{ color: 'var(--text)' }}
      >
        ページが見つかりません
      </h1>
      <p
        className="text-base mb-10 max-w-sm leading-relaxed"
        style={{ color: 'var(--muted)' }}
      >
        お探しのページは削除されたか、URLが変更された可能性があります。
      </p>
      <Link href="/" className="btn-primary min-h-[44px]">
        トップページへ戻る
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
