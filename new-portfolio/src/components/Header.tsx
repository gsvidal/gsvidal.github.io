import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { site } from '../data/content'
import { useTheme } from '../hooks/useTheme'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const menuId = useId()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onMq)
    return () => mq.removeEventListener('change', onMq)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen, closeMenu])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const navLinks = (
    <>
      <li>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
      </li>
      <li>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
      </li>
      <li>
        <a href="#technologies" onClick={closeMenu}>
          Tech
        </a>
      </li>
      <li>
        <a href="#certificates" onClick={closeMenu}>
          Certificates
        </a>
      </li>
      <li>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </li>
    </>
  )

  const externalLinks = (
    <>
      <a className="external-pill" href={site.oldPortfolioPath} onClick={closeMenu}>
        Old Portfolio
      </a>
      <a className="external-pill" href={site.blogPath} onClick={closeMenu}>
        Tech Blog
      </a>
    </>
  )

  const backdrop =
    menuOpen &&
    typeof document !== 'undefined' &&
    createPortal(
      <button
        type="button"
        className="nav-backdrop"
        aria-label="Close menu"
        onClick={closeMenu}
      />,
      document.body,
    )

  return (
    <header className="site-header">
      {backdrop}
      <a className="logo-link" href={`${import.meta.env.BASE_URL}`} onClick={closeMenu}>
        <img
          className="logo-mark"
          src={site.heroImage}
          alt=""
          width={36}
          height={36}
        />
        {site.name}
      </a>

      <div id={menuId} className={`site-header-panel${menuOpen ? ' is-open' : ''}`}>
        <nav aria-label="Primary">
          <ul className="nav-links">{navLinks}</ul>
        </nav>
        <div className="header-actions">{externalLinks}</div>
      </div>

      <div className="header-toolbar">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '\u2600' : '\u263E'}
        </button>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  )
}
