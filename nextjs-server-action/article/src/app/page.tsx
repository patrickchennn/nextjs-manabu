import ArticleCard from "@/components/ArticleCard";
import db from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const query = await db.query(
    "SELECT * FROM articles"
  );

  const articles = query.rows as [
    { id: number; title: string; description: string; body: string }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Articles</h1>
        <Link
          href="/compose-article"
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Article
        </Link>
      </div>

      <ul className="grid gap-6">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id}/>
        ))}
      </ul>
    </main>
  );
}
