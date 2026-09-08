import { Link } from 'react-router-dom'

export function AccountPage() {
  return (
    <div className="page narrow">
      <header className="page-hero">
        <p className="eyebrow">Account</p>
        <h1>Sign in is not active yet</h1>
        <p>
          Login, signup, and protected routes are scheduled for a later sprint. This page is a customer-navigation
          placeholder only.
        </p>
      </header>
      <p className="mock-note">No passwords are collected on this page.</p>
      <Link className="button button--copper" to="/products">
        Continue browsing
      </Link>
    </div>
  )
}
