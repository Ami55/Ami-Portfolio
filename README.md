# Ami Saeednia — SEO Strategist Portfolio

Vercel-ready Next.js portfolio for Ami Saeednia.

## Blog editor

The site uses Keystatic to edit Markdown articles in this GitHub repository. The public blog keeps its existing Next.js templates, stylesheet, and article URLs.

### Connect the hosted editor

1. Create a free Keystatic Cloud account and a team/project for this portfolio.
2. Connect only `Ami55/Ami-Portfolio` to the Keystatic GitHub app.
3. The connected Cloud project identifier is `seo-girl/portfolio`. Its primary URL is `https://www.seogirl.ca`.
4. In the Vercel project, set `NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT` to `seo-girl/portfolio` and redeploy. This identifier is public; do not put a token or password in it.
5. Open `https://www.seogirl.ca/keystatic` and sign in.

The production editor remains on a setup screen until the Cloud project is configured. Local development without that variable uses local files instead of GitHub.

### Publish an article

Open **Blog posts → Add**. Enter the title, URL slug, description, category, and publication date; write or paste the article and add images with the image toolbar button. Use Heading 2 for main sections and Heading 3 for subsections. The article title is shown automatically above the body.

New articles default to **Draft**. Save to keep the article out of the public blog and sitemap. The repository is public, so a saved draft is still readable on GitHub. For confidential drafts, write outside the repository until ready to publish.

Set **Publication status → Published**, then save to the production branch (`main`). Vercel deploys the updated blog and sitemap. The date field controls the displayed date and ordering; it does not schedule publication. Leave the reading-time override empty for new articles to calculate reading time from the body.

Keep existing URL slugs unchanged. To retain the FAQ accordion, add a Heading 2 called **Frequently Asked Questions**, then each question in a bold paragraph followed by its answer. Images are saved in `public/blog/images/<article-slug>/` and remain in GitHub.

### Content migration

Existing articles now have valid YAML metadata and filenames matching their existing public slugs. Their text, titles, metadata, dates, categories, order, and reading-time estimates were preserved. Original image URLs remain available, with copies in the editor's per-article folders. The renderer supports the rich-text editor's headings, images, lists, emphasis, quotes, code, and tables.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Update the existing GitHub and Vercel site

1. Use the existing `Ami55/Ami-Portfolio` repository and Vercel project.
2. Replace the repository source files with this package. Replace the entire `content/blog` folder: old numbered article files must be removed, because the migrated articles use their existing URL slugs as filenames. Do not simply add the migrated articles beside the old ones.
3. Commit all changes, including both dependency lockfiles and the new image folders.
4. In the existing Vercel project, open Settings → Environment Variables. Add `NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT` with value `seo-girl/portfolio` for Production (and Preview if needed). Set it before the deployment builds, or redeploy afterward.
5. Deploy the updated `main` branch. Keep the existing domain and project settings.
6. Open `https://www.seogirl.ca/keystatic` and sign in with GitHub. Check an existing article and the sitemap before publishing a new article.

The Cloud account and repository connection are configured. This source package has been tested locally, but the hosted editor login and publishing flow still need verification after deployment.
