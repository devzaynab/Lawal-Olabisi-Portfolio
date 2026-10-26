import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header({ navItems }) {
  return (
    <header className="site-header" id="home">
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label="Go to the home page">
          <span>Olabisi</span>
          <span className="brand-dot">.</span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.path} end={item.path === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink className="header-cta" to="/contact">
          Let&apos;s talk
        </NavLink>
      </div>
    </header>
  )
}
