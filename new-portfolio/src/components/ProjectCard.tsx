import { useEffect, useState } from 'react'
import type { Project } from '../data/content'

type Props = { project: Project }

function motionOk() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function ProjectCard({ project }: Props) {
  const { imageUrl, hoverImageUrl, imageAlt } = project
  const [hoverActive, setHoverActive] = useState(false)

  useEffect(() => {
    if (!hoverImageUrl) return
    const preload = new Image()
    preload.src = hoverImageUrl
  }, [hoverImageUrl])

  const thumbSrc =
    hoverActive && hoverImageUrl && motionOk() ? hoverImageUrl : imageUrl

  const showHover = () => {
    if (hoverImageUrl && motionOk()) setHoverActive(true)
  }

  const hideHover = () => setHoverActive(false)

  return (
    <article className="project-card">
      <a
        className="project-thumb"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={showHover}
        onMouseLeave={hideHover}
        onFocus={showHover}
        onBlur={hideHover}
      >
        <img src={thumbSrc} alt={imageAlt} loading="lazy" />
      </a>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-meta">{project.description}</p>
        {project.note ? <p className="project-note">{project.note}</p> : null}
        <div className="project-links">
          {project.isLive ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          ) : null}
          {project.privateRepo ? (
            <span className="project-note" style={{ fontStyle: 'normal', marginTop: '0px' }}>
              Private repository
            </span>
          ) : project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
