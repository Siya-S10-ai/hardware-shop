import { useState } from 'react'
import { engagementRules, engagementService, validateComment } from '../../services/engagementService.js'

export function CommentForm({ productId, onSubmitted }) {
  const [authorName, setAuthorName] = useState('')
  const [body, setBody] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const remaining = engagementRules.commentMaxLength - body.length

  async function handleSubmit(event) {
    event.preventDefault()
    const validation = validateComment({ authorName, body })
    if (!validation.valid) {
      setErrors(validation.errors)
      return
    }

    setErrors({})
    setStatus('submitting')
    try {
      const comment = await engagementService.addComment({
        productId,
        authorName,
        body,
      })
      setBody('')
      setStatus('success')
      onSubmitted?.(comment)
    } catch (error) {
      setStatus('error')
      setErrors(error.details ?? { body: 'Could not save this comment. Please try again.' })
    }
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit} noValidate>
      <p className="mock-note">Comments are stored in mock frontend state only.</p>
      <label>
        Name <span className="optional">(optional)</span>
        <input
          type="text"
          value={authorName}
          onChange={(event) => setAuthorName(event.target.value)}
          maxLength={40}
          autoComplete="nickname"
        />
        {errors.authorName ? <span className="field-error">{errors.authorName}</span> : null}
      </label>
      <label>
        Comment
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          maxLength={engagementRules.commentMaxLength}
          rows={4}
          required
          aria-invalid={Boolean(errors.body)}
          aria-describedby="comment-help"
        />
        <span id="comment-help" className="char-count">
          {remaining} characters left
        </span>
        {errors.body ? <span className="field-error">{errors.body}</span> : null}
      </label>
      <div className="form-actions">
        <button type="submit" className="button button--copper" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Posting…' : 'Post comment'}
        </button>
        {status === 'success' ? <p className="success-text">Comment posted.</p> : null}
      </div>
    </form>
  )
}
