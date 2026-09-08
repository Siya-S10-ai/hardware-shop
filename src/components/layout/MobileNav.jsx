import { NavLink } from 'react-router-dom'
import { categoryService } from '../../services/categoryService.js'
import { useAsync } from '../../hooks/useAsync.js'

export function MobileNav({ open, onClose }) {
  const { data: categories } = useAsync(() => categoryService.list(), [])

  if (!open) {
    return null
  }

  return (
    <div className="mobile-nav-backdrop" onClick={onClose}>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" onClick={(event) => event.stopPropagation()}>
        <NavLink to="/" end onClick={onClose}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={onClose}>
          Catalogue
        </NavLink>
        <NavLink to="/categories" onClick={onClose}>
          All categories
        </NavLink>
        <NavLink to="/account" onClick={onClose}>
          Account
        </NavLink>
        <NavLink to="/shared" onClick={onClose}>
          Shared link
        </NavLink>
        <p className="eyebrow">Shop by category</p>
        <div className="mobile-categories">
          {(categories ?? []).map((category) => (
            <NavLink key={category.id} to={`/categories/${category.slug}`} onClick={onClose}>
              {category.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
