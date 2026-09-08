import { useState } from 'react'

export function useProductImage(src) {
  const [failed, setFailed] = useState(false)

  return {
    failed: failed || !src,
    onError() {
      setFailed(true)
    },
  }
}
