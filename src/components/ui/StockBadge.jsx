import { getStockLabel } from '../../lib/stock.js'

export function StockBadge({ status }) {
  return <span className={`stock-badge stock-badge--${status}`}>{getStockLabel(status)}</span>
}
