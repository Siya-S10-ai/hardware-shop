import { Link } from 'react-router-dom'
import { ProductImage } from '../ui/ProductImage.jsx'

export function CategoryCard({ category }) {
  return (
    <article className="category-card">
      <Link to={`/categories/${category.slug}`}>
        <ProductImage src={category.image} alt="" className="category-card__image" />
        <div className="category-card__body">
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      </Link>
    </article>
  )
}
