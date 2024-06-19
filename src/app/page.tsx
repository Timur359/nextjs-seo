import { IArticle } from "@/app/types/article.types";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: IArticle[] = await response.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Статьи</h1>
      <div>
        {articles.map((article) => (
          <div className="mt-3">
            <Link href={`/article/${article.id}`}>{article.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
