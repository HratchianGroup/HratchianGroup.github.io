# Adding news

1. Copy templates/news-post.md into src/content/news/ and give it a descriptive filename, such as 2026-09-29-new-graduate-students.md.
2. Edit the title, date (YYYY-MM-DD), categories, and short summary at the top. Keep dates and text in quotation marks. Apostrophes are fine inside double quotes; escape a double quote as \" if needed.
3. Write the article below the second --- line. Separate paragraphs with blank lines. Links use [visible text](https://example.com).
4. Optional: add a photo to public/images/news/ and insert ![Description of the photo](/images/news/filename.jpg) into the article. No photo is required.
5. Change draft: true to draft: false when ready. Drafts are omitted from both the listing and individual pages, including local previews. Set false locally to preview, then set true again if you are not ready to publish.
6. Run npm run dev to preview /news/. Run npm run build before staging, committing, and pushing.

The filename becomes the page address: /news/2026-09-29-new-graduate-students/. Keep published filenames stable to preserve links. Posts appear newest first based on date, with ties sorted by title. Categories are optional labels; category filter pages are not included. Future dates do not schedule publication: any post with draft: false is published on the next build.

## Migrated content

The 27 original posts, dated June 17, 2019 through April 5, 2024, were copied from Group_Website.tgz, including 15 photos referenced by the individual posts. Monthly and category archives contained duplicates of these posts and were not migrated as separate articles. Historical wording, dates, and external links are preserved; external destinations have not been reverified. Some migrated articles retain inline HTML for original links and photographs; new articles can use ordinary Markdown.

## Files

- src/content/news/: one editable Markdown file per post.
- public/images/news/: photographs.
- src/content.config.ts: fields and collection definition.
- src/pages/news/index.astro: newest-first listing.
- src/pages/news/[id].astro: individual article layout.
- templates/news-post.md: template (outside the published collection).

All pages use the shared site header and footer. News follows Home in navigation; Resources remains last.
