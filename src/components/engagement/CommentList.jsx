import { CommentCard } from './CommentCard.jsx'
import { EmptyState } from '../ui/EmptyState.jsx'
import { LoadingState } from '../ui/LoadingState.jsx'

export function CommentList({ comments, loading }) {
  if (loading) {
    return <LoadingState label="Loading comments…" />
  }

  if (!comments.length) {
    return (
      <EmptyState
        title="No comments yet"
        message="Be the first to ask a question or share site experience with this product."
      />
    )
  }

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
