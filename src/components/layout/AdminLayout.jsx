import { NavLink, Outlet } from 'react-router-dom'

const adminLinks = [
  { to: '/admin', label: 'Dashboard', enabled: true },
  { to: '/admin/products', label: 'Products', enabled: false },
  { to: '/admin/categories', label: 'Categories', enabled: false },
  { to: '/admin/users', label: 'Users', enabled: false },
  { to: '/admin/activity', label: 'Activity', enabled: false },
  { to: '/admin/discounts', label: 'Discounts', enabled: false },
  { to: '/admin/settings', label: 'Site Settings', enabled: false },
  { to: '/admin/account', label: 'Account', enabled: false },
]

export function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <p className="brand-inline">Hardware &amp; Steel</p>
        <p className="eyebrow">Admin foundation</p>
        <nav aria-label="Admin">
          {adminLinks.map((link) =>
            link.enabled ? (
              <NavLink key={link.to} to={link.to} end>
                {link.label}
              </NavLink>
            ) : (
              <span key={link.to} className="nav-disabled" title="Scheduled for a later sprint">
                {link.label}
              </span>
            ),
          )}
        </nav>
        <NavLink to="/" className="button button--ghost">
          Back to catalogue
        </NavLink>
      </aside>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  )
}
