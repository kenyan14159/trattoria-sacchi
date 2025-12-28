import { MetadataRoute } from "next";

// 静的エクスポート対応
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trattoria-sacchi.jp";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/private/"],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
            },
            {
                userAgent: "Googlebot-Image",
                allow: "/",
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
