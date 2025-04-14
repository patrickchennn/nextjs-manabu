
import db from '@/lib/db'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ title: string }>
}

export default async function Page({ params }: PageProps) {
  'use cache'

  const { title } = await params

  const result = await db.query(
    'SELECT * FROM articles WHERE title = $1 LIMIT 1',
    [title]
  )
  // console.log("result=",result)

  const article = result.rows[0]

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold text-red-500">Article not found.</h2>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-6">{article.description}</p>
      <article className="prose max-w-none">{article.body}</article>
    </div>
  )
}
