import { config } from '../config/env.js'
import { apiClient } from './apiClient.js'
import * as shareTokenRepository from '../repositories/shareTokenRepository.js'

export const shareTokenService = {
  createMockToken() {
    if (config.useMock) {
      return shareTokenRepository.createMockShareToken()
    }
    return apiClient('/auth/share-token', { method: 'POST' })
  },
  inspect(token) {
    if (config.useMock) {
      return shareTokenRepository.inspectMockToken(token)
    }
    return apiClient('/auth/token-exchange', {
      method: 'POST',
      body: JSON.stringify({ token }),
    })
  },
}
