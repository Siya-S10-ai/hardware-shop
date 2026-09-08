import { ProductGrid } from './ProductGrid.jsx'

export function RelatedProducts({ products }) {
  if (!products.length) {
    return null
  }

  return (
    <section className="related-section" aria-labelledby="related-heading">
      <div className="section-heading">
        <p className="eyebrow">More in this range</p>
        <h2 id="related-heading">Related products</h2>
      </div>
      <ProductGrid products={products} />
    </section>
  )
}
