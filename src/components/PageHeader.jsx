import { Link } from 'react-router-dom'
import Icon from './Icon'

/**
 * Standard page header with breadcrumb support.
 */
export default function PageHeader({ eyebrow, title, description, crumbs = [], actions, children }) {
  return (
    <section className="page-head">
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} className="row" style={{ gap: 7 }}>
                <Icon name="chevronRight" size={13} />
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </span>
            ))}
          </nav>
        )}

        <div className="row-between wrap">
          <div>
            {eyebrow && (
              <span className="eyebrow" style={{ marginBottom: 12 }}>
                <Icon name="sparkle" size={14} />
                {eyebrow}
              </span>
            )}
            <h1>{title}</h1>
            {description && <p className="mt-1">{description}</p>}
          </div>
          {actions && <div className="row wrap">{actions}</div>}
        </div>

        {children}
      </div>
    </section>
  )
}