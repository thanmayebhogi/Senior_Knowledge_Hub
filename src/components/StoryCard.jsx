import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import LikeButton from './LikeButton'
import BookmarkButton from './BookmarkButton'
import CompanyLogo from './CompanyLogo'
import { avatarStyle } from '../utils/tone'
import { initials } from '../utils/format'

/** Success story card with expandable full journey. */
export default function StoryCard({ story }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="item-card">
      <div className="card-top">
        <div className="row" style={{ gap: 12 }}>
          <span className="avatar avatar-lg" style={avatarStyle(story.name)}>
            {initials(story.name)}
          </span>
          <div>
            <h3 className="card-title clamp-2">{story.headline}</h3>
            <div className="tiny muted mt-1">
              {story.name} · {story.branch}
            </div>
          </div>
        </div>
        <BookmarkButton
          item={{
            type: 'story',
            id: story.id,
            title: story.headline,
            subtitle: `${story.company} · ${story.package}`,
            to: '/success-stories'
          }}
        />
      </div>

      <div className="row wrap" style={{ gap: 10 }}>
        <Link to={`/companies/${story.companyId}`} className="company-mini">
          <CompanyLogo companyId={story.companyId} size={26} />
          <span className="small strong">{story.company}</span>
        </Link>
        <span className="badge badge-success">
          <Icon name="briefcase" size={12} />
          {story.package}
        </span>
        <span className="badge">Batch {story.batch}</span>
      </div>

      <div className="row wrap mt-2" style={{ gap: 6 }}>
        {story.tags.map((tag) => (
          <span key={tag} className="badge badge-accent">
            {tag}
          </span>
        ))}
      </div>

      <p className="card-body mt-2 clamp-3">{story.story[0]}</p>

      <div className="card-foot">
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <Icon name={open ? 'chevronDown' : 'book'} size={14} />
          {open ? 'Hide full story' : 'Read full journey'}
        </button>
        <LikeButton likeKey={`story:${story.id}`} count={story.likes} label="inspiring" />
      </div>

      {open && (
        <div className="answer-block">
          <div className="stack" style={{ gap: 12 }}>
            {story.story.map((paragraph, index) => (
              <p key={index} style={{ color: 'var(--text-soft)', lineHeight: 1.75 }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="callout success mt-2">
            <Icon name="award" size={16} />
            <div>
              <strong className="strong">What worked:</strong>
              <ul className="bullet-list mt-1">
                {story.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}