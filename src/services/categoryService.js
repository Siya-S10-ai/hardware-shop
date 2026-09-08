import { config } from '../config/env.js'
import { apiClient } from './apiClient.js'
import * as categoryRepository from '../repositories/categoryRepository.js'

function toQuery(params = {}) {
  const search = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      search.set(key, value)
    }
  })
  const serialized = search.toString()
  return serialized ? `?${serialized}` : ''
}

export const categoryService = {
  list() {
    if (config.useMock) {
      return categoryRepository.listCategories()
    }
    return apiClient(`/categories${toQuery()}`)
  },
  getBySlug(slug) {
    if (config.useMock) {
      return categoryRepository.getCategoryBySlug(slug)
    }
    return apiClient(`/categories/${slug}`)
  },
}
