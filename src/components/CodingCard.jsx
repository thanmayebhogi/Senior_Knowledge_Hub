import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import BookmarkButton from './BookmarkButton'
import LikeButton from './LikeButton'
import CodeBlock from './CodeBlock'
import { companies } from '../data/companies'
import { compactNumber } from '../utils/format'
import { difficultyTone } from '../utils/tone'

/** Coding problem card with solution reveal. */
export default function CodingCard({ problem }) {
  const [open, setOpen] = useState(false)
  const related = problem.companies
    .map((id) => companies.find((company) => company.id === id))
    .filter(Boolean)

  return (
    <article className="item-card">
      <div className="card-top">
        <div className="row wrap" style={{ gap: 8 }}>
          <span className={`badge badge-${difficultyTone(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
          <span className="badge badge-accent">{problem.topic}</span>
        </div>
        <BookmarkButton
          item={{
            type: 'problem',
            id: problem.id,
            title: problem.title,
            subtitle: problem.topic,
            to: '/coding-problems'
          }}
        />
      </div>

      <h3 className="card-title">{problem.title}</h3>
      <p className="card-body mt-1">{problem.description}</p>

      <pre className="mt-2" style={{ fontSize: '0.78rem' }}>
        <code>{problem.example}</code>
      </pre>

      <div className="meta-row mt-2">
        <span className="meta-item">
          <Icon name="trending" size={14} />
          {problem.frequency}% frequency
        </span>
        <span className="meta-item">
          <Icon name="users" size={14} />
          {compactNumber(problem.asked)} asked
        </span>
        <span className="meta-item">
          <Icon name="clock" size={14} />
          {problem.complexity.time}
        </span>
      </div>

      <div className="row wrap mt-2" style={{ gap: 6 }}>
        {related.map((company) => (
          <Link key={company.id} to={`/companies/${company.id}`} className="badge badge-primary">
            {company.name}
          </Link>
        ))}
      </div>

      <div className="card-foot">
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          <Icon name={open ? 'chevronDown' : 'code'} size={14} />
          {open ? 'Hide solution' : 'View solution'}
        </button>
        <LikeButton likeKey={`problem:${problem.id}`} count={Math.round(problem.asked * 0.06)} label="solved" />
      </div>

      {open && (
        <div className="answer-block">
          <div className="callout">
            <Icon name="compass" size={16} />
            <div>
              <strong className="strong">Approach:</strong> {problem.approach}
            </div>
          </div>

          <div className="mt-2">
            <CodeBlock code={problem.solution} language="python" />
          </div>

          <div className="row mt-2" style={{ gap: 16 }}>
            <span className="badge badge-success">
              <Icon name="clock" size={12} /> Time {problem.complexity.time}
            </span>
            <span className="badge badge-info">
              <Icon name="layers" size={12} /> Space {problem.complexity.space}
            </span>
          </div>
        </div>
      )}
    </article>
  )
}