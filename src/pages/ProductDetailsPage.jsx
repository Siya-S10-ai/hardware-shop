import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productService } from '../services/productService.js'
import { engagementService } from '../services/engagementService.js'
import { useAsync } from '../hooks/useAsync.js'
import { ProductImage } from '../components/ui/ProductImage.jsx'
import { StockBadge } from '../components/ui/StockBadge.jsx'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { ErrorState } from '../components/ui/ErrorState.jsx'
import { LoadingState } from '../components/ui/LoadingState.jsx'
import { LikeButton } from '../components/engagement/LikeButton.jsx'
import { CommentList } from '../components/engagement/CommentList.jsx'
import { CommentForm } from '../components/engagement/CommentForm.jsx'
import { SharePanel } from '../components/engagement/SharePanel.jsx'
import { TokenBanner } from '../components/engagement/TokenBanner.jsx'
import { RelatedProducts } from '../components/product/RelatedProducts.jsx'

export function ProductDetailsPage() {
  const { slug } = useParams()
  const [shareOpen, setShareOpen] = useState(false)
  const productState = useAsync(() => productService.getBySlug(slug), [slug])
  const relatedState = useAsync(async () => {
    const product = await productService.getBySlug(slug)
    if (!product) {
      return []
    }
    return productService.related(product.id)
  }, [slug])
  const commentsState = useAsync(async () => {
    const product = await productService.getBySlug(slug)
    if (!product) {
      return []
    }
    return engagementService.listComments(product.id)
  }, [slug])

  if (productState.loading) {
    return (
      <div className="page">
        <LoadingState label="Loading product…" />
      </div>
    )
  }

  if (productState.error) {
    return (
      <div className="page">
        <ErrorState onRetry={productState.retry} />
      </div>
    )
  }

  if (!productState.data) {
    return (
      <div className="page">
        <EmptyState
          title="Product not found"
          message="That item is not in the mock catalogue."
          action={
            <Link className="button button--copper" to="/products">
              Back to catalogue
            </Link>
          }
        />
      </div>
    )
  }

  const product = productState.data

  return (
    <div className="page">
      <TokenBanner />
      <article className="product-detail">
        <ProductImage src={product.image} alt={product.name} className="product-detail__image" />
        <div className="product-detail__info">
          <p className="eyebrow">
            <Link to={`/categories/${product.categorySlug}`}>{product.categoryName}</Link>
          </p>
          <h1>{product.name}</h1>
          <p className="sku">SKU {product.sku}</p>
          <StockBadge status={product.stockStatus} />
          <p className="price price--large">
            {product.priceLabel}
            <span>{product.priceNote}</span>
          </p>
          <p>{product.description}</p>
          <div className="product-actions">
            <LikeButton productId={product.id} initialCount={product.likes} />
            <button type="button" className="button button--ghost" onClick={() => setShareOpen(true)}>
              Share
            </button>
          </div>
        </div>
      </article>

      <section className="spec-section" aria-labelledby="spec-heading">
        <h2 id="spec-heading">Specifications</h2>
        <dl className="spec-table">
          {Object.entries(product.specifications).map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="comments-section" aria-labelledby="comments-heading">
        <h2 id="comments-heading">Comments</h2>
        <CommentForm productId={product.id} onSubmitted={() => commentsState.retry()} />
        <CommentList comments={commentsState.data ?? []} loading={commentsState.loading} />
      </section>

      {relatedState.data ? <RelatedProducts products={relatedState.data} /> : null}
      {shareOpen ? <SharePanel product={product} onClose={() => setShareOpen(false)} /> : null}
    </div>
  )
}
