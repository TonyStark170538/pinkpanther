# Pink Panther

Pink Panther is a React, Vite, TypeScript, Tailwind CSS, and Express application for a premium lifestyle cafe website. It includes the homepage hero carousel, product pages, music, locations, rewards, and supporting server code.

## Requirements

- Node.js 20 or newer
- pnpm 10.x

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

The dev server runs through the Express entrypoint and serves the Vite client.

## Production Build

```bash
pnpm build
```

The build outputs the client to `dist/public` and the server bundle to `dist/index.js`.

## Production Start

```bash
pnpm start
```

## Quality Checks

```bash
pnpm check
pnpm test
```

## Hero Carousel Images

Hero carousel images live in `client/public/images` and are referenced from `client/src/components/HeroCarousel.tsx` with public paths such as `/images/ad1.png`.

Current hero images:

- `ad1.png`
- `ad3.png`
- `ad5.jpg`
- `ad2.png`
- `ad4.png`
- `ad.png`

After changing images, run `pnpm build` before redeploying so Vite validates the app and copies the public assets into `dist/public/images`.

## Deployment

Use pnpm for installs and builds. Do not commit `package-lock.json`; this project uses `pnpm-lock.yaml` as the single dependency lockfile.
