import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/admin/*", "/profile"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/settings"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
  };
}
