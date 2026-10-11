# Fazilverse search visibility fixes

Prepared for https://github.com/Anufazil/Fazilverse at commit ad380a1.
These files have been changed and verified locally. They are NOT deployed yet.

## Apply the changes

Replace these three files in your existing repository, preserving their locations:
- index.html
- public/robots.txt
- public/sitemap.xml

Commit the files to the branch connected to your Vercel production deployment. If automatic deployments are enabled, Vercel will build the update; otherwise deploy it from Vercel. Wait for a successful deployment.

## What changed

- Fixed the placeholder YOUR_DOMAIN.com in robots.txt and sitemap.xml.
- Updated the page title and description to connect Anu Fazil P with Fazilverse.
- Added WebSite and Person structured data, including the alternate name Anu Fazil and existing public profile links.
- Added the site name and absolute image URLs to sharing metadata.

The existing design and application behavior are unchanged. The sitemap intentionally lists the homepage, which is the target for these name searches.

## Tell Google about the website

1. Open https://search.google.com/search-console/ and sign in.
2. Add a URL-prefix property: https://fazilverse.vercel.app/
3. Verify ownership. For the HTML-tag method, copy the exact verification meta tag Google provides into the head of index.html, deploy, and click Verify. Keep that tag after verification. Alternatively, put Google's downloaded verification HTML file in public/, deploy, and verify.
4. Open Sitemaps and submit sitemap.xml.
5. Open URL Inspection, enter https://fazilverse.vercel.app/, test the live URL, and request indexing.
6. Check the Page indexing and Performance reports later to see indexing status and actual search queries.

After deployment, confirm these URLs contain fazilverse.vercel.app rather than YOUR_DOMAIN.com:
- https://fazilverse.vercel.app/robots.txt
- https://fazilverse.vercel.app/sitemap.xml

Link the portfolio from your GitHub and LinkedIn profiles using your real name and the Fazilverse brand. This can help people and crawlers discover it.

Google decides whether and where a page appears. Crawling may take days to weeks, and indexing or a first-place ranking is not guaranteed.

## Validation completed

- Production build: npm run build passed.
- Production structured data parsed successfully.
- Production sitemap XML parsed and matched the live homepage URL.
- robots.txt referenced the correct sitemap.
- Social preview image existed in the build output.
- git diff --check passed.

## Google documentation

- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/site-names
