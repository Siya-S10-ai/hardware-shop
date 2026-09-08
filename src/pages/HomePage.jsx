import { Link } from 'react-router-dom'
import { categoryService } from '../services/categoryService.js'
import { productService } from '../services/productService.js'
import { useAsync } from '../hooks/useAsync.js'
import { CategoryGrid } from '../components/product/CategoryGrid.jsx'
import { ProductGrid } from '../components/product/ProductGrid.jsx'
import { LoadingState } from '../components/ui/LoadingState.jsx'
import { ErrorState } from '../components/ui/ErrorState.jsx'
import { SearchInput } from '../components/ui/SearchInput.jsx'

export function HomePage() {
  const categoriesState = useAsync(() => categoryService.list(), [])
  const productsState = useAsync(() => productService.list(), [])

  const featured = (productsState.data ?? []).filter((product) => product.likes >= 20).slice(0, 4)

  return (
    <div className="page">
      <section className="hero-panel">
        <p className="eyebrow">Hardware + steel + construction</p>
        <h1>Materials you can browse with confidence.</h1>
        <p>
          Fifteen trade categories, clear stock status, and product detail built for site work — not a generic storefront
          template.
        </p>
        <SearchInput />
        <div className="hero-actions">
          <Link className="button button--copper" to="/products">
            Open catalogue
          </Link>
          <Link className="button button--ghost" to="/categories">
            View categories
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Shop the yard</p>
          <h2>Product categories</h2>
        </div>
        {categoriesState.loading ? <LoadingState label="Loading categories…" /> : null}
        {categoriesState.error ? (
          <ErrorState onRetry={categoriesState.retry} />
        ) : null}
        {categoriesState.data ? <CategoryGrid categories={categoriesState.data} /> : null}
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Popular on the floor</p>
          <h2>High-interest products</h2>
        </div>
        {productsState.loading ? <LoadingState label="Loading products…" /> : null}
        {productsState.error ? <ErrorState onRetry={productsState.retry} /> : null}
        {featured.length ? <ProductGrid products={featured} /> : null}
      </section>
    </div>
  )
}
