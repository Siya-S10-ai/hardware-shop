import { Link } from 'react-router-dom'
import { ProductImage } from '../ui/ProductImage.jsx'
import { StockBadge } from '../ui/StockBadge.jsx'

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card__media">
        <ProductImage src={product.image} alt={product.name} />
      </Link>
      <div className="product-card__body">
        <p className="eyebrow">
          <Link to={`/categories/${product.categorySlug}`}>{product.categoryName}</Link>
        </p>
        <h3>
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="product-card__summary">{product.shortDescription}</p>
        <div className="product-card__meta">
          <StockBadge status={product.stockStatus} />
          <p className="price">
            {product.priceLabel}
            <span>placeholder</span>
          </p>
        </div>
      </div>
    </article>
  )
}
