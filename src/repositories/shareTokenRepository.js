import { MOCK_SHARE_TOKENS, MOCK_TOKEN_PREFIX_LIVE } from '../data/shareTokens.js'
import { mockDelay } from './mockDelay.js'

function randomSuffix() {
  return Math.random().toString(36).slice(2, 10)
}

export async function createMockShareToken() {
  await mockDelay()
  return `${MOCK_TOKEN_PREFIX_LIVE}${randomSuffix()}`
}

export async function inspectMockToken(token) {
  await mockDelay()

  if (!token) {
    return { status: 'missing', message: 'No token was supplied on this link.' }
  }

  if (token === MOCK_SHARE_TOKENS.expired || token.startsWith('mock_expired_')) {
    return {
      status: 'expired',
      message: 'This mock token has expired. It would need a new backend-issued token.',
    }
  }

  if (token === MOCK_SHARE_TOKENS.valid || token.startsWith(MOCK_TOKEN_PREFIX_LIVE)) {
    return {
      status: 'valid',
      message: 'Mock token recognised. This is not a real authenticated session.',
    }
  }

  return {
    status: 'invalid',
    message: 'This mock token is not recognised.',
  }
}
