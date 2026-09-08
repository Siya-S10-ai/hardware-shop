import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { MobileNav } from './MobileNav.jsx'

export function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
