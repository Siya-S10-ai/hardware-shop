import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { shareTokenService } from '../../services/shareTokenService.js'

export function TokenBanner() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [result, setResult] = useState(
    token ? { status: 'processing', message: 'Checking this mock share token…' } : null,
  )

  useEffect(() => {
    let cancelled = false

    if (!token) {
      setResult(null)
      return undefined
    }

    setResult({ status: 'processing', message: 'Checking this mock share token…' })
    shareTokenService.inspect(token).then((inspection) => {
      if (!cancelled) {
        setResult(inspection)
      }
    })

    return () => {
      cancelled = true
    }
  }, [token])

  if (!result) {
    return null
  }

  return (
    <aside className={`token-banner token-banner--${result.status}`} role="status">
      <p className="eyebrow">Mock token handling</p>
      <p>{result.message}</p>
      <p className="hint">
        Frontend token checks are simulated. A production system would exchange this token on the server and create a
        session there.
      </p>
    </aside>
  )
}
