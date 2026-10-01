import Icon from './Icon'

/** Consistent empty state for search results and empty collections. */
export default function EmptyState({
  icon = 'search',
  title = 'Nothing found',
  description = 'Try adjusting your search or filters.',
  action
}) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <Icon name={icon} size={26} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}