import { useEffect, useState } from 'react'

export function useAsync(asyncFn, deps = []) {
  const [state, setState] = useState({
    status: 'loading',
    data: null,
    error: null,
  })
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading', data: null, error: null })

    asyncFn()
      .then((data) => {
        if (!cancelled) {
          setState({ status: 'success', data, error: null })
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setState({ status: 'error', data: null, error })
        }
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- caller supplies deps plus reload
  }, [...deps, reloadKey])

  function retry() {
    setReloadKey((value) => value + 1)
  }

  return {
    ...state,
    loading: state.status === 'loading',
    retry,
  }
}
