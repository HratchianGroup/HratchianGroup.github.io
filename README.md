# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Adding site content

### Add a news story

1. Copy [`templates/news-post.md`](templates/news-post.md) to `src/content/news/` and give it a descriptive filename ending in `.md`, such as `2026-09-29-new-graduate-students.md`.
2. Fill in the title, date (`YYYY-MM-DD`), categories, summary, and article text. Keep front matter dates and text in quotation marks.
3. Put optional images in `public/images/news/` and reference them with `/images/news/filename.jpg`.
4. Set `draft: false` to publish the story. Set it to `true` while it is still being prepared.
5. Preview the site with `npm run dev`; the story appears under `/news/` and at `/news/<filename-without-.md>/`.

See [`NEWS-GUIDE.md`](NEWS-GUIDE.md) for the complete news-file format and publication rules.

### Add a publication

Add a new object to the beginning of the `publications` array in [`src/data/publications.ts`](src/data/publications.ts):

```ts
{
  "number": 76,
  "year": 2026,
  "citation": "Author names, “Article title”, <em>Journal Name</em> <strong>volume</strong>, pages (2026).",
  "doi": "10.0000/example"
}
```

- `number` is the publication's chronological site number. Increase it for each new publication; leave gaps or duplicate numbers out.
- `year` determines the year heading; publications are displayed newest-first by year and then number.
- `citation` may contain trusted HTML such as `<em>`, `<strong>`, and `<sub>` for journal formatting.
- `doi` is optional. If provided, omit `https://doi.org/`; the site creates the link automatically.
- `notes` is optional trusted HTML for links, podcasts, or other supplementary material.

### Add a person to the People page

Add an object to the `people` array in [`src/data/people.ts`](src/data/people.ts):

```ts
{
  "id": "first-last",
  "name": "First Last",
  "category": "graduate",
  "photo": "/images/people/first-last.jpg",
  "bio": "A short professional biography."
}
```

- Supported categories are `pi`, `postdoc`, `graduate`, and `undergraduate`; empty categories are hidden.
- Put an optional portrait in `public/images/people/` and use a site-relative path in `photo`.
- `id` should be a unique, descriptive identifier, ideally matching the person's portrait filename without its extension.
- Optional fields include `email`, `office`, `phone`, `website`, `cv`, and `cvLabel`. Put CV files in `public/cv/` and reference them with `/cv/filename.pdf`.
- `bio` may contain trusted HTML links and paragraph breaks for formatted biographies.
- Entries are displayed in file order within their category. Add former members to the `alumni` string array instead.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
