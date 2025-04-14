import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // e.g. postgres://user:pass@localhost:5432/mydb
})

export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
}
