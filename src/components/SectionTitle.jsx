import { Link } from 'react-router-dom'
import Icon from './Icon'

/** Section heading with icon and optional "view all" action. */
export default function SectionTitle({ icon = 'layers', title, subtitle, actionTo, actionLabel, children }) {
  return (
    <div className="section-head">
      <div>
        <div className="section-title">
          <span className="section-title-icon">
            <Icon name={icon} size={18} />
          </span>
          <h2>{title}</h2>
        </div>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
      {actionTo && (
        <Link to={actionTo} className="btn btn-outline btn-sm">
          {actionLabel || 'View all'}
          <Icon name="arrowRight" size={15} />
        </Link>
      )}
    </div>
  )
}