import type { Project } from '../data/content'

type Props = { project: Project }

export function ProjectCard({ project }: Props) {
  const liveLabel = project.liveUrl.includes('npmjs.com')
    ? 'npm'
    : project.liveUrl.includes('github.com')
      ? 'Repository'
      : 'Live'

  return (
    <article className="project-card">
      <a
        className="project-thumb"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={project.imageUrl} alt={project.imageAlt} loading="lazy" />
      </a>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-meta">{project.description}</p>
        {project.note ? <p className="project-note">{project.note}</p> : null}
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {liveLabel}
          </a>
          {project.privateRepo ? (
            <span className="project-note" style={{ fontStyle: 'normal' }}>
              Private repository
            </span>
          ) : project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
