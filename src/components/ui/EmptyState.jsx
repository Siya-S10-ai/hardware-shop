export function EmptyState({ title, message, action }) {
  return (
    <div className="state-panel" role="status">
      <h2>{title}</h2>
      <p>{message}</p>
      {action}
    </div>
  )
}
