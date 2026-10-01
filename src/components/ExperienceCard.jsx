import { useState } from 'react'
import Icon from './Icon'
import BookmarkButton from './BookmarkButton'
import LikeButton from './LikeButton'
import CompanyLogo from './CompanyLogo'
import { formatDate } from '../utils/format'
import { avatarStyle, outcomeTone } from '../utils/tone'
import { initials } from '../utils/format'

/** Senior interview experience card with expandable round-by-round detail. */
export default function ExperienceCard({ experience, showCompany = true }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="item-card">
      <div className="card-top">
        <div className="row wrap" style={{ gap: 10 }}>
          {showCompany && <CompanyLogo companyId={experience.companyId} size={38} />}
          <div>
            <div className="row" style={{ gap: 8 }}>
              <h3 className="card-title">{experience.role}</h3>
              <span className={`badge badge-${outcomeTone(experience.outcome)}`}>
                <Icon name={experience.outcome === 'Selected' ? 'checkCircle' : 'x'} size={12} />
                {experience.outcome}
              </span>
            </div>
            <div className="tiny muted">
              {experience.author} · {experience.branch} · Batch {experience.batch}
            </div>
          </div>
        </div>
        <BookmarkButton
          item={{
            type: 'experience',
            id: experience.id,
            title: `${experience.company} — ${experience.role}`,
            subtitle: `${experience.author} · ${experience.outcome}`,
            to: '/senior-experiences'
          }}
        />
      </div>

      <div className="row wrap" style={{ gap: 8 }}>
        <span className="badge badge-primary">{experience.company}</span>
        {experience.tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
        <span className="tiny muted row" style={{ gap: 5 }}>
          <Icon name="calendar" size={13} />
          {formatDate(experience.postedAt)}
        </span>
      </div>

      <div className="rating mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon key={star} name="star" size={13} filled={star <= experience.rating} />
        ))}
        <span className="tiny muted">{experience.rating}/5 overall experience</span>
      </div>

      <div className="card-foot">
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <Icon name={open ? 'chevronDown' : 'clipboard'} size={14} />
          {open ? 'Hide rounds' : `Read ${experience.rounds.length} rounds`}
        </button>
        <LikeButton
          likeKey={`experience:${experience.id}`}
          count={experience.helpful}
          label="found this helpful"
        />
      </div>

      {open && (
        <div className="answer-block">
          <div className="stack" style={{ gap: 14 }}>
            {experience.rounds.map((round) => (
              <div key={round.round} className="round-row">
                <div className="row-between wrap">
                  <strong className="strong small">
                    <Icon name="checkCircle" size={14} /> {round.round}
                  </strong>
                  {round.score && <span className="badge badge-success">{round.score}</span>}
                </div>
                <p className="small soft mt-1">{round.experience}</p>
              </div>
            ))}
          </div>

          <div className="callout success mt-2">
            <Icon name="bulb" size={16} />
            <div>
              <strong className="strong">Takeaways:</strong>
              <ul className="bullet-list mt-1">
                {experience.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row mt-2">
            <span className="avatar avatar-sm" style={avatarStyle(experience.author)}>
              {initials(experience.author)}
            </span>
            <span className="tiny muted">
              Shared by {experience.author} · verified final-year experience
            </span>
          </div>
        </div>
      )}
    </article>
  )
}