import { config } from '../config/env.js'
import { apiClient } from './apiClient.js'
import * as productRepository from '../repositories/productRepository.js'

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

export const productService = {
  list(filters) {
    if (config.useMock) {
      return productRepository.listProducts(filters)
    }
    return apiClient(`/products${toQuery(filters)}`)
  },
  getBySlug(slug) {
    if (config.useMock) {
      return productRepository.getProductBySlug(slug)
    }
    return apiClient(`/products/${slug}`)
  },
  related(productId) {
    if (config.useMock) {
      return productRepository.getRelatedProducts(productId)
    }
    return apiClient(`/products/${productId}/related`)
  },
  search(query) {
    if (config.useMock) {
      return productRepository.searchProducts(query)
    }
    return apiClient(`/products${toQuery({ query })}`)
  },
}
