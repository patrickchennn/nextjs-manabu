'use server'

import db from '@/lib/db'
import { redirect } from 'next/navigation'

export async function createArticle(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const body = formData.get('body') as string

  await db.query(
    'INSERT INTO articles (title, description, body) VALUES ($1, $2, $3)',
    [title, description, body]
  )

  redirect(`/${title}`)
}
