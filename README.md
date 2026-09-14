# Jeffrey Boman — Personal Site

Personal site for a CS major, deployed from **[Pikas3/jeffreyboman.github.io](https://github.com/Pikas3/jeffreyboman.github.io)**.

Live URL after Pages is enabled: **[https://pikas3.github.io/jeffreyboman.github.io/](https://pikas3.github.io/jeffreyboman.github.io/)**

## Fill in your info

Edit one file:

```text
src/content.ts
```

Optional resume: add `public/resume.pdf`, then set `links.resume` to `'/resume.pdf'`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to `main` on `Pikas3/jeffreyboman.github.io`, then:

**Settings → Pages → Source: GitHub Actions**

The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
