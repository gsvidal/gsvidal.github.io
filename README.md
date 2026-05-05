# Hi 👋🏼, thanks for stopping by

## Portfolio

- **New (React)**: [gonzalovidal.dev/new/](https://www.gonzalovidal.dev/new/) — source in [`new-portfolio/`](new-portfolio/), production build output in [`new/`](new/).
- **Classic (vanilla)**: [gonzalovidal.dev](https://www.gonzalovidal.dev/) — [`index.html`](index.html), [`css/estilos.css`](css/estilos.css), [`index.js`](index.js).
- **Tech blog**: [`blog/blog.html`](blog/blog.html)

## New portfolio — develop and build

```bash
cd new-portfolio
npm install
npm run dev
```

Production build (writes to `../new` for GitHub Pages at `/new/`):

```bash
cd new-portfolio
npm run build
```

Vite is configured with `base: '/new/'` and `build.outDir: '../new'`. Commit the updated `new/` folder when you deploy.

## Classic site — architecture

**Static portfolio** built with vanilla web technologies:

- **Frontend**: HTML5, CSS3 (BEM-style classes), vanilla JavaScript (ES6+)
- **Features**: Dark/light mode, responsive layout, scroll animations, project highlights
- **Blog**: Educational content with syntax highlighting (Prism.js)
- **Deployment**: GitHub Pages with custom domain ([`CNAME`](CNAME))
