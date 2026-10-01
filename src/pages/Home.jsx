import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import SectionTitle from '../components/SectionTitle'
import SearchInput from '../components/SearchInput'
import CompanyCard from '../components/CompanyCard'
import QuestionCard from '../components/QuestionCard'
import ResourceCard from '../components/ResourceCard'
import CodeBlock from '../components/CodeBlock'
import { companies } from '../data/companies'
import { questions } from '../data/questions'
import { codingProblems } from '../data/codingProblems'
import { featuredResources } from '../data/resources'
import { experiences } from '../data/experiences'
import { stories } from '../data/stories'
import { preparationPhases } from '../data/preparation'
import { useApp } from '../context/AppContext'
import { compactNumber, matchesQuery } from '../utils/format'

const featureCards = [
  {
    to: '/companies',
    icon: 'building',
    title: 'Company deep dives',
    text: 'Eligibility, selection process, aptitude, coding, technical and HR rounds for 8 major recruiters.'
  },
  {
    to: '/senior-experiences',
    icon: 'users',
    title: 'Real senior experiences',
    text: 'Round-by-round accounts from final-year students who actually cleared the drives.'
  },
  {
    to: '/coding-problems',
    icon: 'code',
    title: 'Coding practice',
    text: '20 problems asked repeatedly in drives, with solutions, complexity and company tags.'
  },
  {
    to: '/qa',
    icon: 'message',
    title: 'Ask the community',
    text: 'Post questions, share answers — everything is saved in your browser, no login needed.'
  }
]

