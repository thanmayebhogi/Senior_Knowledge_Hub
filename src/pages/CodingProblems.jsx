import { useMemo } from 'react'
import PageHeader from '../components/PageHeader'
import CodingCard from '../components/CodingCard'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import { codingProblems, topics } from '../data/codingProblems'
import { companies } from '../data/companies'
import { useListFilter } from '../hooks/useListFilter'
import { compactNumber } from '../utils/format'

export default function CodingProblems() {
  const topicOptions = useMemo(() => ['All', ...topics], [])
  const difficultyOptions = ['All', 'Easy', 'Medium', 'Hard']
  const companyOptions = useMemo(() => ['All', ...companies.map((company) => company.name)], [])

  const { query, setQuery, active, setFacet, filtered } = useListFilter(codingProblems, {
    searchFields: (problem) => [problem.title, problem.description, problem.topic, problem.approach],
    facets: {
      topic: (problem, value) => problem.topic === value,
      difficulty: (problem, value) => problem.difficulty === value,
      company: (problem, value) => {
        const company = companies.find((item) => item.name === value)
        return problem.companies.includes(company?.id)
      }
    }
  })

  const totalAsked = codingProblems.reduce((sum, problem) => sum + problem.asked, 0)

  return (
    <>
      <PageHeader
        eyebrow="Coding practice"
        title="Coding Problems"
        description="Problems that repeat in campus drives, with the approach, a reference solution, time and space complexity, and the companies that ask them."
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="code" value={codingProblems.length} label="Problems solved with code" />
          <StatCard icon="layers" value={topics.length} label="Topics covered" tone="accent" />
          <StatCard icon="trending" value={compactNumber(totalAsked)} label="Total times asked" tone="success" />
          <StatCard icon="building" value={companies.length} label="Companies tagged" tone="info" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="toolbar">
          <SearchInput value={query} onChange={setQuery} placeholder="Search problems, topics or approaches…" />
        </div>

        <div className="stack" style={{ gap: 12, marginBottom: 22 }}>
          <FilterChips
            options={topicOptions}
            value={active.topic || 'All'}
            onChange={(value) => setFacet('topic', value === 'All' ? '' : value)}
            ariaLabel="Filter by topic"
          />
          <div className="grid grid-2" style={{ gap: 12 }}>
            <FilterChips
              options={difficultyOptions}
              value={active.difficulty || 'All'}
              onChange={(value) => setFacet('difficulty', value === 'All' ? '' : value)}
              ariaLabel="Filter by difficulty"
            />
            <FilterChips
              options={companyOptions}
              value={active.company || 'All'}
              onChange={(value) => setFacet('company', value === 'All' ? '' : value)}
              ariaLabel="Filter by company"
            />
          </div>
        </div>

        <p className="result-count">
          Showing <strong>{filtered.length}</strong> of {codingProblems.length} problems
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon="code"
            title="No problems match this filter"
            description="Clear the filters to browse all problems by topic and difficulty."
          />
        ) : (
          <div className="grid grid-2">
            {filtered.map((problem) => (
              <CodingCard key={problem.id} problem={problem} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}