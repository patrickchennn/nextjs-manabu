'use server'

import db from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function editArticle(articleId: number,formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const body = formData.get('body') as string

  await db.query(
    'UPDATE articles SET title = $1, description = $2, body = $3 WHERE id = $4',
    [title, description, body, articleId]
  )

  revalidatePath("/[title]", "page")
}

export async function editArticleRedirect(articleId: number,formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const body = formData.get('body') as string

  await db.query(
    'UPDATE articles SET title = $1, description = $2, body = $3 WHERE id = $4',
    [title, description, body, articleId]
  )

  revalidatePath("/[title]", "page")
  redirect(`/${title}`)
}