const stats = [
  { icon: 'building', value: companies.length, label: 'Companies covered' },
  { icon: 'users', value: experiences.length * 40, label: 'Shared experiences' },
  { icon: 'help', value: questions.length, label: 'Interview questions' },
  { icon: 'code', value: codingProblems.length, label: 'Coding problems' },
  { icon: 'book', value: featuredResources.length * 4, label: 'Curated resources' },
  { icon: 'trophy', value: stories.length, label: 'Success stories' }
]

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { profile } = useApp()

  const results = useMemo(() => {
    if (!query.trim()) return []
    const companyHits = companies
      .filter((company) => matchesQuery(query, company.name, company.fullName, company.category, company.tagline))
      .map((company) => ({
        id: `company-${company.id}`,
        type: 'Company',
        title: company.name,
        text: company.tagline,
        to: `/companies/${company.id}`,
        icon: 'building'
      }))

    const questionHits = questions
      .filter((question) => matchesQuery(query, question.question, question.category, question.answer))
      .slice(0, 4)
      .map((question) => ({
        id: `question-${question.id}`,
        type: 'Question',
        title: question.question,
        text: question.category,
        to: '/interview-questions',
        icon: 'help'
      }))

    const problemHits = codingProblems
      .filter((problem) => matchesQuery(query, problem.title, problem.topic, problem.description))
      .slice(0, 4)
      .map((problem) => ({
        id: `problem-${problem.id}`,
        type: 'Coding',
        title: problem.title,
        text: `${problem.topic} · ${problem.difficulty}`,
        to: '/coding-problems',
        icon: 'code'
      }))

    return [...companyHits, ...questionHits, ...problemHits].slice(0, 8)
  }, [query])

  const topCompanies = companies.filter((company) => company.featured)
  const spotlightProblems = codingProblems.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <Icon name="sparkle" size={14} />
              100% frontend · works offline · no login
            </span>
            <h1>
              Everything a final-year student needs to <span className="text-gradient">crack campus placements</span>
            </h1>
            <p className="hero-lead">
              Company-wise eligibility, round-by-round selection process, senior experiences,
              interview questions with answers, coding problems and a Q&amp;A community — organised
              so you can prepare in a fixed plan instead of random scrolling.
            </p>

            <div className="hero-search">
              <SearchInput
                value={query}
                onChange={setQuery}
                placeholder="Search companies, questions or coding problems…"
              />
            </div>

            {query.trim() && (
              <div className="search-results">
                {results.length === 0 ? (
                  <p className="small muted">No matches for “{query}”. Try TCS, Infosys, deadlock or palindrome.</p>
                ) : (
                  <ul className="search-results-list">
                    {results.map((result) => (
                      <li key={result.id}>
                        <Link to={result.to} onClick={() => setQuery('')}>
                          <span className="section-title-icon" style={{ width: 30, height: 30 }}>
                            <Icon name={result.icon} size={15} />
                          </span>
                          <span className="grow">
                            <span className="small strong truncate" style={{ display: 'block' }}>
                              {result.title}
                            </span>
                            <span className="tiny muted truncate" style={{ display: 'block' }}>
                              {result.type} · {result.text}
                            </span>
                          </span>
                          <Icon name="arrowRight" size={15} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="hero-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('/company-preparation')}>
                Start my preparation plan
                <Icon name="arrowRight" size={17} />
              </button>
              <button type="button" className="btn btn-outline btn-lg" onClick={() => navigate('/companies')}>
                Browse companies
              </button>
            </div>

            {profile?.name ? (
              <div className="callout mt-3">
                <Icon name="checkCircle" size={16} />
                <div>
                  Welcome back, <strong className="strong">{profile.name}</strong>. Your bookmarks and notes
                  are saved on this device. <Link to="/profile">Update profile</Link>
                </div>
              </div>
            ) : (
              <div className="callout mt-3">
                <Icon name="user" size={16} />
                <div>
                  Create a local <Link to="/profile">profile</Link> to keep your target companies, CGPA and
                  preparation checklist together.
                </div>
              </div>
            )}
          </div>

          <div className="hero-panel">
            <div className="row-between mb-2">
              <h3>Companies in this hub</h3>
              <span className="badge badge-primary">{companies.length} recruiters</span>
            </div>

            {companies.map((company) => (
              <Link key={company.id} to={`/companies/${company.id}`} className="hero-panel-item">
                <span className="logo-tile" style={{ background: company.color, width: 38, height: 38, fontSize: 11 }}>
                  {company.logo}
                </span>
                <span className="grow">
                  <span className="small strong" style={{ display: 'block' }}>
                    {company.name}
                  </span>
                  <span className="tiny muted">{company.stats.avgPackage} · {company.category}</span>
                </span>
                <Icon name="chevronRight" size={16} />
              </Link>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{compactNumber(stat.value)}</strong>
                <span className="tiny muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container page">
        <section className="section">
          <SectionTitle
            icon="layers"
            title="How to use this hub"
            subtitle="Four building blocks that cover the complete campus placement cycle."
          />
          <div className="grid grid-4">
            {featureCards.map((feature) => (
              <Link key={feature.to} to={feature.to} className="item-card clickable">
                <span className="section-title-icon">
                  <Icon name={feature.icon} size={18} />
                </span>
                <h3 className="card-title mt-2">{feature.title}</h3>
                <p className="card-body mt-1">{feature.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="building"
            title="Featured companies"
            subtitle="Open a company to see eligibility, the full selection process, aptitude and coding pattern, technical and HR questions, senior experiences and resources."
            actionTo="/companies"
            actionLabel="All 8 companies"
          />
          <div className="grid grid-2">
            {topCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="target"
            title="12-week preparation roadmap"
            subtitle="A fixed plan beats random practice. Follow the four phases in order."
            actionTo="/company-preparation"
            actionLabel="Open preparation hub"
          />
          <div className="grid grid-4">
            {preparationPhases.map((phase) => (
              <div key={phase.id} className="item-card" style={{ borderTop: `3px solid ${phase.color}` }}>
                <span className="badge" style={{ background: `${phase.color}14`, color: phase.color }}>
                  {phase.duration}
                </span>
                <h3 className="card-title mt-2">{phase.title}</h3>
                <p className="card-body mt-1">{phase.goal}</p>
                <div className="card-foot">
                  <span className="tiny muted">{phase.tasks.length} key tasks</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="code"
            title="Most asked coding problems"
            subtitle="Problems that repeat across drives, with approaches and complexity analysis."
            actionTo="/coding-problems"
            actionLabel="All coding problems"
          />
          <div className="grid grid-3">
            {spotlightProblems.map((problem) => (
              <div key={problem.id} className="item-card">
                <div className="card-top">
                  <span className="badge badge-primary">{problem.topic}</span>
                  <span className="badge">{problem.frequency}% frequency</span>
                </div>
                <h3 className="card-title">{problem.title}</h3>
                <p className="card-body mt-1 clamp-2">{problem.description}</p>
                <div className="card-foot">
                  <span className="tiny muted">
                    {problem.complexity.time} · {problem.companies.length} companies
                  </span>
                  <Link to="/coding-problems" className="btn btn-soft btn-sm">
                    Practice
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="grid grid-2">
            <div>
              <SectionTitle
                icon="help"
                title="Top interview questions"
                actionTo="/interview-questions"
                actionLabel="Browse all questions"
              />
              <div className="stack">
                {questions.slice(0, 4).map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            </div>
            <div>
              <SectionTitle
                icon="book"
                title="Recommended resources"
                actionTo="/resources"
                actionLabel="Resource library"
              />
              <div className="stack">
                {featuredResources.slice(0, 4).map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="zap"
            title="Snippet of the day"
            subtitle="A quick DSA pattern you can revise in under two minutes."
          />
          <div className="panel">
            <div className="row-between wrap mb-2">
              <div>
                <h3>{codingProblems[2].title}</h3>
                <p className="small muted">{codingProblems[2].approach}</p>
              </div>
              <Link to="/coding-problems" className="btn btn-soft btn-sm">
                Open problem
                <Icon name="arrowRight" size={14} />
              </Link>
            </div>
            <CodeBlock code={codingProblems[2].solution} language="python" />
          </div>
        </section>

        <section className="section">
          <div className="cta-panel">
            <div>
              <h2>Still deciding which company to target?</h2>
              <p>
                Set your profile once, and we will show eligibility match, preparation priority and a
                shortlist of the most relevant questions and resources.
              </p>
              <div className="row wrap mt-2">
                <Link to="/profile" className="btn btn-primary">
                  <Icon name="user" size={16} />
                  Create my profile
                </Link>
                <Link to="/qa" className="btn btn-outline">
                  <Icon name="message" size={16} />
                  Ask a question
                </Link>
              </div>
            </div>
            <div className="cta-points">
              <span className="badge badge-success">
                <Icon name="check" size={13} /> Saved in localStorage
              </span>
              <span className="badge badge-success">
                <Icon name="check" size={13} /> Works without internet
              </span>
              <span className="badge badge-success">
                <Icon name="check" size={13} /> No account required
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}