import { useMemo } from 'react'
import PageHeader from '../components/PageHeader'
import QuestionCard from '../components/QuestionCard'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import { questions, categories, difficulties } from '../data/questions'
import { companies } from '../data/companies'
import { useListFilter } from '../hooks/useListFilter'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function InterviewQuestions() {
  const categoryOptions = useMemo(() => ['All', ...categories], [])
  const companyOptions = useMemo(() => ['All', ...companies.map((company) => company.name)], [])
  const difficultyOptions = useMemo(() => ['All', ...difficulties], [])

  const { query, setQuery, active, setFacet, filtered } = useListFilter(questions, {
    searchFields: (question) => [question.question, question.answer, question.category, question.tips],
    facets: {
      category: (question, value) => question.category === value,
      difficulty: (question, value) => question.difficulty === value,
      company: (question, value) => {
        const company = companies.find((item) => item.name === value)
        return question.companyId === company?.id
      }
    }
  })

  const totalVotes = questions.reduce((sum, question) => sum + question.votes, 0)

  return (
    <>
      <PageHeader
        eyebrow="Question bank"
        title="Interview Questions"
        description="Technical, DSA, DBMS, networking, cloud and HR questions with model answers, interview tips and the company each question came from."
        actions={
          <Link to="/qa" className="btn btn-outline">
            <Icon name="message" size={16} />
            Ask a question
          </Link>
        }
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="help" value={questions.length} label="Questions with answers" />
          <StatCard icon="layers" value={categories.length} label="Categories" tone="accent" />
          <StatCard icon="thumbUp" value={`${Math.round(totalVotes / 100) / 10}K`} label="Community votes" tone="success" />
          <StatCard icon="building" value={companies.length} label="Companies covered" tone="info" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="toolbar">
          <SearchInput value={query} onChange={setQuery} placeholder="Search questions and answers…" />
        </div>

        <div className="stack" style={{ gap: 12, marginBottom: 22 }}>
          <FilterChips
            options={categoryOptions}
            value={active.category || 'All'}
            onChange={(value) => setFacet('category', value === 'All' ? '' : value)}
            ariaLabel="Filter by category"
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
          Showing <strong>{filtered.length}</strong> of {questions.length} questions
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon="help"
            title="No questions match your search"
            description="Try a broader keyword such as SQL, deadlock, OOPS or TCP."
          />
        ) : (
          <div className="grid grid-2">
            {filtered.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}