import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function SearchInput({ initialValue = '', compact = false }) {
  const navigate = useNavigate()
  const [value, setValue] = useState(initialValue)

  function handleSubmit(event) {
    event.preventDefault()
    const query = value.trim()
    if (!query) {
      navigate('/search')
      return
    }
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form className={`search-form${compact ? ' search-form--compact' : ''}`} onSubmit={handleSubmit} role="search">
      <label className="sr-only" htmlFor={compact ? 'header-search' : 'page-search'}>
        Search products
      </label>
      <input
        id={compact ? 'header-search' : 'page-search'}
        type="search"
        name="q"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search steel, timber, tools…"
        autoComplete="off"
      />
      <button type="submit" className="button button--copper">
        Search
      </button>
    </form>
  )
}
