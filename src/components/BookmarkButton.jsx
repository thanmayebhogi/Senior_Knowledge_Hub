import { useApp } from '../context/AppContext'
import Icon from './Icon'

/**
 * Bookmark toggle. Persists to localStorage through AppContext.
 * item = { type, id, title, subtitle, to }
 */
export default function BookmarkButton({ item, variant = 'icon', size = 17 }) {
  const { isBookmarked, toggleBookmark } = useApp()
  const active = isBookmarked(item.type, item.id)

  if (variant === 'full') {
    return (
      <button
        type="button"
        className={`btn ${active ? 'btn-soft' : 'btn-outline'} btn-sm`}
        onClick={() => toggleBookmark(item)}
      >
        <Icon name="bookmark" size={15} filled={active} />
        {active ? 'Bookmarked' : 'Bookmark'}
      </button>
    )
  }

  return (
    <button
      type="button"
      className={`icon-btn${active ? ' active' : ''}`}
      onClick={() => toggleBookmark(item)}
      title={active ? 'Remove bookmark' : 'Bookmark this'}
      aria-label={active ? 'Remove bookmark' : 'Bookmark this'}
      aria-pressed={active}
    >
      <Icon name="bookmark" size={size} filled={active} />
    </button>
  )
}