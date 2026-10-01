import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import { useApp } from '../context/AppContext'
import { useListFilter } from '../hooks/useListFilter'
import { formatDate } from '../utils/format'

const typeMeta = {
  company: { label: 'Companies', icon: 'building', tone: 'primary' },
  question: { label: 'Questions', icon: 'help', tone: 'accent' },
  experience: { label: 'Experiences', icon: 'users', tone: 'success' },
  problem: { label: 'Coding', icon: 'code', tone: 'info' },
  resource: { label: 'Resources', icon: 'book', tone: 'warning' },
  story: { label: 'Stories', icon: 'trophy', tone: 'danger' },
  'company-resource': { label: 'Company resources', icon: 'book', tone: 'warning' },
  'company-problem': { label: 'Company coding', icon: 'code', tone: 'info' }
}

export default function Bookmarks() {
  const { bookmarks, removeBookmark, clearBookmarks } = useApp()
  const [confirmClear, setConfirmClear] = useState(false)

  const typeOptions = useMemo(
    () => ['All', ...Array.from(new Set(bookmarks.map((item) => item.type)))],
    [bookmarks]
  )

  const { query, setQuery, active, setFacet, filtered } = useListFilter(bookmarks, {
    searchFields: (item) => [item.title, item.subtitle],
    facets: {
      type: (item, value) => item.type === value
    }
  })

  const counts = bookmarks.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1
    return acc
  }, {})

  return (
    <>
      <PageHeader
        eyebrow="Saved for later"
        title="Bookmarks"
        description="Everything you save across companies, questions, coding problems, experiences and resources stays here — and only here."
        actions={
          bookmarks.length > 0 && (
            <>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setConfirmClear((value) => !value)}
              >
                <Icon name="trash" size={15} />
                {confirmClear ? 'Confirm clear all' : 'Clear all'}
              </button>
              <Link to="/companies" className="btn btn-primary btn-sm">
                <Icon name="building" size={15} />
                Browse companies
              </Link>
            </>
          )
        }
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="bookmark" value={bookmarks.length} label="Total bookmarks" />
          <StatCard icon="building" value={counts.company || 0} label="Companies" tone="accent" />
          <StatCard icon="code" value={(counts.problem || 0) + (counts['company-problem'] || 0)} label="Coding items" tone="success" />
          <StatCard
            icon="book"
            value={(counts.resource || 0) + (counts['company-resource'] || 0)}
            label="Resources"
            tone="warning"
          />
        </div>
      </PageHeader>

      <div className="container page">
        {confirmClear && (
          <div className="callout warning mb-3">
            <Icon name="help" size={16} />
            <div className="grow">This removes every bookmark from this browser. This cannot be undone.</div>
            <button type="button" className="btn btn-danger btn-sm" onClick={clearBookmarks}>
              Yes, clear all
            </button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setConfirmClear(false)}>
              Cancel
            </button>
          </div>
        )}

        {bookmarks.length > 0 && (
          <>
            <div className="toolbar">
              <SearchInput value={query} onChange={setQuery} placeholder="Search your bookmarks…" />
            </div>
            <div className="mb-3">
              <FilterChips
                options={typeOptions.map((type) => ({
                  value: type,
                  label: `${typeMeta[type]?.label || type} (${counts[type] || 0})`
                }))}
                value={active.type || 'All'}
                onChange={(value) => setFacet('type', value === 'All' ? '' : value)}
                ariaLabel="Filter bookmarks by type"
              />
            </div>
            <p className="result-count">
              Showing <strong>{filtered.length}</strong> of {bookmarks.length} bookmarks
            </p>
          </>
        )}

        {filtered.length === 0 ? (
          <EmptyState
            icon="bookmark"
            title={bookmarks.length === 0 ? 'No bookmarks yet' : 'No bookmarks match this filter'}
            description={
              bookmarkEmptyText(bookmarks.length === 0)
            }
            action={
              bookmarks.length === 0 ? (
                <Link to="/companies" className="btn btn-primary">
                  <Icon name="building" size={16} />
                  Explore companies
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setQuery('')
                    setFacet('type', '')
                  }}
                >
                  Clear filters
                </button>
              )
            }
          />
        ) : (
          <div className="grid grid-3">
            {filtered.map((item) => {
              const meta = typeMeta[item.type] || { label: item.type, icon: 'bookmark', tone: 'primary' }
              return (
                <article key={item.key} className="item-card">
                  <div className="card-top">
                    <div className="row" style={{ gap: 10 }}>
                      <span className="section-title-icon">
                        <Icon name={meta.icon} size={16} />
                      </span>
                      <div>
                        <span className={`badge badge-${meta.tone}`}>{meta.label}</span>
                        <div className="tiny muted mt-1">Saved {formatDate(item.savedAt)}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="icon-btn"
                      onClick={() => removeBookmark(item.key)}
                      title="Remove bookmark"
                      aria-label={`Remove bookmark for ${item.title}`}
                    >
                      <Icon name="trash" size={15} />
                    </button>
                  </div>

                  <h3 className="card-title clamp-3">{item.title}</h3>
                  {item.subtitle && <p className="card-body mt-1 clamp-2">{item.subtitle}</p>}

                  <div className="card-foot">
                    <span className="tiny muted">{item.savedAt ? 'Saved on this device' : ''}</span>
                    <Link to={item.to} className="btn btn-soft btn-sm">
                      Open
                      <Icon name="arrowRight" size={14} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

function bookmarkEmptyText(isEmpty) {
  return isEmpty
    ? 'Tap the bookmark icon on any company, question, coding problem, experience or resource and it will appear here for quick revision.'
    : 'Try a different search term or filter.'
}