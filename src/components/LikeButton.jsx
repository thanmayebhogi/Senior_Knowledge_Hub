import { useApp } from '../context/AppContext'
import Icon from './Icon'

/** Like / "helpful" toggle with an optimistic counter. */
export default function LikeButton({ likeKey, count = 0, label = 'helpful', compact = false }) {
  const { isLiked, toggleLike } = useApp()
  const liked = isLiked(likeKey)
  const total = count + (liked ? 1 : 0)

  if (compact) {
    return (
      <button
        type="button"
        className={`icon-btn${liked ? ' active' : ''}`}
        onClick={() => toggleLike(likeKey, label)}
        title={liked ? 'Remove like' : `Mark as ${label}`}
        aria-pressed={liked}
      >
        <Icon name="thumbUp" size={16} filled={liked} />
      </button>
    )
  }

  return (
    <button
      type="button"
      className={`like-btn${liked ? ' active' : ''}`}
      onClick={() => toggleLike(likeKey, label)}
      aria-pressed={liked}
    >
      <Icon name="thumbUp" size={15} filled={liked} />
      {total} {label}
    </button>
  )
}