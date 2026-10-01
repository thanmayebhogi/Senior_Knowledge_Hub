import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import BookmarkButton from './BookmarkButton'
import LikeButton from './LikeButton'
import { companyById } from '../data/companies'
import { difficultyTone } from '../utils/tone'
import { compactNumber } from '../utils/format'

/** Interview question card with a collapsible answer. */
export default function QuestionCard({ question }) {
  const [open, setOpen] = useState(false)
  const company = companyById(question.companyId)

  return (
    <article className="item-card">
      <div className="card-top">
        <div className="row wrap" style={{ gap: 8 }}>
          <span className="badge badge-accent">{question.category}</span>
          <span className={`badge badge-${difficultyTone(question.difficulty)}`}>
            {question.difficulty}
          </span>
          {company && (
            <Link to={`/companies/${company.id}`} className="badge badge-primary">
              {company.name}
            </Link>
          )}
        </div>
        <BookmarkButton
          item={{
            type: 'question',
            id: question.id,
            title: question.question,
            subtitle: question.category,
            to: '/interview-questions'
          }}
        />
      </div>

      <h3 className="card-title" style={{ marginBottom: 10 }}>
        {question.question}
      </h3>

      <div className="meta-row">
        <span className="meta-item">
          <Icon name="thumbUp" size={14} />
          {question.votes} votes
        </span>
        <span className="meta-item">
          <Icon name="users" size={14} />
          {compactNumber(question.views)} views
        </span>
      </div>

      <div className="card-foot">
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <Icon name={open ? 'chevronDown' : 'book'} size={14} />
          {open ? 'Hide answer' : 'View answer'}
        </button>
        <LikeButton likeKey={`question:${question.id}`} count={question.votes} label="helpful" />
      </div>

      {open && (
        <div className="answer-block">
          {question.answer.split('```').map((block, index) =>
            index % 2 === 1 ? (
              <pre key={index}>
                <code>{block.trim()}</code>
              </pre>
            ) : (
              <p key={index} style={{ whiteSpace: 'pre-wrap' }}>
                {block}
              </p>
            )
          )}

          {question.tips?.length > 0 && (
            <div className="callout mt-2">
              <Icon name="bulb" size={16} />
              <div>
                <strong className="strong">Interview tip:</strong> {question.tips.join(' ')}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}