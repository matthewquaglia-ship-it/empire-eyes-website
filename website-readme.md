# Empire Eyes — Website README

## Overview

Static site for **www.empire-eyes.com** built with Astro 5.x.
Hosted on **GitHub Pages** with automatic deployment via GitHub Actions.

- **Live URL:** https://www.empire-eyes.com
- **GitHub repo:** https://github.com/matthewquaglia-ship-it/empire-eyes-website
- **Local folder:** `/Users/matthewquaglia/Documents/just a my docs folder/empire eyes/Website`

---

## Tech Stack

| Tool | Purpose |
| ---- | ------- |
| Astro 5.x | Static site generator |
| CSS (vanilla) | All styling, no frameworks |
| GitHub Actions | Auto-deploy on push |
| GitHub Pages | Hosting |
| GoDaddy | Domain DNS |

---

## Project Structure

```
Website/
├── public/
│   ├── images/
│   │   └── hero-bg.jpg          # Hero background (staircase still from In Time MV)
│   ├── fonts/
│   │   └── ARCADE.TTF           # Pixel display font used for titles
│   ├── CNAME                    # Custom domain — www.empire-eyes.com
│   ├── robots.txt               # Search engine crawl rules
│   └── favicon.png
├── src/
│   ├── data/
│   │   └── links.ts             # ← ALL CONTENT LIVES HERE
│   ├── layouts/
│   │   └── Layout.astro         # HTML head, meta tags, OG, Twitter card
│   ├── pages/
│   │   └── index.astro          # Main page template
│   └── styles/
│       └── global.css           # All CSS
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deploy workflow
└── astro.config.mjs             # Astro config (site URL, sitemap)
```

---

## How to Edit Content

**All site content is managed from one file:**

```
src/data/links.ts
```

### Add a new release

Append an object to the `releases` array. The hero, releases section, and Listen section all update automatically.

```ts
{
  title: "Release Title",
  type: "Single",              // Single | Album | EP
  year: 2025,
  datePublished: "2025-06-01", // Full date for SEO structured data
  genre: "Alternative / Future Pop",
  artwork: "https://...",      // Spotify CDN image URL or /images/filename.jpg
  lore: "Optional lore text.", // Omit if no lore yet. Use \n\n for paragraphs.
  platforms: [
    { name: "Spotify",       url: "https://open.spotify.com/..." },
    { name: "Apple Music",   url: "https://music.apple.com/..." },
    { name: "YouTube Music", url: "https://music.youtube.com/..." },
    { name: "TIDAL",         url: "https://tidal.com/..." },
    { name: "Bandcamp",      url: "https://empireeyes.bandcamp.com/..." },
    { name: "SoundCloud",    url: "https://soundcloud.com/..." },
    { name: "Deezer",        url: "https://deezer.page.link/..." },
  ],
}
```

> The most recently added release (last in the array) automatically becomes the hero release and the Listen section target.

### Add a new video

Append to the `videos` array. YouTube thumbnail is fetched automatically using the video ID.

```ts
{ id: "YouTubeVideoId", title: "Song Title", label: "Music Video", year: 2025 }
```

### Update social links

Edit the `socialLinks` array.

### Update streaming artist profile links (Listen section)

Edit the `artistLinks` array.

### Update subscribe link

Edit `artist.subscribeUrl` — currently points to `https://empireeyesmusic.substack.com`.

---

## How to Get Spotify Artwork URLs

Use the Spotify oEmbed endpoint (no API key needed):

```
https://open.spotify.com/oembed?url=https://open.spotify.com/album/YOUR_ALBUM_ID
```

The response includes a `thumbnail_url` field with the CDN image URL.

---

## Deploying Changes

```bash
cd "/Users/matthewquaglia/Documents/just a my docs folder/empire eyes/Website"
git add .
git commit -m "describe what you changed"
git push
```

GitHub Actions builds and deploys automatically. Live in ~60 seconds.
Check deploy status at: https://github.com/matthewquaglia-ship-it/empire-eyes-website/actions

---

## Domain Setup

| Record | Type | Name | Value |
| ------ | ---- | ---- | ----- |
| GitHub Pages | A | @ | 185.199.108.153 |
| GitHub Pages | A | @ | 185.199.109.153 |
| GitHub Pages | A | @ | 185.199.110.153 |
| GitHub Pages | A | @ | 185.199.111.153 |
| GitHub Pages | CNAME | www | matthewquaglia-ship-it.github.io |

- DNS managed by **GoDaddy**
- Nameservers: `ns33.domaincontrol.com` / `ns34.domaincontrol.com`
- Custom domain configured in GitHub repo → Settings → Pages

---

## SEO

- Meta title, description, canonical URL — set in `src/layouts/Layout.astro`
- Open Graph + Twitter card tags — in `Layout.astro`
- JSON-LD structured data (MusicGroup + all albums) — generated in `src/pages/index.astro` from `releases` array
- Sitemap — auto-generated at `/sitemap-index.xml` by `@astrojs/sitemap`
- Robots.txt — at `/robots.txt`

---

## Design Reference

- Inspired by: oklama.com, niluferyanya.com
- Brand: black background, white text, ARCADE pixel font, monospace body
- Hero: background image (`public/images/hero-bg.jpg`) — still from In Time music video
- Glitch effect on hero title via CSS `::before` / `::after` pseudoelements

---

## Key CSS Patterns

- Full-width frame with centred content (desktop):
  `padding: max(var(--gutter), calc((100vw - var(--max-w)) / 2))`
- Release dropdown (STREAM / READ): hidden checkbox toggle pattern — no JavaScript
- Video thumbnails: YouTube `mqdefault.jpg` (always available, natively 16:9)

---

## Current Content

### Releases
- **TILT** — Album, 2024 (8 tracks)
- **In Time** — Single, 2023

### Videos
- In Time — Official Music Video, 2024
- Set Me Free — Music Video, 2026
- Satori 悟り — Music Video, 2026

### Subscribe
- Substack: https://empireeyesmusic.substack.com
