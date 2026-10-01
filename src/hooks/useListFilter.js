import { useMemo, useState } from 'react'
import { matchesQuery } from '../utils/format'

/**
 * Small reusable helper for listing pages.
 *
 * useListFilter(items, {
 *   searchFields: (item) => [string | string[]],
 *   facets: { key: (item, value) => boolean }
 * })
 *
 * Returns the search query, active facet values and the filtered list.
 */
export function useListFilter(items, { searchFields = () => [], facets = {} } = {}) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState({})

  const setFacet = (key, value) =>
    setActive((current) => ({ ...current, [key]: current[key] === value ? '' : value }))

  const clear = () => {
    setQuery('')
    setActive({})
  }

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (!matchesQuery(query, searchFields(item))) return false
      return Object.entries(active).every(([key, value]) => {
        if (!value) return true
        const matcher = facets[key]
        return matcher ? matcher(item, value) : true
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, query, active])

  const isFiltered = Boolean(query) || Object.values(active).some(Boolean)

  return { query, setQuery, active, setFacet, clear, filtered, isFiltered }
}