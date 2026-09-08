export const STOCK_STATUS = {
  IN_STOCK: 'in_stock',
  LOW_STOCK: 'low_stock',
  OUT_OF_STOCK: 'out_of_stock',
}

export const STOCK_LABELS = {
  [STOCK_STATUS.IN_STOCK]: 'In stock',
  [STOCK_STATUS.LOW_STOCK]: 'Low stock',
  [STOCK_STATUS.OUT_OF_STOCK]: 'Out of stock',
}

export function getStockLabel(status) {
  return STOCK_LABELS[status] ?? 'Availability unknown'
}
