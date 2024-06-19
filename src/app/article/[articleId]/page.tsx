import { IArticle } from "@/app/types/article.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: IArticle[] = await response.json();

  return articles.map(({ id }) => id);
}

async function getArticle({ articleId }: { articleId: string }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );
  const article: IArticle = await response.json();

  if (response.status === 404) return notFound();

  return article;
}

export async function generateMetadata({
  params,
}: {
  params: { articleId: string };
}): Promise<Metadata> {
  const article = await getArticle(params);

  return {
    title: article.title,
    description: article.body,
    // openGraph: {
    //   images: [
    //     {
    //       url: article.imagesUrl
    //     }
    //   ]
    // }
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { articleId: string };
}) {
  const article = await getArticle(params);
  return <div>{article.title}</div>;
}
