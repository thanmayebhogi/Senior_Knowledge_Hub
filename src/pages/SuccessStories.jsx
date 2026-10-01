import { useMemo } from 'react'
import PageHeader from '../components/PageHeader'
import StoryCard from '../components/StoryCard'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import { stories } from '../data/stories'
import { companies } from '../data/companies'
import { useListFilter } from '../hooks/useListFilter'

const packageValue = (value = '') => Number(String(value).replace(/[^\d.]/g, '')) || 0

export default function SuccessStories() {
  const companyOptions = useMemo(() => ['All', ...companies.map((company) => company.name)], [])
  const tagOptions = useMemo(
    () => ['All', ...Array.from(new Set(stories.flatMap((story) => story.tags))).slice(0, 10)],
    []
  )

  const { query, setQuery, active, setFacet, filtered } = useListFilter(stories, {
    searchFields: (story) => [story.headline, story.name, story.company, story.tags, story.story, story.lessons],
    facets: {
      company: (story, value) => story.company === value,
      tag: (story, value) => story.tags.includes(value)
    }
  })

  const sorted = useMemo(
    () => [...filtered].sort((a, b) => packageValue(b.package) - packageValue(a.package)),
    [filtered]
  )

  const totalLikes = stories.reduce((sum, story) => sum + story.likes, 0)

  return (
    <>
      <PageHeader
        eyebrow="Real journeys"
        title="Success Stories"
        description="How other final-year students in the same situation turned preparation into an offer — including the part that did not work at first."
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="trophy" value={stories.length} label="Success stories" />
          <StatCard icon="building" value={companies.length} label="Companies featured" tone="accent" />
          <StatCard icon="heart" value={`${Math.round(totalLikes / 100) / 10}K`} label="Community likes" tone="danger" />
          <StatCard icon="award" value="100%" label="Offers received" tone="success" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="toolbar">
          <SearchInput value={query} onChange={setQuery} placeholder="Search stories, strategies or companies…" />
        </div>

        <div className="stack" style={{ gap: 12, marginBottom: 22 }}>
          <FilterChips
            options={companyOptions}
            value={active.company || 'All'}
            onChange={(value) => setFacet('company', value === 'All' ? '' : value)}
            ariaLabel="Filter by company"
          />
          <FilterChips
            options={tagOptions}
            value={active.tag || 'All'}
            onChange={(value) => setFacet('tag', value === 'All' ? '' : value)}
            ariaLabel="Filter by strategy tag"
          />
        </div>

        <p className="result-count">
          Showing <strong>{sorted.length}</strong> of {stories.length} stories · sorted by package
        </p>

        {sorted.length === 0 ? (
          <EmptyState
            icon="trophy"
            title="No stories match this filter"
            description="Try a different strategy tag such as Aptitude, Quant or Projects."
          />
        ) : (
          <div className="grid grid-2">
            {sorted.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}