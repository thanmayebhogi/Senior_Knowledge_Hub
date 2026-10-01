import { Link } from 'react-router-dom'
import Icon from './Icon'
import BookmarkButton from './BookmarkButton'
import LikeButton from './LikeButton'
import { companyById } from '../data/companies'
import { compactNumber } from '../utils/format'

const typeIcon = {
  Video: 'users',
  Article: 'fileText',
  'E-book': 'book',
  Cheatsheet: 'clipboard',
  'Practice Set': 'target',
  Template: 'layers',
  Course: 'graduation'
}

export default function ResourceCard({ resource }) {
  const company = companyById(resource.companyId)

  return (
    <article className="item-card">
      <div className="card-top">
        <div className="row" style={{ gap: 10 }}>
          <span className="section-title-icon">
            <Icon name={typeIcon[resource.type] || 'book'} size={17} />
          </span>
          <div>
            <span className="badge badge-primary">{resource.type}</span>
            <div className="tiny muted mt-1">{resource.duration}</div>
          </div>
        </div>
        <BookmarkButton
          item={{
            type: 'resource',
            id: resource.id,
            title: resource.title,
            subtitle: resource.type,
            to: '/resources'
          }}
        />
      </div>

      <h3 className="card-title clamp-2">{resource.title}</h3>
      <p className="card-body clamp-3 mt-1">{resource.description}</p>

      <div className="row wrap mt-2" style={{ gap: 8 }}>
        <span className="badge badge-accent">{resource.category}</span>
        <span className="badge">{resource.level}</span>
        {company && (
          <Link to={`/companies/${company.id}`} className="badge badge-info">
            {company.name}
          </Link>
        )}
      </div>

      <div className="card-foot">
        <div className="meta-row">
          <span className="rating">
            <Icon name="star" size={13} filled />
            {resource.rating}
          </span>
          <span className="meta-item">
            <Icon name="download" size={14} />
            {compactNumber(resource.downloads)}
          </span>
        </div>
        <LikeButton
          likeKey={`resource:${resource.id}`}
          count={Math.round(resource.downloads * 0.04)}
          label="likes"
        />
      </div>
    </article>
  )
}