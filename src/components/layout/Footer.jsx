import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="brand-inline">Hardware &amp; Steel</p>
          <p>Trade-grade materials, presented clearly. Prices shown are placeholders until store confirmation.</p>
        </div>
        <div>
          <h2>Browse</h2>
          <Link to="/products">Full catalogue</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/search">Search</Link>
        </div>
        <div>
          <h2>Account</h2>
          <Link to="/account">Sign in (coming later)</Link>
          <Link to="/admin">Admin foundation</Link>
          <Link to="/shared">Personalized link demo</Link>
        </div>
      </div>
      <p className="copyright">Hardware &amp; Steel — catalogue mockup. No payments in this phase.</p>
    </footer>
  )
}
