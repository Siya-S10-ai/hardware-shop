import { NavLink, Link } from 'react-router-dom'
import { SearchInput } from '../ui/SearchInput.jsx'

const customerLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Catalogue' },
  { to: '/categories', label: 'Categories' },
  { to: '/account', label: 'Account' },
]

export function Header({ menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={onCloseMenu}>
          <span className="brand-mark" aria-hidden="true">
            HS
          </span>
          <span>
            <strong>Hardware &amp; Steel</strong>
            <em>Building materials catalogue</em>
          </span>
        </Link>

        <div className="header-search">
          <SearchInput compact />
        </div>

        <nav className="header-nav" aria-label="Customer">
          {customerLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={onCloseMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={onToggleMenu}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
