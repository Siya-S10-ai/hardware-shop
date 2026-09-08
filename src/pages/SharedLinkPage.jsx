import { Link, useSearchParams } from 'react-router-dom'
import { TokenBanner } from '../components/engagement/TokenBanner.jsx'
import { MOCK_SHARE_TOKENS } from '../data/shareTokens.js'

export function SharedLinkPage() {
  const [params] = useSearchParams()
  const token = params.get('token')

  return (
    <div className="page narrow">
      <header className="page-hero">
        <p className="eyebrow">Personalized sharing</p>
        <h1>Mock token detection</h1>
        <p>
          This screen exists so missing, valid, expired, and invalid tokens can be demonstrated without implying real
          authentication.
        </p>
      </header>

      {!token ? (
        <div className="token-banner token-banner--missing" role="status">
          <p className="eyebrow">Missing token</p>
          <p>No token query parameter is present. Add <code>?token=</code> to try a mock value.</p>
        </div>
      ) : (
        <TokenBanner />
      )}

      <ul className="token-demo-list">
        <li>
          <Link to={`/shared?token=${MOCK_SHARE_TOKENS.valid}`}>Valid mock token</Link>
        </li>
        <li>
          <Link to={`/shared?token=${MOCK_SHARE_TOKENS.expired}`}>Expired mock token</Link>
        </li>
        <li>
          <Link to={`/shared?token=${MOCK_SHARE_TOKENS.invalid}`}>Invalid mock token</Link>
        </li>
        <li>
          <Link to="/shared">Missing token</Link>
        </li>
      </ul>
    </div>
  )
}
