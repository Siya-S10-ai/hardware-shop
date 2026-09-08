import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { productService } from '../services/productService.js'
import { useAsync } from '../hooks/useAsync.js'
import { ProductGrid } from '../components/product/ProductGrid.jsx'
import { SearchInput } from '../components/ui/SearchInput.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { ErrorState } from '../components/ui/ErrorState.jsx'
import { SkeletonGrid } from '../components/ui/LoadingState.jsx'

export function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q') ?? ''
  const normalized = useMemo(() => query.trim(), [query])
  const results = useAsync(() => productService.search(normalized), [normalized])

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Search</p>
        <h1>{normalized ? `Results for “${normalized}”` : 'Search the catalogue'}</h1>
        <SearchInput initialValue={normalized} />
      </header>
      {!normalized ? (
        <EmptyState title="Enter a search term" message="Try steel, IBR, cement, or a SKU such as ST-Y12-6." />
      ) : null}
      {normalized && results.loading ? <SkeletonGrid /> : null}
      {normalized && results.error ? <ErrorState onRetry={results.retry} /> : null}
      {normalized && results.data && results.data.length === 0 ? (
        <EmptyState title="No products found" message="Nothing matched that search in the mock catalogue." />
      ) : null}
      {normalized && results.data && results.data.length > 0 ? (
        <>
          <p className="result-count">{results.data.length} products</p>
          <ProductGrid products={results.data} />
        </>
      ) : null}
    </div>
  )
}
