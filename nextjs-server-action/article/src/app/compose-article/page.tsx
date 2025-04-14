// import { createArticle } from "./actions";

import db from "@/lib/db"
import { redirect } from "next/navigation"

export default function Page() {
  async function createArticle(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const body = formData.get('body') as string
  
    await db.query(
      'INSERT INTO articles (title, description, body) VALUES ($1, $2, $3)',
      [title, description, body]
    )
  
    redirect(`/${title}`)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8 text-center">Compose Article</h1>
      
      <form action={createArticle} className="space-y-6 bg-white shadow-md p-8 rounded-2xl border">
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
      </form>
    </div>
  )
}
