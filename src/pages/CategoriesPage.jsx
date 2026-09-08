import { categoryService } from '../services/categoryService.js'
import { useAsync } from '../hooks/useAsync.js'
import { CategoryGrid } from '../components/product/CategoryGrid.jsx'
import { LoadingState } from '../components/ui/LoadingState.jsx'
import { ErrorState } from '../components/ui/ErrorState.jsx'

export function CategoriesPage() {
  const { data, loading, error, retry } = useAsync(() => categoryService.list(), [])

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Yard map</p>
        <h1>Fifteen product categories</h1>
        <p>Start with the trade you need, then drill into stocked items and specifications.</p>
      </header>
      {loading ? <LoadingState label="Loading categories…" /> : null}
      {error ? <ErrorState onRetry={retry} /> : null}
      {data ? <CategoryGrid categories={data} /> : null}
    </div>
  )
}
