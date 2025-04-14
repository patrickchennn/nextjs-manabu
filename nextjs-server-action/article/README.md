## Local Develoment

1. Install dependencies.
```bash
npm run install
```

2. Setup local PostgreSQL. Use the available data from `articles.sql`.
```bash
psql -d nextjs_server_action_article -f articles.sql
```
3. `.env` is needed. See `.env.example` as guidance.
4. Run the program.
```bash
npm run dev
```