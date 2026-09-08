import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categoryService } from '../services/categoryService.js'
import { productService } from '../services/productService.js'
import { useAsync } from '../hooks/useAsync.js'
import { ProductFilters } from '../components/product/ProductFilters.jsx'
import { ProductGrid } from '../components/product/ProductGrid.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { ErrorState } from '../components/ui/ErrorState.jsx'
import { SkeletonGrid } from '../components/ui/LoadingState.jsx'

export function CatalogPage() {
  const [params, setParams] = useSearchParams()
  const filters = useMemo(
    () => ({
      categorySlug: params.get('category') ?? '',
      stockStatus: params.get('stock') ?? '',
      query: params.get('q') ?? '',
    }),
    [params],
  )

  const categoriesState = useAsync(() => categoryService.list(), [])
  const productsState = useAsync(
    () => productService.list(filters),
    [filters.categorySlug, filters.stockStatus, filters.query],
  )

  function handleFilterChange(next) {
    const search = new URLSearchParams()
    if (next.categorySlug) search.set('category', next.categorySlug)
    if (next.stockStatus) search.set('stock', next.stockStatus)
    if (next.query) search.set('q', next.query)
    setParams(search)
  }

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Catalogue</p>
        <h1>All products</h1>
        <p>Filter by category, stock, or keyword. Query values stay in the URL so you can share a filtered view.</p>
      </header>
      {categoriesState.data ? (
        <ProductFilters categories={categoriesState.data} values={filters} onChange={handleFilterChange} />
      ) : null}
      {productsState.loading ? <SkeletonGrid /> : null}
      {productsState.error ? <ErrorState onRetry={productsState.retry} /> : null}
      {productsState.data && productsState.data.length === 0 ? (
        <EmptyState title="No products found" message="Try another category, stock status, or search term." />
      ) : null}
      {productsState.data && productsState.data.length > 0 ? (
        <>
          <p className="result-count">{productsState.data.length} products</p>
          <ProductGrid products={productsState.data} />
        </>
      ) : null}
    </div>
  )
}
