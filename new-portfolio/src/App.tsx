import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProjectCard } from './components/ProjectCard'
import {
  about,
  certificates,
  experience,
  featuredProjects,
  moreProjects,
  projectsDisclaimer,
  site,
  technologiesComplementary,
  technologiesMain,
} from './data/content'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section id="about" className="hero">
          <div className="hero-copy">
            <h1>
              {about.headline}{' '}
              <span style={{ color: 'var(--accent)' }}>{site.title}</span>
            </h1>
            <p className="hero-tagline">{about.body}</p>
            <div className="hero-cta-row">
              <a className="btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn-ghost" href={site.oldPortfolioPath}>
                Classic layout
              </a>
              <a className="btn-ghost" href={site.blogPath}>
                Tech blog
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card">
              <img src={site.heroImage} alt="" width={320} height={320} />
            </div>
          </div>
        </section>

        <section id="experience">
          <h2 className="section-heading">Experience</h2>
          <p className="section-lede">
            Teams and roles where I have contributed as a developer and mentor.
          </p>
          <div className="card-grid">
            {experience.map((exp) => (
              <article key={exp.company} className="exp-card">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${exp.company} website`}
                >
                  <img src={exp.logo} alt={exp.logoAlt} height={40} loading="lazy" />
                </a>
                <p className="exp-role">{exp.role}</p>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.85rem' }}
                >
                  {exp.company}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="technologies">
          <h2 className="section-heading">Web technologies</h2>
          <p className="section-lede">
            Tools I reach for often when shipping front-end interfaces and
            collaborating on full-stack deliveries.
          </p>
          <span className="tech-group-label">Main</span>
          <div className="tech-grid">
            {technologiesMain.map((t) => (
              <span key={t.name} className="tech-chip" title={t.name}>
                <img src={t.icon} alt="" width={22} height={22} loading="lazy" />
                {t.name}
              </span>
            ))}
          </div>
          <span className="tech-group-label">Complementary</span>
          <div className="tech-grid">
            {technologiesComplementary.map((t) => (
              <span key={t.name} className="tech-chip" title={t.name}>
                <img src={t.icon} alt="" width={22} height={22} loading="lazy" />
                {t.name}
              </span>
            ))}
          </div>
        </section>

        <section id="certificates">
          <h2 className="section-heading">Certificates</h2>
          <p className="section-lede">
            Selected credentials — click an image to validate or open detail.
          </p>
          <div className="cert-row">
            {certificates.map((c) => (
              <a
                key={`${c.label}-${c.href}`}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-badge"
                title={c.label}
              >
                <span className="sr-only">{c.label}</span>
                <img src={c.image} alt={c.imageAlt} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="section-heading">Projects</h2>
          <p className="section-lede">
            Highlights from React, TypeScript, and full-stack experiments. Hover
            or visit each card to explore the demo or repo.
          </p>
          <div className="project-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
          <p className="disclaimer-box">{projectsDisclaimer}</p>

          <details className="more-projects">
            <summary>More projects ({moreProjects.length})</summary>
            <div className="project-grid">
              {moreProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </details>
        </section>
      </main>
      <Footer />
    </div>
  )
}
