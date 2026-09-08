import { formatDate } from '../../lib/format.js'

export function CommentCard({ comment }) {
  return (
    <article className="comment-card">
      <header>
        <h3>{comment.authorName}</h3>
        <time dateTime={comment.createdAt}>{formatDate(comment.createdAt)}</time>
      </header>
      <p>{comment.body}</p>
    </article>
  )
}
