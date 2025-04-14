'use client'

import { useState } from "react"
import { deleteArticle } from "@/app/actions/deleteArticle"
import Link from "next/link"
import { Loader2 } from "lucide-react" // Optional: using an icon spinner from Lucide

interface ArticleCardProps {
  article: {
    id: number
    title: string
    description: string
    body: string
  }
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    const confirm = window.confirm(`Delete article "${article.title}"?`)
    if (!confirm) return

    setIsDeleting(true)

    await new Promise(resolve => setTimeout(resolve, 3000))

    try {
      await deleteArticle(article.id)
      // Optional: trigger a refresh if parent isn't already doing it
      // router.refresh()
    } catch (err) {
      console.error("Failed to delete article:", err)
      alert("Failed to delete the article.")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <li className="relative border rounded-xl p-6 hover:shadow-md transition bg-white overflow-hidden">
      {/* Overlay spinner when deleting */}
      {isDeleting && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
          <Loader2 className="w-6 h-6 animate-spin text-red-500" />
        </div>
      )}

      <h2 className="flex justify-between text-xl font-semibold mb-2">
        <Link href={article.title} target="_blank">
          {article.title}
        </Link>
        <div className="flex gap-2">
          <Link href={`${article.title}/edit`} target="_blank">
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:underline disabled:opacity-50"
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      </h2>
      <p className="text-gray-600">{article.description}</p>
    </li>
  )
}
