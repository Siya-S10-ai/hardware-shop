import { useProductImage } from '../../hooks/useProductImage.js'

export function ProductImage({ src, alt, className = '' }) {
  const { failed, onError } = useProductImage(src)

  if (failed) {
    return (
      <div className={`media-fallback ${className}`} role="img" aria-label={alt}>
        <span>Hardware &amp; Steel</span>
      </div>
    )
  }

  return <img className={className} src={src} alt={alt} onError={onError} />
}
