import db from "@/lib/db";
import { editArticle, editArticleRedirect } from "./actions";

type PageProps = {
  params: Promise<{ title: string }>
}
export default async function Page({ params }: PageProps) {
  const { title } = await params

  const result = await db.query(
    'SELECT * FROM articles WHERE title = $1 LIMIT 1',
    [title]
  )
  // console.log("result=",result)

  const article = result.rows[0]

  const editArticleById = editArticle.bind(null, article.id)
  const editArticleByIdAndRedirect = editArticleRedirect.bind(null, article.id)

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8 text-center">Edit Article: {article.title}</h1>
      
      <form action={editArticleById} className="space-y-6 bg-white shadow-md p-8 rounded-2xl border">
      {/* <form action={(fd: FormData) => editArticle(fd,article.id)} className="space-y-6 bg-white shadow-md p-8 rounded-2xl border"> */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            name="title"
            type="text"
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            name="description"
            type="text"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
            Body
          </label>
          <textarea
            name="body"
            rows={6}
            className="w-full px-4 py-2 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <button
          formAction={editArticleByIdAndRedirect}
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition"
        >
          Submit and redirect
        </button>
      </form>
    </div>
  )
}
