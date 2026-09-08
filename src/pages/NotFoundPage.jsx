import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="page narrow">
      <header className="page-hero">
        <p className="eyebrow">404</p>
        <h1>That aisle does not exist</h1>
        <p>The page you requested is not part of Hardware &amp; Steel.</p>
      </header>
      <Link className="button button--copper" to="/">
        Return home
      </Link>
    </div>
  )
}
