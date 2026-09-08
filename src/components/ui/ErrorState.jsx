export function ErrorState({ message = 'Something went wrong. Please try again.', onRetry }) {
  return (
    <div className="state-panel state-panel--error" role="alert">
      <h2>Unable to load</h2>
      <p>{message}</p>
      {onRetry ? (
        <button type="button" className="button button--ghost" onClick={onRetry}>
          Try again
        </button>
      ) : null}
    </div>
  )
}
