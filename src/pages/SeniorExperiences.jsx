import { useMemo } from 'react'
import PageHeader from '../components/PageHeader'
import ExperienceCard from '../components/ExperienceCard'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import { experiences } from '../data/experiences'
import { companies } from '../data/companies'
import { useListFilter } from '../hooks/useListFilter'
import { selectedExperiences } from '../data/experiences'

export default function SeniorExperiences() {
  const companyOptions = useMemo(
    () => ['All', ...companies.map((company) => company.name)],
    []
  )
  const outcomeOptions = ['All', 'Selected', 'Not selected']

  const { query, setQuery, active, setFacet, filtered } = useListFilter(experiences, {
    searchFields: (experience) => [
      experience.company,
      experience.role,
      experience.author,
      experience.tags,
      experience.rounds.map((round) => `${round.round} ${round.experience}`)
    ],
    facets: {
      company: (experience, value) => experience.company === value,
      outcome: (experience, value) => experience.outcome === value
    }
  })

  const roundStats = experiences.reduce((total, experience) => total + experience.rounds.length, 0)

  return (
    <>
      <PageHeader
        eyebrow="Real experiences"
        title="Senior Experiences"
        description="Round-by-round accounts from final-year students: what the test felt like, which questions were asked, and the mistakes worth avoiding."
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="users" value={experiences.length} label="Experiences shared" />
          <StatCard icon="checkCircle" value={selectedExperiences.length} label="Selected candidates" tone="success" />
          <StatCard icon="clipboard" value={roundStats} label="Rounds covered" tone="accent" />
          <StatCard icon="building" value={companies.length} label="Companies represented" tone="info" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="toolbar">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search by company, role, tag or question asked…"
          />
        </div>

        <div className="stack" style={{ gap: 12, marginBottom: 22 }}>
          <FilterChips
            options={companyOptions}
            value={active.company || 'All'}
            onChange={(value) => setFacet('company', value === 'All' ? '' : value)}
            ariaLabel="Filter by company"
          />
          <FilterChips
            options={outcomeOptions}
            value={active.outcome || 'All'}
            onChange={(value) => setFacet('outcome', value === 'All' ? '' : value)}
            ariaLabel="Filter by outcome"
          />
        </div>

        <p className="result-count">
          Showing <strong>{filtered.length}</strong> of {experiences.length} experiences
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon="users"
            title="No experiences match this filter"
            description="Clear the filters, or share your own experience in the Q&A section."
          />
        ) : (
          <div className="grid grid-2">
            {filtered.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}