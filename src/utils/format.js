/** Small formatting helpers shared across pages. */

export const initials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

export const slug = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const compactNumber = (value = 0) => {
  if (value >= 10000000) return `${(value / 10000000).toFixed(1).replace(/\.0$/, '')}Cr`
  if (value >= 100000) return `${(value / 100000).toFixed(1).replace(/\.0$/, '')}L`
  if (value >= 1000) return `${(value / 1000).toFixed(1).replace(/\.0$/, '')}K`
  return `${value}`
}

export const formatDate = (value) => {
  if (!value) return '—'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '—'
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export const relativeTime = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  const diff = Date.now() - date.getTime()
  const days = Math.floor(diff / 86400000)
  if (days <= 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`
  const years = Math.floor(months / 12)
  return `${years} year${years > 1 ? 's' : ''} ago`
}

export const plural = (count, singular, pluralForm) =>
  `${count} ${count === 1 ? singular : pluralForm || `${singular}s`}`

export const truncate = (text = '', length = 160) =>
  text.length > length ? `${text.slice(0, length).trimEnd()}…` : text

/** Matches a free-text query against a list of fields (case insensitive). */
export const matchesQuery = (query, ...fields) => {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return fields
    .filter(Boolean)
    .flatMap((field) => (Array.isArray(field) ? field : [field]))
    .join(' ')
    .toLowerCase()
    .includes(q)
}

export const unique = (list = []) => Array.from(new Set(list))