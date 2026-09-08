import { config } from '../config/env.js'
import { apiClient } from './apiClient.js'
import * as engagementRepository from '../repositories/engagementRepository.js'
import { recordActivity } from '../repositories/activityRepository.js'

const COMMENT_MAX_LENGTH = 280
const COMMENT_MIN_LENGTH = 3

export const engagementRules = {
  commentMaxLength: COMMENT_MAX_LENGTH,
  commentMinLength: COMMENT_MIN_LENGTH,
}

export function validateComment({ authorName, body }) {
  const errors = {}
  const trimmedBody = body?.trim() ?? ''
  const trimmedName = authorName?.trim() ?? ''

  if (trimmedName.length > 40) {
    errors.authorName = 'Name must be 40 characters or fewer.'
  }

  if (trimmedBody.length < COMMENT_MIN_LENGTH) {
    errors.body = `Please write at least ${COMMENT_MIN_LENGTH} characters.`
  } else if (trimmedBody.length > COMMENT_MAX_LENGTH) {
    errors.body = `Comments cannot exceed ${COMMENT_MAX_LENGTH} characters.`
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    values: {
      authorName: trimmedName,
      body: trimmedBody,
    },
  }
}

export const engagementService = {
  getLikeState(productId) {
    if (config.useMock) {
      return engagementRepository.getLikeState(productId)
    }
    return apiClient(`/products/${productId}/like`)
  },
  async toggleLike(productId) {
    const result = config.useMock
      ? await engagementRepository.toggleLike(productId)
      : await apiClient(`/products/${productId}/like`, { method: 'POST' })

    recordActivity({
      type: result.liked ? 'like' : 'unlike',
      productId,
      mock: true,
    })
    return result
  },
  listComments(productId) {
    if (config.useMock) {
      return engagementRepository.listComments(productId)
    }
    return apiClient(`/products/${productId}/comments`)
  },
  async addComment(payload) {
    const validation = validateComment(payload)
    if (!validation.valid) {
      const error = new Error('Comment validation failed')
      error.details = validation.errors
      throw error
    }

    const comment = config.useMock
      ? await engagementRepository.addComment({
          productId: payload.productId,
          ...validation.values,
        })
      : await apiClient(`/products/${payload.productId}/comments`, {
          method: 'POST',
          body: JSON.stringify(validation.values),
        })

    recordActivity({
      type: 'comment',
      productId: payload.productId,
      mock: true,
    })
    return comment
  },
  async shareProduct({ productId, channel, url }) {
    if (!config.useMock) {
      await apiClient(`/products/${productId}/share`, {
        method: 'POST',
        body: JSON.stringify({ channel, url }),
      })
    }

    recordActivity({
      type: 'share',
      productId,
      channel,
      url,
      mock: true,
    })

    return { recorded: true, mock: true }
  },
}
