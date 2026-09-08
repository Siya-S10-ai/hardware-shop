export function AdminHomePage() {
  return (
    <div className="admin-page">
      <p className="eyebrow">Sprint 0 foundation</p>
      <h1>Admin workspace</h1>
      <p>
        Navigation for dashboard, products, users, activity, discounts, and site settings is in place. Those tools are
        not implemented in this sprint.
      </p>
      <div className="admin-cards">
        <article>
          <h2>Products</h2>
          <p>Catalogue management will land with the admin epic.</p>
        </article>
        <article>
          <h2>Activity</h2>
          <p>Mock engagement events are already recorded in memory on the customer site.</p>
        </article>
        <article>
          <h2>Security</h2>
          <p>Logout and sessions are deferred. Do not treat this layout as an authenticated area.</p>
        </article>
      </div>
    </div>
  )
}
