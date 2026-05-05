import { site, socialLinks } from '../data/content'

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <p>
        Designed and coded by <strong>me.</strong>
      </p>
      <p>Find me on:</p>
      <ul className="footer-social">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <img src={link.icon} alt="" width={40} height={40} />
            </a>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}>
        <a href={site.domain}>{site.domain.replace('https://', '')}</a>
      </p>
    </footer>
  )
}
