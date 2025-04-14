'use server'

import db from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function deleteArticle(id: number) {
  await db.query('DELETE FROM articles WHERE id = $1', [id])

  // Optional: revalidate the homepage
  revalidatePath('/')
}
