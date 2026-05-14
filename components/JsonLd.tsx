const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://urstyle-ent.com/#organization',
      name: 'ユアスタイル合同会社',
      alternateName: 'URSTYLE LLC.',
      url: 'https://urstyle-ent.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://urstyle-ent.com/images/logo.webp',
        width: 148,
        height: 56,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'apps@urstyle-ent.com',
        areaServed: 'JP',
        availableLanguage: 'Japanese',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '新横浜2丁目5-13-701',
        addressLocality: '横浜市港北区',
        addressRegion: '神奈川県',
        postalCode: '222-0033',
        addressCountry: 'JP',
      },
      foundingDate: '2020-06-10',
      sameAs: ['https://en-gage.net/urstyle-recruit/'],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://urstyle-ent.com/#localbusiness',
      name: 'ユアスタイル合同会社',
      description:
        '軽貨物配送と大型家電設置を専門とする企業です。神奈川・東京エリアを中心に、EC・宅配便配送から洗濯機・冷蔵庫などの大型家電設置まで対応しています。',
      url: 'https://urstyle-ent.com',
      email: 'apps@urstyle-ent.com',
      image: 'https://urstyle-ent.com/images/hero-bg.webp',
      priceRange: '¥¥',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '新横浜2丁目5-13-701',
        addressLocality: '横浜市港北区',
        addressRegion: '神奈川県',
        postalCode: '222-0033',
        addressCountry: 'JP',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.5062,
        longitude: 139.6185,
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: '神奈川県' },
        { '@type': 'AdministrativeArea', name: '東京都' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'サービス一覧',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '貨物軽自動車運送',
              description:
                '軽貨物車両によるEC・宅配便配送、スポット・ルート配送。神奈川県（相模原・平塚・横浜・大和・厚木）および東京都エリア対応。',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '大型家電設置・据え付け',
              description:
                '引越しに伴う洗濯機・冷蔵庫などの大型家電設置・接続・動作確認まで対応。東京都町田市・神奈川県相模原市・厚木市・愛甲郡エリア。',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://urstyle-ent.com/#website',
      url: 'https://urstyle-ent.com',
      name: 'ユアスタイル合同会社',
      description:
        '神奈川・東京エリアの軽貨物配送と大型家電設置 ユアスタイル合同会社公式サイト',
      publisher: { '@id': 'https://urstyle-ent.com/#organization' },
      inLanguage: 'ja',
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
