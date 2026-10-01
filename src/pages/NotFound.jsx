import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import EmptyState from '../components/EmptyState'

const suggestions = [
  { to: '/companies', label: 'Companies', icon: 'building' },
  { to: '/company-preparation', label: 'Preparation plan', icon: 'target' },
  { to: '/coding-problems', label: 'Coding problems', icon: 'code' },
  { to: '/qa', label: 'Q&A community', icon: 'message' }
]

export default function NotFound() {
  return (
    <div className="container page">
      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <EmptyState
          icon="compass"
          title="404 — page not found"
          description="The page you were looking for does not exist or has been moved. Use one of the links below to get back on track."
          action={
            <Link to="/" className="btn btn-primary">
              <Icon name="arrowLeft" size={16} />
              Back to home
            </Link>
          }
        />

        <div className="grid grid-4 mt-3">
          {suggestions.map((suggestion) => (
            <Link key={suggestion.to} to={suggestion.to} className="item-card clickable">
              <span className="section-title-icon">
                <Icon name={suggestion.icon} size={17} />
              </span>
              <h3 className="card-title mt-2">{suggestion.label}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}