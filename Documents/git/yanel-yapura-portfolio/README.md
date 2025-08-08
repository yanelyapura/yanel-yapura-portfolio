This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Deploy en GitHub Pages (Project Page)

Está configurado para export estático y despliegue en `https://yanelyapura.github.io/yanel-yapura-portfolio/`.

1) Configuración incluida

- `next.config.ts` con:
  - `output: "export"`
  - `images.unoptimized: true`
  - `basePath` y `assetPrefix` a `/yanel-yapura-portfolio` en producción
- Scripts: `npm run build` y `npm run export` generan `out/`.
- GitHub Actions: `.github/workflows/deploy.yml` publica `out/` en Pages al hacer push a `main`.

2) Pasos para publicar

```bash
git init
git branch -M main
git remote add origin https://github.com/yanelyapura/yanel-yapura-portfolio.git
git add .
git commit -m "feat: inicial"
git push -u origin main
```

3) En GitHub → Settings → Pages

- Source: GitHub Actions
- Espera a que el workflow termine y visita:
  `https://yanelyapura.github.io/yanel-yapura-portfolio/`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
