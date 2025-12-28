import { MetadataRoute } from "next";

// 静的エクスポート対応
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trattoria-sacchi.jp";
    const currentDate = new Date();

    return [
        {
            url: siteUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/menu`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/reservation`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
