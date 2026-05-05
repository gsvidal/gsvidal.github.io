import { useTheme } from '../hooks/useTheme'
import { site } from '../data/content'

export function Header() {
  const { theme, toggleTheme } = useTheme()

  const internal = (
    <>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#technologies">Tech</a>
      </li>
      <li>
        <a href="#certificates">Certificates</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  )

  return (
    <header className="site-header">
      <a className="logo-link" href={`${import.meta.env.BASE_URL}`}>
        <img
          className="logo-mark"
          src={site.heroImage}
          alt=""
          width={36}
          height={36}
        />
        {site.name}
      </a>
      <nav aria-label="Primary">
        <ul className="nav-links">{internal}</ul>
      </nav>
      <div className="header-actions">
        <a className="external-pill" href={site.oldPortfolioPath}>
          Old Portfolio
        </a>
        <a className="external-pill" href={site.blogPath}>
          Tech Blog
        </a>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '\u2600' : '\u263E'}
        </button>
      </div>
    </header>
  )
}
