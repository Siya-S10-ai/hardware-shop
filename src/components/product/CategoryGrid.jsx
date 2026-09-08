import { CategoryCard } from './CategoryCard.jsx'

export function CategoryGrid({ categories }) {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}
