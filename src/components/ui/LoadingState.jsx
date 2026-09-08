export function LoadingState({ label = 'Loading…' }) {
  return (
    <div className="state-panel" role="status" aria-live="polite">
      <div className="state-spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  )
}

export function SkeletonGrid({ count = 8 }) {
  return (
    <div className="product-grid" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="skeleton-card" />
      ))}
    </div>
  )
}
