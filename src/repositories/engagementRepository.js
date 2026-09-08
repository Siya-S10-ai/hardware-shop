import { seedComments } from '../data/comments.js'
import { products } from '../data/products.js'
import { mockDelay } from './mockDelay.js'

const comments = seedComments.map((comment) => ({ ...comment }))
const likedProductIds = new Set()
const likeCounts = new Map(products.map((product) => [product.id, product.likes]))
let commentSequence = comments.length

export async function getLikeState(productId) {
  await mockDelay()
  return {
    liked: likedProductIds.has(productId),
    count: likeCounts.get(productId) ?? 0,
  }
}

export async function toggleLike(productId) {
  await mockDelay()

  const currentCount = likeCounts.get(productId) ?? 0
  const alreadyLiked = likedProductIds.has(productId)

  if (alreadyLiked) {
    likedProductIds.delete(productId)
    likeCounts.set(productId, Math.max(0, currentCount - 1))
  } else {
    likedProductIds.add(productId)
    likeCounts.set(productId, currentCount + 1)
  }

  return {
    liked: likedProductIds.has(productId),
    count: likeCounts.get(productId) ?? 0,
  }
}

export function getLikeCountSync(productId) {
  return likeCounts.get(productId) ?? 0
}

export async function listComments(productId) {
  await mockDelay()
  return comments
    .filter((comment) => comment.productId === productId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((comment) => ({ ...comment }))
}

export async function addComment({ productId, authorName, body }) {
  await mockDelay()
  commentSequence += 1
  const comment = {
    id: `cmt-${String(commentSequence).padStart(3, '0')}`,
    productId,
    authorName: authorName.trim() || 'Visitor',
    body: body.trim(),
    createdAt: new Date().toISOString(),
  }
  comments.unshift(comment)
  return { ...comment }
}

export function getCommentCountSync(productId) {
  return comments.filter((comment) => comment.productId === productId).length
}
