import { Link, useParams } from 'react-router-dom'
import { categoryService } from '../services/categoryService.js'
import { productService } from '../services/productService.js'
import { useAsync } from '../hooks/useAsync.js'
import { ProductGrid } from '../components/product/ProductGrid.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { ErrorState } from '../components/ui/ErrorState.jsx'
import { SkeletonGrid } from '../components/ui/LoadingState.jsx'
import { LoadingState } from '../components/ui/LoadingState.jsx'

export function CategoryPage() {
  const { slug } = useParams()
  const categoryState = useAsync(() => categoryService.getBySlug(slug), [slug])
  const productsState = useAsync(() => productService.list({ categorySlug: slug }), [slug])

  if (categoryState.loading) {
    return (
      <div className="page">
        <LoadingState label="Loading category…" />
      </div>
    )
  }

  if (categoryState.error) {
    return (
      <div className="page">
        <ErrorState onRetry={categoryState.retry} />
      </div>
    )
  }

  if (!categoryState.data) {
    return (
      <div className="page">
        <EmptyState
          title="Category not found"
          message="That category is not in the Hardware & Steel catalogue."
          action={
            <Link className="button button--copper" to="/categories">
              View all categories
            </Link>
          }
        />
      </div>
    )
  }

  const category = categoryState.data

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Category</p>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </header>
      {productsState.loading ? <SkeletonGrid count={3} /> : null}
      {productsState.error ? <ErrorState onRetry={productsState.retry} /> : null}
      {productsState.data && productsState.data.length === 0 ? (
        <EmptyState title="Nothing in this bay yet" message="This category has no mock products to show." />
      ) : null}
      {productsState.data && productsState.data.length > 0 ? (
        <ProductGrid products={productsState.data} />
      ) : null}
    </div>
  )
}
