import { STOCK_STATUS, STOCK_LABELS } from '../../lib/stock.js'

export function ProductFilters({ categories, values, onChange }) {
  function update(field, value) {
    onChange({ ...values, [field]: value })
  }

  return (
    <div className="filters">
      <label>
        Category
        <select value={values.categorySlug} onChange={(event) => update('categorySlug', event.target.value)}>
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Availability
        <select value={values.stockStatus} onChange={(event) => update('stockStatus', event.target.value)}>
          <option value="">Any stock status</option>
          {Object.entries(STOCK_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Keywords
        <input
          type="search"
          value={values.query}
          onChange={(event) => update('query', event.target.value)}
          placeholder="Filter by name, SKU, spec…"
        />
      </label>
    </div>
  )
}

export const DEFAULT_FILTERS = {
  categorySlug: '',
  stockStatus: '',
  query: '',
}

export { STOCK_STATUS }
