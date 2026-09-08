import { products } from '../data/products.js'
import { categories } from '../data/categories.js'
import { formatZar } from '../lib/format.js'
import { mockDelay } from './mockDelay.js'

function withCategory(product) {
  const category = categories.find((item) => item.id === product.categoryId)
  return {
    ...product,
    categoryName: category?.name ?? 'Uncategorised',
    categorySlug: category?.slug ?? product.categoryId,
    priceLabel: formatZar(product.price),
    priceNote: 'Price placeholder — confirm in store.',
  }
}

function matchesQuery(product, query) {
  if (!query) {
    return true
  }

  const haystack = [
    product.name,
    product.shortDescription,
    product.description,
    product.sku,
    product.categoryName,
    ...Object.values(product.specifications ?? {}),
  ]
    .join(' ')
    .toLowerCase()

  return haystack.includes(query.trim().toLowerCase())
}

export async function listProducts({ categorySlug, stockStatus, query } = {}) {
  await mockDelay()

  const decorated = products.map(withCategory)

  return decorated.filter((product) => {
    const categoryOk = !categorySlug || product.categorySlug === categorySlug
    const stockOk = !stockStatus || product.stockStatus === stockStatus
    const queryOk = matchesQuery(product, query)
    return categoryOk && stockOk && queryOk
  })
}

export async function getProductBySlug(slug) {
  await mockDelay()
  const product = products.find((item) => item.slug === slug)
  return product ? withCategory(product) : null
}

export async function getRelatedProducts(productId, limit = 4) {
  await mockDelay()
  const current = products.find((item) => item.id === productId)
  if (!current) {
    return []
  }

  return products
    .filter((item) => item.categoryId === current.categoryId && item.id !== current.id)
    .slice(0, limit)
    .map(withCategory)
}

export async function searchProducts(query) {
  return listProducts({ query })
}
