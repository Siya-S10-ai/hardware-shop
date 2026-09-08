export function formatZar(amount) {
  if (amount == null || Number.isNaN(amount)) {
    return 'Price on request'
  }

  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(amount)
}

export function formatDate(isoString) {
  return new Intl.DateTimeFormat('en-ZA', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(isoString))
}

export function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural
}
