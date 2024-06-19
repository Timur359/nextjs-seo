import { IArticle } from "@/app/types/article.types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: IArticle[] = await response.json();

  const articleEntries: MetadataRoute.Sitemap = articles.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/article/${id}`,
    // lastModified: article.updateAt
    // changeFrequency
    priority: 0.6,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...articleEntries,
  ];
}
