# littlebearbbb.github.io

A bilingual Astro blog for logs, coding notes, games, and world discovery.

## Features

- Chinese and English entry points
- Content collections powered by Markdown and MDX
- Logs, projects, a now page, tags, and categories
- Optional cover images for log posts
- Pagination-ready log archive
- RSS feeds at `/zh/rss.xml` and `/en/rss.xml`
- Comments powered by `utterances`
- GitHub Pages deployment via Actions

## Local development

```bash
npm install
npm run dev
```

## Writing

Create new logs in `src/content/logs/`.

- Use `src/content/logs/_template.zh.mdx` for Chinese posts
- Use `src/content/logs/_template.en.mdx` for English posts
- Set `draft: false` when a post is ready to publish
- Put cover files in `public/covers/`

## Project structure

```text
public/
  covers/
src/
  components/
  content/
    logs/
    pages/
    projects/
  data/
  layouts/
  lib/
  pages/
```
