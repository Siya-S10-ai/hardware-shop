import { useEffect, useState } from 'react'
import { engagementService } from '../../services/engagementService.js'
import { pluralize } from '../../lib/format.js'

export function LikeButton({ productId, initialCount = 0 }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(initialCount)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let cancelled = false
    engagementService.getLikeState(productId).then((state) => {
      if (!cancelled) {
        setLiked(state.liked)
        setCount(state.count)
      }
    })
    return () => {
      cancelled = true
    }
  }, [productId])

  async function handleClick() {
    if (busy) {
      return
    }

    const previous = { liked, count }
    const nextLiked = !liked
    setLiked(nextLiked)
    setCount((value) => (nextLiked ? value + 1 : Math.max(0, value - 1)))
    setBusy(true)

    try {
      const result = await engagementService.toggleLike(productId)
      setLiked(result.liked)
      setCount(result.count)
    } catch {
      setLiked(previous.liked)
      setCount(previous.count)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      type="button"
      className={`like-button${liked ? ' is-liked' : ''}`}
      onClick={handleClick}
      aria-pressed={liked}
      disabled={busy}
    >
      <span aria-hidden="true">{liked ? '●' : '○'}</span>
      {liked ? 'Liked' : 'Like'}
      <strong>
        {count} {pluralize(count, 'like')}
      </strong>
    </button>
  )
}
