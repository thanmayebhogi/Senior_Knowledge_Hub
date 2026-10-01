import { Link } from 'react-router-dom'
import CompanyLogo from './CompanyLogo'
import BookmarkButton from './BookmarkButton'
import Icon from './Icon'
import { compactNumber } from '../utils/format'
import { difficultyTone } from '../utils/tone'

export default function CompanyCard({ company }) {
  return (
    <article
      className="item-card company-card"
      style={{ '--accent-color': company.color }}
    >
      <div className="card-top">
        <div className="company-card-head">
          <CompanyLogo companyId={company.id} />
          <div>
            <Link to={`/companies/${company.id}`} className="card-title">
              {company.name}
            </Link>
            <div className="tiny muted">{company.fullName}</div>
          </div>
        </div>
        <BookmarkButton
          item={{
            type: 'company',
            id: company.id,
            title: company.name,
            subtitle: company.category,
            to: `/companies/${company.id}`
          }}
        />
      </div>

      <p className="card-body clamp-2">{company.tagline}</p>

      <div className="row wrap mt-2">
        <span className="badge badge-primary">{company.category}</span>
        <span className={`badge badge-${difficultyTone(company.difficulty)}`}>
          {company.difficulty}
        </span>
        <span className="rating">
          <Icon name="star" size={13} filled />
          {company.rating}
        </span>
      </div>

      <div className="meta-row mt-2">
        <span className="meta-item">
          <Icon name="briefcase" size={14} />
          {company.stats.openings.toLocaleString('en-IN')} openings
        </span>
        <span className="meta-item">
          <Icon name="trending" size={14} />
          {company.stats.avgPackage}
        </span>
        <span className="meta-item">
          <Icon name="users" size={14} />
          {compactNumber(company.stats.applicants)} applicants
        </span>
      </div>

      <div className="card-foot">
        <span className="tiny muted">
          {company.selectionProcess.length} rounds · {company.resources.length} resources
        </span>
        <Link to={`/companies/${company.id}`} className="btn btn-soft btn-sm">
          Full details
          <Icon name="arrowRight" size={14} />
        </Link>
      </div>
    </article>
  )
}