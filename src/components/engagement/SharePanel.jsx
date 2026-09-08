import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Modal } from '../ui/Modal.jsx'
import { engagementService } from '../../services/engagementService.js'
import { shareTokenService } from '../../services/shareTokenService.js'
import { MOCK_SHARE_TOKENS } from '../../data/shareTokens.js'

export function SharePanel({ product, onClose }) {
  const location = useLocation()
  const [message, setMessage] = useState('')
  const [mockToken, setMockToken] = useState('')
  const [busy, setBusy] = useState(false)

  const productUrl = useMemo(() => {
    const origin = window.location.origin
    return `${origin}/products/${product.slug}`
  }, [product.slug])

  const personalizedUrl = mockToken ? `${productUrl}?token=${encodeURIComponent(mockToken)}` : ''

  async function record(channel, url) {
    await engagementService.shareProduct({
      productId: product.id,
      channel,
      url,
    })
  }

  async function copy(text, successText) {
    await navigator.clipboard.writeText(text)
    setMessage(successText)
  }

  async function handleCopyLink() {
    await copy(productUrl, 'Product link copied.')
    await record('copy-link', productUrl)
  }

  async function handleWhatsApp() {
    const text = `Have a look at ${product.name} from Hardware & Steel: ${productUrl}`
    const href = `https://wa.me/?text=${encodeURIComponent(text)}`
    await record('whatsapp', productUrl)
    window.open(href, '_blank', 'noopener,noreferrer')
    setMessage('WhatsApp share window opened.')
  }

  async function handleNativeShare() {
    if (!navigator.share) {
      setMessage('This browser does not support the Share API. Copy the link instead.')
      return
    }
    await navigator.share({
      title: product.name,
      text: product.shortDescription,
      url: productUrl,
    })
    await record('native-share', productUrl)
    setMessage('Shared with the device share sheet.')
  }

  async function handleGenerateToken() {
    setBusy(true)
    try {
      const token = await shareTokenService.createMockToken()
      setMockToken(token)
      setMessage('Mock token created. This is not real authentication.')
    } finally {
      setBusy(false)
    }
  }

  async function handleCopyPersonalized() {
    if (!personalizedUrl) {
      return
    }
    await copy(personalizedUrl, 'Personalized mock link copied.')
    await record('personalized-link', personalizedUrl)
  }

  return (
    <Modal title="Share this product" onClose={onClose}>
      <p className="mock-note">
        Sharing is a frontend mock. Tokens in the URL are demonstration values only and do not sign anyone in.
      </p>
      <div className="share-actions">
        <button type="button" className="button button--copper" onClick={handleCopyLink}>
          Copy product link
        </button>
        <button type="button" className="button button--ghost" onClick={handleWhatsApp}>
          Share on WhatsApp
        </button>
        <button type="button" className="button button--ghost" onClick={handleNativeShare}>
          Device share
        </button>
      </div>

      <section className="share-token-block">
        <h3>Personalized mock link</h3>
        <p>
          Current page: <code>{location.pathname}</code>
        </p>
        <button type="button" className="button button--steel" onClick={handleGenerateToken} disabled={busy}>
          {busy ? 'Generating…' : 'Generate mock token'}
        </button>
        {mockToken ? (
          <>
            <p>
              Mock token: <code>{mockToken}</code>
            </p>
            <p>
              Preview URL: <code>{personalizedUrl}</code>
            </p>
            <button type="button" className="button button--ghost" onClick={handleCopyPersonalized}>
              Copy personalized link
            </button>
          </>
        ) : null}
        <p className="hint">
          Demo tokens: valid <code>{MOCK_SHARE_TOKENS.valid}</code>, expired{' '}
          <code>{MOCK_SHARE_TOKENS.expired}</code>, invalid <code>{MOCK_SHARE_TOKENS.invalid}</code>.
        </p>
      </section>

      {message ? (
        <p className="success-text" role="status">
          {message}
        </p>
      ) : null}
    </Modal>
  )
}
