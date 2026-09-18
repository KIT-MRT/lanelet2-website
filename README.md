# Lanelet2 website

Public hub for the [Lanelet2](https://github.com/fzi-forschungszentrum-informatik/Lanelet2) HD-map library: official resources, addons, datasets, research, Autoware tooling, and community work.

This is a **barebones** first version. Most catalog entries are labeled placeholders so we can iterate on structure and design before filling content.

## Stack

- [Astro 4](https://astro.build/) (static)
- [Tailwind CSS 3](https://tailwindcss.com/)
- GitHub Pages via GitHub Actions (`https://kit-mrt.github.io/lanelet2-website/`)

Same visual family as [KITScenes](https://kitscenes.com) (KIT green, navy, Fira Sans). Content is data-driven, not hardcoded in page markup.

## Local development

Needs Node 18+ (Node 22 is fine).

```bash
npm install
npm run dev
```

Dev server: `http://localhost:4321/lanelet2-website/` — the `base` path matches GitHub Pages. `npm run build && npm run preview` is the production check.

## Adding a catalog card

Edit [`src/data/entries.ts`](src/data/entries.ts). Each object is one teaser:

| Field | Purpose |
|---|---|
| `id` | URL slug (`/addons/josm-plugin`) |
| `category` | One of the ids in [`src/data/categories.ts`](src/data/categories.ts) |
| `title`, `teaser` | Card copy |
| `media` | `{ type: 'image' \| 'video', src: 'images/…' }` — files live in `public/` |
| `href` + `external: true` | Card links out |
| `page: true` | Card links to an internal page; optional `detail` paragraphs and `repo` |
| `placeholder: true` | Dashed stub (not a finished listing) |

To add a **category**, append it in `src/data/categories.ts` (keep `categoryIds` in sync). Homepage sections and `/[category]/` listings are generated from that list.

Official GitHub / docs / PyPI URLs live in [`src/data/site.ts`](src/data/site.ts).

## GitHub Pages

Intended remote: `https://github.com/KIT-MRT/lanelet2-website`.

1. Create the empty GitHub repo (do not initialize with a README).
2. Push `main`.
3. Repo **Settings → Pages → Source: GitHub Actions**.

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds with `npm ci` and deploys `dist/`.

If the repo name changes, update `base` in [`astro.config.mjs`](astro.config.mjs) to `/<new-name>` (no trailing slash). Every internal link already uses `import.meta.env.BASE_URL`.

## License

The **source code** of this website (Astro, TypeScript, CSS, and markup) is licensed under the [MIT License](LICENSE).

That grant does **not** cover third-party or institutional assets in `public/`, including:

- KIT and FZI wordmarks and logos
- Any image or video content

Those remain the property of their respective owners. Lanelet2, KIT, and FZI names and logos are not licensed for use in a way that implies another site is the official project hub.

