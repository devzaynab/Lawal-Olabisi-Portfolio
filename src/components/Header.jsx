import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    if (window.matchMedia('(max-width: 640px)').matches) {
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="site-header" id="home">
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label="Go to the home page">
          <span>Olabisi</span>
          <span className="brand-dot">.</span>
        </NavLink>

        <nav
          className={`main-nav${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.path} end={item.path === '/'} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink className="header-cta" to="/contact" onClick={closeMenu}>
          Let&apos;s talk
        </NavLink>

        <button
          ref={menuButtonRef}
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
