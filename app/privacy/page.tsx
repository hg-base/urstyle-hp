import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    'ユアスタイル合同会社のプライバシーポリシーページです。個人情報の取り扱いについてご確認いただけます。',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="プライバシーポリシー" subtitle="Privacy Policy" />

      <article className="py-20 md:py-28 bg-white">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-sm"
          style={{ color: 'var(--muted)', lineHeight: '1.9' }}
        >
          <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
            ユアスタイル合同会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーを定め、適切に取り扱います。
          </p>

          {[
            {
              heading: '1. 個人情報の定義',
              body: '本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律（個人情報保護法）第2条第1項に定める個人情報、すなわち生存する個人に関する情報であって、氏名・生年月日・住所・電話番号・メールアドレス等により特定の個人を識別できるものをいいます。',
            },
            {
              heading: '2. 個人情報の取得',
              body: '当社は、お問い合わせ・採用応募・業務依頼等に際してお客様が自発的にご提供される情報のみを取得します。不正な手段による個人情報の取得は行いません。',
            },
            {
              heading: '3. 利用目的',
              body: '当社が取得した個人情報は、以下の目的のために利用します。\n・お問い合わせへの対応および回答\n・業務依頼・見積もりの対応\n・採用選考に関する連絡\n・当社サービスに関するご案内\n・法令に基づく手続きへの対応',
            },
            {
              heading: '4. 第三者への提供',
              body: '当社は、以下のいずれかに該当する場合を除き、ご本人の同意なく第三者に個人情報を提供しません。\n・法令に基づく場合\n・人の生命・身体・財産の保護のために必要がある場合\n・公衆衛生の向上または児童の健全な育成のために特に必要がある場合\n・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに協力する必要がある場合',
            },
            {
              heading: '5. 安全管理措置',
              body: '当社は、個人情報の漏洩・滅失・毀損を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業者に対して、適切な監督を行います。',
            },
            {
              heading: '6. 開示・訂正・削除',
              body: 'ご本人から個人情報の開示・訂正・追加・削除・利用停止をご請求いただいた場合は、合理的な期間内に対応いたします。ご請求は下記お問い合わせ先までご連絡ください。',
            },
            {
              heading: '7. Cookieの使用',
              body: '当社ウェブサイトでは、利便性の向上・アクセス解析のためにCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることができますが、一部の機能がご利用いただけない場合があります。',
            },
            {
              heading: '8. アクセス解析',
              body: '当社ウェブサイトでは、Google Analyticsを使用してアクセス情報を収集・分析する場合があります。Googleのプライバシーポリシーについては、Google社のウェブサイトをご確認ください。',
            },
            {
              heading: '9. プライバシーポリシーの変更',
              body: '当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは当ウェブサイトに掲示した時点から効力を生じるものとします。',
            },
            {
              heading: '10. お問い合わせ',
              body: '個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。\n\nユアスタイル合同会社\nメール：apps@urstyle-ent.com\n受付時間：月〜土 9:00〜17:00（日祝・年末年始除く）',
            },
          ].map((sec) => (
            <section key={sec.heading} className="mb-10">
              <h2
                className="text-base font-bold tracking-wide mb-3"
                style={{ color: 'var(--text)' }}
              >
                {sec.heading}
              </h2>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {sec.body}
              </p>
            </section>
          ))}

          <p className="text-xs mt-12 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
            制定日：2025年11月6日<br />
            ユアスタイル合同会社
          </p>
        </div>
      </article>
    </>
  )
}
