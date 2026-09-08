import { config } from '../config/env.js'

export async function apiClient(path, options = {}) {
  const url = `${config.apiBaseUrl}${path}`
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  })

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}
