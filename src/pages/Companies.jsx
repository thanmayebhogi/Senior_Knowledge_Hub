import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import CompanyCard from '../components/CompanyCard'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import { companies } from '../data/companies'
import { experiences } from '../data/experiences'
import { useListFilter } from '../hooks/useListFilter'
import { compactNumber } from '../utils/format'

const sorts = [
  { value: 'popular', label: 'Most popular' },
  { value: 'package', label: 'Highest package' },
  { value: 'openings', label: 'Most openings' },
  { value: 'rating', label: 'Best rated' },
  { value: 'name', label: 'A → Z' }
]

const packageValue = (value = '') => Number(String(value).replace(/[^\d.]/g, '')) || 0

export default function Companies() {
  const [sort, setSort] = useState('popular')

  const categoryOptions = useMemo(
    () => ['All', ...Array.from(new Set(companies.map((company) => company.category)))],
    []
  )
  const difficultyOptions = useMemo(
    () => ['All', ...Array.from(new Set(companies.map((company) => company.difficulty)))],
    []
  )

  const { query, setQuery, active, setFacet, filtered } = useListFilter(companies, {
    searchFields: (company) => [
      company.name,
      company.fullName,
      company.category,
      company.tagline,
      company.about,
      company.eligibility.summary
    ],
    facets: {
      category: (company, value) => company.category === value,
      difficulty: (company, value) => company.difficulty === value
    }
  })

  const sorted = useMemo(() => {
    const list = [...filtered]
    switch (sort) {
      case 'package':
        return list.sort((a, b) => packageValue(b.stats.avgPackage) - packageValue(a.stats.avgPackage))
      case 'openings':
        return list.sort((a, b) => b.stats.openings - a.stats.openings)
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating)
      case 'name':
        return list.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return list.sort(
          (a, b) => b.stats.applicants - a.stats.applicants || Number(b.featured) - Number(a.featured)
        )
    }
  }, [filtered, sort])

  const totals = {
    openings: companies.reduce((sum, company) => sum + company.stats.openings, 0),
    applicants: companies.reduce((sum, company) => sum + company.stats.applicants, 0),
    experiences: experiences.length
  }

  return (
    <>
      <PageHeader
        eyebrow="Company database"
        title="Companies"
        description="Every major recruiter with eligibility criteria, round-by-round selection process, aptitude and coding pattern, technical and HR question sets, senior experiences and resources."
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="building" value={companies.length} label="Companies covered" />
          <StatCard icon="briefcase" value={compactNumber(totals.openings)} label="Total openings" hint="2026 batch" />
          <StatCard icon="users" value={compactNumber(totals.applicants)} label="Total applicants" tone="accent" />
          <StatCard icon="clipboard" value={totals.experiences} label="Senior experiences" tone="success" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="toolbar">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search by company, category or eligibility…"
          />
          <select
            className="select"
            style={{ width: 200 }}
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort companies"
          >
            {sorts.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="stack" style={{ gap: 12, marginBottom: 22 }}>
          <FilterChips
            options={categoryOptions}
            value={active.category || 'All'}
            onChange={(value) => setFacet('category', value === 'All' ? '' : value)}
            ariaLabel="Filter by category"
          />
          <FilterChips
            options={difficultyOptions}
            value={active.difficulty || 'All'}
            onChange={(value) => setFacet('difficulty', value === 'All' ? '' : value)}
            ariaLabel="Filter by difficulty"
          />
        </div>

        <p className="result-count">
          Showing <strong>{sorted.length}</strong> of {companies.length} companies
        </p>

        {sorted.length === 0 ? (
          <EmptyState
            title="No companies match your search"
            description="Try a different keyword, or clear the filters to see all 8 companies."
          />
        ) : (
          <div className="grid grid-2">
            {sorted.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}