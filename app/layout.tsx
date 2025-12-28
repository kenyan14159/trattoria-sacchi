import type { Metadata } from "next";
import { Cinzel, Lato, Noto_Sans_JP } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// サイトのベースURL（本番環境に合わせて変更してください）
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trattoria-sacchi.jp";

export const metadata: Metadata = {
  // 基本メタデータ
  title: {
    default: "Trattoria Sacchi（トラットリア・サッチ）| 富山市のイタリアンレストラン",
    template: "%s | Trattoria Sacchi",
  },
  description:
    "富山県富山市のイタリアンレストラン「トラットリア・サッチ」。隣接するサッチ農園で朝採れした有機野菜を使用し、五感で味わう美食体験をお届けします。ランチ・ディナー営業、テラス席（ペット可）、記念日・パーティに最適。",
  keywords: [
    "トラットリア・サッチ",
    "Trattoria Sacchi",
    "イタリアン",
    "イタリア料理",
    "富山市",
    "富山県",
    "レストラン",
    "ランチ",
    "ディナー",
    "パスタ",
    "ピザ",
    "有機野菜",
    "自家農園",
    "サッチ農園",
    "テラス席",
    "ペット可",
    "記念日",
    "パーティ",
    "ワイン",
    "氷見牛",
    "富山インター",
  ],
  authors: [{ name: "Trattoria Sacchi" }],
  creator: "Trattoria Sacchi",
  publisher: "Trattoria Sacchi",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // アイコン設定
  icons: {
    icon: [
      { url: "/sacchi.png", sizes: "32x32", type: "image/png" },
      { url: "/sacchi.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/sacchi.png",
    apple: [{ url: "/sacchi.png", sizes: "180x180", type: "image/png" }],
  },

  // OGP (Open Graph Protocol) 設定
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "Trattoria Sacchi（トラットリア・サッチ）",
    title: "Trattoria Sacchi | 富山市のイタリアンレストラン - 五感で味わう美食の物語",
    description:
      "「美食の大地」「五感で味わう、食卓への物語」。隣接するサッチ農園で朝採れした有機野菜を使い、すべてのお客様に幸せな時間をお届けするイタリアンレストラン。富山インター近く、テラス席ペット可、記念日・パーティに最適。",
    images: [
      {
        url: "/sacchi_.jpg",
        width: 1200,
        height: 630,
        alt: "Trattoria Sacchi（トラットリア・サッチ）- 富山市のイタリアンレストラン",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card 設定
  twitter: {
    card: "summary_large_image",
    title: "Trattoria Sacchi | 富山市のイタリアンレストラン",
    description:
      "隣接するサッチ農園の朝採れ有機野菜を使用。五感で味わう美食体験をお届けします。ランチ・ディナー営業中。",
    images: ["/sacchi_.jpg"],
    creator: "@trattoria_sacchi",
    site: "@trattoria_sacchi",
  },

  // ロボット設定
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 検証タグ（必要に応じてIDを設定）
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // その他のメタデータ
  category: "restaurant",
  classification: "Italian Restaurant",
};

// 構造化データ（JSON-LD）
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: "Trattoria Sacchi（トラットリア・サッチ）",
      alternateName: "トラットリア・サッチ",
      description:
        "「美食の大地」「五感で味わう、食卓への物語」。隣接するサッチ農園で朝採れした有機野菜を使い、すべてのお客様に幸せな時間をお届けするイタリアンレストラン。",
      url: siteUrl,
      telephone: "076-461-5277",
      email: "",
      image: `${siteUrl}/sacchi.png`,
      logo: `${siteUrl}/sacchi.png`,
      priceRange: "¥¥",
      servesCuisine: ["イタリア料理", "Italian"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "二俣446-1",
        addressLocality: "富山市",
        addressRegion: "富山県",
        postalCode: "939-8185",
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.6769,
        longitude: 137.2115,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "11:30",
          closes: "15:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "17:30",
          closes: "23:00",
        },
      ],
      hasMenu: {
        "@type": "Menu",
        hasMenuSection: [
          {
            "@type": "MenuSection",
            name: "ランチ",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "サッチプレートランチ",
                description: "日替わりパスタ＆チキンのフリット",
              },
            ],
          },
          {
            "@type": "MenuSection",
            name: "パスタ",
            hasMenuItem: [
              { "@type": "MenuItem", name: "ペペロンチーノ" },
              { "@type": "MenuItem", name: "ディナーパスタ" },
            ],
          },
          {
            "@type": "MenuSection",
            name: "メイン",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "氷見牛サーロインステーキ",
                description: "200g",
              },
            ],
          },
          {
            "@type": "MenuSection",
            name: "デザート",
            hasMenuItem: [
              { "@type": "MenuItem", name: "本日のドルチェ" },
              { "@type": "MenuItem", name: "ジェラート" },
            ],
          },
        ],
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "テラス席", value: true },
        { "@type": "LocationFeatureSpecification", name: "ペット可", value: true },
        { "@type": "LocationFeatureSpecification", name: "完全禁煙", value: true },
        { "@type": "LocationFeatureSpecification", name: "無料Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "無料駐車場", value: true },
      ],
      paymentAccepted: ["Visa", "Mastercard", "JCB", "American Express", "PayPay", "d払い", "楽天ペイ", "au PAY", "交通系ICカード"],
      currenciesAccepted: "JPY",
      acceptsReservations: true,
      smokingAllowed: false,
      sameAs: [
        "https://www.instagram.com/trattoria_sacchi/",
        "https://www.facebook.com/trattoria.sacchi/?locale=ja_JP",
        "https://tabelog.com/toyama/",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "サッチマルシェ",
      description: "店舗向かいにて自家野菜のテイクアウトグルメを販売",
      isPartOf: { "@id": `${siteUrl}/#restaurant` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Trattoria Sacchi（トラットリア・サッチ）",
      description: "富山市のイタリアンレストラン",
      publisher: { "@id": `${siteUrl}/#restaurant` },
      inLanguage: "ja-JP",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* 追加のメタタグ */}
        <meta name="geo.region" content="JP-16" />
        <meta name="geo.placename" content="富山市" />
        <meta name="geo.position" content="36.6769;137.2115" />
        <meta name="ICBM" content="36.6769, 137.2115" />
      </head>
      <body
        className={`${cinzel.variable} ${lato.variable} ${notoSansJP.variable} antialiased bg-white text-stone-900 selection:bg-primary-red/20 selection:text-primary-red`}
      >
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
