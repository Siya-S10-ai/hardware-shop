import { categories } from '../data/categories.js'
import { mockDelay } from './mockDelay.js'

export async function listCategories() {
  await mockDelay()
  return categories.map((category) => ({ ...category }))
}

export async function getCategoryBySlug(slug) {
  await mockDelay()
  const category = categories.find((item) => item.slug === slug)
  return category ? { ...category } : null
}
