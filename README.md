# Hi 👋🏼, thanks for stopping by

## Portfolio

- **Current (React)**: [gonzalovidal.dev](https://www.gonzalovidal.dev/) — source in [`new-portfolio/`](new-portfolio/), production build output in the repository root.
- **Classic (vanilla)**: [gonzalovidal.dev/old/](https://www.gonzalovidal.dev/old/) — [`old/index.html`](old/index.html), [`css/estilos.css`](css/estilos.css), [`index.js`](index.js).
- **Tech blog**: [`blog/blog.html`](blog/blog.html)

## New portfolio — develop and build

```bash
cd new-portfolio
npm install
npm run dev
```

Production build (writes to a temporary `.react-build/`, then publishes the generated `index.html`, `assets/`, and public assets to the repository root for GitHub Pages at `/`):

```bash
cd new-portfolio
npm run build
```

Vite is configured with `base: '/'` and `build.outDir: '../.react-build'`. The `npm run build` script runs [`new-portfolio/scripts/publish-root-build.mjs`](new-portfolio/scripts/publish-root-build.mjs), which copies the safe build outputs into the repository root and removes `.react-build/`.

## Classic site — architecture

**Static portfolio** built with vanilla web technologies:

- **Frontend**: HTML5, CSS3 (BEM-style classes), vanilla JavaScript (ES6+)
- **Features**: Dark/light mode, responsive layout, scroll animations, project highlights
- **Blog**: Educational content with syntax highlighting (Prism.js)
- **Deployment**: GitHub Pages with custom domain ([`CNAME`](CNAME))
