import { FaGithub, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { footerNav, socialLinks } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  'Twitter/X': FaXTwitter,
  WhatsApp: FaWhatsapp,
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <NavLink to="/" className="footer-brand" aria-label="Go to the home page">
            <span>Olabisi</span>
            <span className="brand-dot">.</span>
          </NavLink>

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerNav.map((item) => (
              <NavLink key={item.label} to={item.path} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="footer-socials" aria-label="Social media links">
            {socialLinks.map((item) => {
              const Icon = iconMap[item.label] || FaGithub
              return (
                <a href={item.href} key={item.label} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        <p className="copyright">© {currentYear} Olabisi. All rights reserved.</p>
      </div>
    </footer>
  )
}
