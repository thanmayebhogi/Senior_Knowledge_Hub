import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import LikeButton from '../components/LikeButton'
import { qaTags } from '../data/qa'
import { companies } from '../data/companies'
import { useApp } from '../context/AppContext'
import { useListFilter } from '../hooks/useListFilter'
import { avatarStyle, outcomeTone } from '../utils/tone'
import { formatDate, initials, relativeTime } from '../utils/format'

const sortOptions = [
  { value: 'recent', label: 'Most recent' },
  { value: 'votes', label: 'Most votes' },
  { value: 'answers', label: 'Most answered' },
  { value: 'unanswered', label: 'Unanswered first' }
]

export default function QA() {
  const { questions, answersFor, addQuestion, addAnswer, deleteQuestion, profile, resetCommunity } = useApp()
  const [sort, setSort] = useState('recent')
  const [draft, setDraft] = useState({ title: '', body: '', tags: [] })
  const [errors, setErrors] = useState({})
  const [openId, setOpenId] = useState(null)
  const [answerDraft, setAnswerDraft] = useState({})

  const tagOptions = ['All', ...qaTags]

  const { query, setQuery, active, setFacet, filtered } = useListFilter(questions, {
    searchFields: (question) => [question.title, question.body, question.tags, question.author],
    facets: {
      tag: (question, value) => question.tags.includes(value)
    }
  })

  const sorted = useMemo(() => {
    const list = [...filtered]
    switch (sort) {
      case 'votes':
        return list.sort((a, b) => b.votes - a.votes)
      case 'answers':
        return list.sort((a, b) => answersFor(b.id).length - answersFor(a.id).length)
      case 'unanswered':
        return list.sort(
          (a, b) => answersFor(a.id).length - answersFor(b.id).length || new Date(b.createdAt) - new Date(a.createdAt)
        )
      default:
        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  }, [filtered, sort, answersFor])

  const toggleTag = (tag) =>
    setDraft((current) => ({
      ...current,
      tags: current.tags.includes(tag)
        ? current.tags.filter((item) => item !== tag)
        : [...current.tags, tag]
    }))

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (draft.title.trim().length < 10) nextErrors.title = 'Use at least 10 characters so people understand the question.'
    if (draft.body.trim().length < 20) nextErrors.body = 'Add a little more detail (20 characters minimum).'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const created = addQuestion(draft)
    setDraft({ title: '', body: '', tags: [] })
    setErrors({})
    setOpenId(created.id)
  }

  const handleAnswer = (event, questionId) => {
    event.preventDefault()
    const body = (answerDraft[questionId] || '').trim()
    if (body.length < 10) return
    addAnswer(questionId, body)
    setAnswerDraft((current) => ({ ...current, [questionId]: '' }))
  }

  const solvedCount = questions.filter((question) => answersFor(question.id).length > 0).length
  const answerCount = questions.reduce((sum, question) => sum + answersFor(question.id).length, 0)

  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Q&A"
        description="Ask anything about eligibility, tests, interviews and offers. Questions and answers you write are saved in this browser only — no account, no server."
        actions={
          questions.some((question) => question.isMine) && (
            <button type="button" className="btn btn-outline btn-sm" onClick={resetCommunity}>
              <Icon name="trash" size={15} />
              Clear my posts
            </button>
          )
        }
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="help" value={questions.length} label="Questions" />
          <StatCard icon="message" value={answerCount} label="Answers" tone="accent" />
          <StatCard icon="checkCircle" value={solvedCount} label="Solved questions" tone="success" />
          <StatCard icon="user" value={profile.name ? 'Saved' : 'Anonymous'} label="Posting as" tone="info" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="qa-layout">
          <div>
            <section className="panel">
              <h3>
                <Icon name="send" size={17} /> Ask a question
              </h3>
              <form className="stack mt-2" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="qa-title">Question title</label>
                  <input
                    id="qa-title"
                    className="input"
                    value={draft.title}
                    placeholder="e.g. Is 60% enough for Accenture?"
                    onChange={(event) => setDraft({ ...draft, title: event.target.value })}
                  />
                  {errors.title && <span className="form-error">{errors.title}</span>}
                </div>

                <div className="field">
                  <label htmlFor="qa-body">Details</label>
                  <textarea
                    id="qa-body"
                    className="textarea"
                    value={draft.body}
                    placeholder="Add your CGPA, batch, attempt details or anything that helps others answer accurately."
                    onChange={(event) => setDraft({ ...draft, body: event.target.value })}
                  />
                  {errors.body && <span className="form-error">{errors.body}</span>}
                </div>

                <div className="field">
                  <label>Tags</label>
                  <div className="chips">
                    {qaTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className={`chip${draft.tags.includes(tag) ? ' active' : ''}`}
                        onClick={() => toggleTag(tag)}
                        aria-pressed={draft.tags.includes(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="row-between wrap">
                  <span className="tiny muted">
                    Saved locally as {profile.name ? profile.name : 'Anonymous'} · nothing is uploaded
                  </span>
                  <button type="submit" className="btn btn-primary">
                    <Icon name="send" size={15} />
                    Publish question
                  </button>
                </div>
              </form>
            </section>

            <div className="toolbar mt-3">
              <SearchInput value={query} onChange={setQuery} placeholder="Search questions…" />
              <select
                className="select"
                style={{ width: 190 }}
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort questions"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-2">
              <FilterChips
                options={tagOptions}
                value={active.tag || 'All'}
                onChange={(value) => setFacet('tag', value === 'All' ? '' : value)}
                ariaLabel="Filter by tag"
              />
            </div>

            <p className="result-count">
              Showing <strong>{sorted.length}</strong> of {questions.length} questions
            </p>

            {sorted.length === 0 ? (
              <EmptyState
                icon="message"
                title="No questions here yet"
                description="Be the first to ask a question using the form above."
              />
            ) : (
              <div className="stack">
                {sorted.map((question) => {
                  const answers = answersFor(question.id)
                  const open = openId === question.id
                  return (
                    <article key={question.id} className="item-card">
                      <div className="card-top">
                        <div className="row wrap" style={{ gap: 8 }}>
                          <span className={`badge badge-${answers.length > 0 ? outcomeTone('Selected') : 'primary'}`}>
                            <Icon name={answers.length > 0 ? 'checkCircle' : 'help'} size={12} />
                            {answers.length} {answers.length === 1 ? 'answer' : 'answers'}
                          </span>
                          {question.tags.map((tag) => (
                            <span key={tag} className="badge">
                              {tag}
                            </span>
                          ))}
                          {question.isMine && <span className="badge badge-accent">Your question</span>}
                        </div>
                        <div className="row" style={{ gap: 8 }}>
                          <LikeButton likeKey={`qa:${question.id}`} count={question.votes} label="votes" compact />
                          {question.isMine && (
                            <button
                              type="button"
                              className="icon-btn"
                              onClick={() => deleteQuestion(question.id)}
                              title="Delete question"
                              aria-label="Delete question"
                            >
                              <Icon name="trash" size={16} />
                            </button>
                          )}
                        </div>
                      </div>

                      <h3 className="card-title">{question.title}</h3>
                      <p className="card-body mt-1">{question.body}</p>

                      <div className="meta-row mt-2">
                        <span className="row" style={{ gap: 8 }}>
                          <span className="avatar avatar-sm" style={avatarStyle(question.author)}>
                            {initials(question.author)}
                          </span>
                          <span className="tiny">{question.author}</span>
                        </span>
                        <span className="meta-item">
                          <Icon name="calendar" size={13} />
                          {formatDate(question.createdAt)}
                        </span>
                        <span className="meta-item">
                          <Icon name="eye" size={13} />
                          {question.views} views
                        </span>
                      </div>

                      {open && answers.length > 0 && (
                        <div className="answer-block">
                          <div className="stack" style={{ gap: 12 }}>
                            {answers.map((answer) => (
                              <div key={answer.id} className="answer-card">
                                <div className="row-between wrap">
                                  <div className="row" style={{ gap: 8 }}>
                                    <span className="avatar avatar-sm" style={avatarStyle(answer.author)}>
                                      {initials(answer.author)}
                                    </span>
                                    <div>
                                      <div className="small strong">{answer.author}</div>
                                      <div className="tiny muted">
                                        {relativeTime(answer.createdAt) || formatDate(answer.createdAt)}
                                      </div>
                                    </div>
                                  </div>
                                  <LikeButton
                                    likeKey={`qa-answer:${answer.id}`}
                                    count={answer.votes}
                                    label="helpful"
                                    compact
                                  />
                                </div>
                                <p className="small soft mt-1" style={{ whiteSpace: 'pre-wrap' }}>
                                  {answer.body}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="card-foot">
                        <button
                          type="button"
                          className="btn btn-outline btn-sm"
                          onClick={() => setOpenId(open ? null : question.id)}
                          aria-expanded={open}
                        >
                          <Icon name={open ? 'chevronDown' : 'message'} size={14} />
                          {open ? 'Collapse answers' : 'Show answers'}
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft btn-sm"
                          onClick={() => {
                            setOpenId(question.id)
                            document.getElementById(`answer-${question.id}`)?.focus()
                          }}
                        >
                          <Icon name="send" size={14} />
                          Write an answer
                        </button>
                      </div>

                      {open && (
                        <form className="stack mt-2" style={{ gap: 10 }} onSubmit={(event) => handleAnswer(event, question.id)}>
                          <textarea
                            id={`answer-${question.id}`}
                            className="textarea"
                            style={{ minHeight: 90 }}
                            placeholder="Share what worked for you — be specific about eligibility, rounds or negotiation."
                            value={answerDraft[question.id] || ''}
                            onChange={(event) =>
                              setAnswerDraft((current) => ({ ...current, [question.id]: event.target.value }))
                            }
                          />
                          <div className="row-between wrap">
                            <span className="tiny muted">Minimum 10 characters. Saved on this device.</span>
                            <button
                              type="submit"
                              className="btn btn-primary btn-sm"
                              disabled={(answerDraft[question.id] || '').trim().length < 10}
                            >
                              Post answer
                            </button>
                          </div>
                        </form>
                      )}
                    </article>
                  )
                })}
              </div>
            )}
          </div>

          <aside className="qa-side">
            <div className="panel">
              <h4>
                <Icon name="building" size={16} /> Ask about a company
              </h4>
              <ul className="bullet-list mt-2">
                {companies.slice(0, 5).map((company) => (
                  <li key={company.id}>{company.name} — eligibility, cut-offs and test pattern</li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <h4>
                <Icon name="bulb" size={16} /> Tips for a good answer
              </h4>
              <ul className="check-list mt-2">
                <li>
                  <Icon name="check" size={15} />
                  Mention your CGPA, batch and attempt number so the answer applies to the reader.
                </li>
                <li>
                  <Icon name="check" size={15} />
                  Share the exact question that was asked, not just the topic.
                </li>
                <li>
                  <Icon name="check" size={15} />
                  Say what did not work — it saves others weeks.
                </li>
              </ul>
            </div>

            <div className="panel">
              <h4>
                <Icon name="shield" size={16} /> Privacy
              </h4>
              <p className="small muted mt-1">
                This Q&amp;A runs entirely in your browser. Questions and answers are stored in
                localStorage under the keys <code>skh.qa</code>, and you can clear them any time with
                the “Clear my posts” button.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}