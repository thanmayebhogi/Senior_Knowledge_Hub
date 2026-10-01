import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import CompanyLogo from '../components/CompanyLogo'
import BookmarkButton from '../components/BookmarkButton'
import LikeButton from '../components/LikeButton'
import ExperienceCard from '../components/ExperienceCard'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'
import { companyById, companies } from '../data/companies'
import { experiences } from '../data/experiences'
import { questions } from '../data/questions'
import { problemsByCompany } from '../data/codingProblems'
import { compactNumber } from '../utils/format'
import { difficultyTone } from '../utils/tone'

const sections = [
  { id: 'eligibility', label: 'Eligibility', icon: 'checkCircle' },
  { id: 'process', label: 'Selection Process', icon: 'layers' },
  { id: 'aptitude', label: 'Aptitude', icon: 'chart' },
  { id: 'coding', label: 'Coding', icon: 'code' },
  { id: 'technical', label: 'Technical Interview', icon: 'users' },
  { id: 'hr', label: 'HR Interview', icon: 'message' },
  { id: 'experiences', label: 'Senior Experiences', icon: 'clipboard' },
  { id: 'resources', label: 'Resources', icon: 'book' }
]

export default function CompanyDetail() {
  const { companyId } = useParams()
  const company = companyById(companyId)
  const [activeSection, setActiveSection] = useState('eligibility')

  const companyExperiences = useMemo(
    () => experiences.filter((experience) => experience.companyId === companyId),
    [companyId]
  )

  const companyQuestions = useMemo(
    () => questions.filter((question) => question.companyId === companyId),
    [companyId]
  )

  const companyProblems = useMemo(() => problemsByCompany(companyId), [companyId])

  if (!company) {
    return (
      <>
        <PageHeader title="Company not found" crumbs={[{ label: 'Companies', to: '/companies' }, { label: 'Not found' }]} />
        <div className="container page">
          <EmptyState
            icon="building"
            title="We do not have this company yet"
            description="The link may be outdated. Browse the full company list to pick another recruiter."
            action={
              <Link to="/companies" className="btn btn-primary">
                Back to companies
              </Link>
            }
          />
        </div>
      </>
    )
  }

  const others = companies.filter((item) => item.id !== company.id).slice(0, 4)

  return (
    <>
      <section className="company-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevronRight" size={13} />
            <Link to="/companies">Companies</Link>
            <Icon name="chevronRight" size={13} />
            <span>{company.name}</span>
          </nav>

          <div className="company-hero-inner">
            <CompanyLogo companyId={company.id} size={66} />
            <div className="grow">
              <div className="row wrap" style={{ gap: 10 }}>
                <h1 style={{ fontSize: '1.9rem' }}>{company.name}</h1>
                <span className="badge badge-primary">{company.category}</span>
                <span className={`badge badge-${difficultyTone(company.difficulty)}`}>
                  {company.difficulty}
                </span>
                <span className="badge badge-accent">{company.tag}</span>
                <span className="rating">
                  <Icon name="star" size={14} filled />
                  {company.rating}
                </span>
              </div>
              <p className="soft mt-1">{company.tagline}</p>
            </div>
            <div className="row wrap">
              <BookmarkButton
                variant="full"
                item={{
                  type: 'company',
                  id: company.id,
                  title: company.name,
                  subtitle: company.category,
                  to: `/companies/${company.id}`
                }}
              />
              <Link to="/company-preparation" className="btn btn-primary btn-sm">
                Preparation plan
                <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          </div>

          <div className="company-facts">
            <div className="fact">
              <div className="k">Batch</div>
              <div className="v">{company.stats.batch}</div>
            </div>
            <div className="fact">
              <div className="k">Avg package</div>
              <div className="v">{company.stats.avgPackage}</div>
            </div>
            <div className="fact">
              <div className="k">Openings</div>
              <div className="v">{compactNumber(company.stats.openings)}</div>
            </div>
            <div className="fact">
              <div className="k">Applicants</div>
              <div className="v">{compactNumber(company.stats.applicants)}</div>
            </div>
            <div className="fact">
              <div className="k">Selection rate</div>
              <div className="v">{company.stats.hireRate}%</div>
            </div>
            <div className="fact">
              <div className="k">Roles</div>
              <div className="v small">{company.stats.roles.join(' · ')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container page">
        <div className="section-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`chip${activeSection === section.id ? ' active' : ''}`}
              onClick={() => {
                setActiveSection(section.id)
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              <Icon name={section.icon} size={14} />
              {section.label}
            </button>
          ))}
        </div>

        <section id="eligibility" className="detail-section">
          <h2>
            <Icon name="checkCircle" size={20} /> Eligibility
          </h2>
          <div className="panel mt-2">
            <div className="callout mb-3">
              <Icon name="info" size={16} />
              <div>{company.eligibility.summary}</div>
            </div>
            <div className="data-list">
              {company.eligibility.rows.map((row) => (
                <div key={row.label} className="data-row">
                  <span className="k">{row.label}</span>
                  <span className="v">{row.value}</span>
                </div>
              ))}
            </div>
            {company.eligibility.notes?.length > 0 && (
              <>
                <div className="divider" />
                <ul className="bullet-list">
                  {company.eligibility.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        <section id="process" className="detail-section">
          <h2>
            <Icon name="layers" size={20} /> Selection Process
          </h2>
          <p className="small muted mt-1">
            {company.selectionProcess.length} rounds from test to offer. Typical cut-offs are what last-year
            candidates report.
          </p>
          <div className="grid grid-2 mt-2">
            {company.selectionProcess.map((step, index) => (
              <div key={step.round} className="item-card">
                <div className="card-top">
                  <div className="row" style={{ gap: 12 }}>
                    <span className="step-index">{index + 1}</span>
                    <div>
                      <h3 className="card-title">{step.round}</h3>
                      <div className="tiny muted">{step.mode}</div>
                    </div>
                  </div>
                  <span className="badge badge-primary">{step.cutOff}</span>
                </div>
                <div className="data-list mt-2">
                  <div className="data-row">
                    <span className="k">Duration</span>
                    <span className="v">{step.duration}</span>
                  </div>
                  <div className="data-row">
                    <span className="k">Focus</span>
                    <span className="v">{step.focus}</span>
                  </div>
                </div>
                <div className="callout mt-2">
                  <Icon name="bulb" size={16} />
                  <div>{step.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="aptitude" className="detail-section">
          <h2>
            <Icon name="chart" size={20} /> Aptitude
          </h2>
          <div className="panel mt-2">
            <div className="grid grid-2">
              <div>
                <h4 className="small strong">Topics to prepare</h4>
                <div className="row wrap mt-1" style={{ gap: 8 }}>
                  {company.aptitude.topics.map((topic) => (
                    <span key={topic} className="badge badge-primary">
                      {topic}
                    </span>
                  ))}
                </div>
                <h4 className="small strong mt-3">Exam pattern</h4>
                <ul className="bullet-list mt-1">
                  {company.aptitude.pattern.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="small strong">Sample questions</h4>
                <div className="stack mt-1" style={{ gap: 10 }}>
                  {company.aptitude.sampleQuestions.map((question) => (
                    <div key={question} className="callout">
                      <Icon name="help" size={16} />
                      <div>{question}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coding" className="detail-section">
          <h2>
            <Icon name="code" size={20} /> Coding
          </h2>
          <div className="panel mt-2">
            <div className="row wrap mb-2" style={{ gap: 8 }}>
              <span className="small strong">Allowed languages:</span>
              {company.coding.languages.map((language) => (
                <span key={language} className="badge badge-accent">
                  {language}
                </span>
              ))}
            </div>
            <h4 className="small strong">Topics</h4>
            <div className="row wrap mt-1" style={{ gap: 8 }}>
              {company.coding.topics.map((topic) => (
                <span key={topic} className="badge">
                  {topic}
                </span>
              ))}
            </div>

            <div className="divider" />
            <h4 className="small strong">Things to know before the test</h4>
            <ul className="check-list mt-1">
              {company.coding.notes.map((note) => (
                <li key={note}>
                  <Icon name="check" size={15} />
                  {note}
                </li>
              ))}
            </ul>

            <div className="divider" />
            <h4 className="small strong">Sample coding questions</h4>
            <div className="stack mt-1" style={{ gap: 10 }}>
              {company.coding.sampleQuestions.map((question) => (
                <div key={question} className="callout">
                  <Icon name="terminal" size={16} />
                  <div>{question}</div>
                </div>
              ))}
            </div>
          </div>

          {companyProblems.length > 0 && (
            <>
              <div className="divider" />
              <div className="row-between wrap mb-2">
                <h4>Practice problems asked at {company.name}</h4>
                <Link to="/coding-problems" className="btn btn-outline btn-sm">
                  All coding problems
                  <Icon name="arrowRight" size={14} />
                </Link>
              </div>
              <div className="stack">
                {companyProblems.slice(0, 4).map((problem) => (
                  <div key={problem.id} className="item-card">
                    <div className="card-top">
                      <div className="row wrap" style={{ gap: 8 }}>
                        <span className={`badge badge-${difficultyTone(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                        <span className="badge badge-accent">{problem.topic}</span>
                      </div>
                      <LikeButton
                        likeKey={`company-problem:${problem.id}`}
                        count={Math.round(problem.asked * 0.05)}
                        label="likes"
                        compact
                      />
                    </div>
                    <h4 className="card-title">{problem.title}</h4>
                    <p className="card-body mt-1 clamp-2">{problem.description}</p>
                    <div className="card-foot">
                      <span className="tiny muted">
                        Asked {compactNumber(problem.asked)} times · {problem.complexity.time}
                      </span>
                      <Link to="/coding-problems" className="btn btn-soft btn-sm">
                        Solve
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        <section id="technical" className="detail-section">
          <h2>
            <Icon name="users" size={20} /> Technical Interview
          </h2>
          <div className="panel mt-2">
            <h4 className="small strong">Topics to cover</h4>
            <div className="row wrap mt-1" style={{ gap: 8 }}>
              {company.technical.topics.map((topic) => (
                <span key={topic} className="badge badge-primary">
                  {topic}
                </span>
              ))}
            </div>
            <div className="divider" />
            <h4 className="small strong">Questions asked in this round</h4>
            <div className="stack mt-1" style={{ gap: 10 }}>
              {company.technical.questions.map((question) => (
                <div key={question} className="callout">
                  <Icon name="help" size={16} />
                  <div>{question}</div>
                </div>
              ))}
            </div>
          </div>

          {companyQuestions.length > 0 && (
            <>
              <div className="divider" />
              <h4>Curated answers for this company</h4>
              <div className="stack mt-2">
                {companyQuestions.map((question) => (
                  <div key={question.id} className="item-card">
                    <div className="card-top">
                      <span className="badge badge-accent">{question.category}</span>
                      <span className={`badge badge-${difficultyTone(question.difficulty)}`}>
                        {question.difficulty}
                      </span>
                    </div>
                    <h4 className="card-title">{question.question}</h4>
                    <p className="card-body mt-1 clamp-3">{question.answer}</p>
                    <div className="card-foot">
                      <Link to="/interview-questions" className="btn btn-soft btn-sm">
                        Full answer
                      </Link>
                      <LikeButton
                        likeKey={`company-question:${question.id}`}
                        count={question.votes}
                        label="helpful"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        <section id="hr" className="detail-section">
          <h2>
            <Icon name="message" size={20} /> HR Interview
          </h2>
          <div className="panel mt-2">
            <div className="grid grid-2">
              <div>
                <h4 className="small strong">Expected questions</h4>
                <ul className="bullet-list mt-1">
                  {company.hr.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="callout success">
                  <Icon name="award" size={16} />
                  <div>
                    <strong className="strong">How to stand out:</strong> {company.hr.tips.join(' ')}
                  </div>
                </div>
                <h4 className="small strong mt-3">Answer framework</h4>
                <ul className="bullet-list mt-1">
                  <li>Answer in under 60 seconds for introduction questions.</li>
                  <li>Use STAR (Situation, Task, Action, Result) for behavioural questions.</li>
                  <li>State location flexibility and joining date clearly and honestly.</li>
                  <li>Research the company before the round — one specific detail stands out.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="detail-section">
          <h2>
            <Icon name="clipboard" size={20} /> Senior Experiences
          </h2>
          <p className="small muted mt-1">
            {companyExperiences.length} detailed experiences from final-year students who attempted{' '}
            {company.name}.
          </p>
          <div className="stack mt-2">
            {companyExperiences.length === 0 ? (
              <EmptyState
                icon="users"
                title="No experiences yet"
                description={`No senior has shared a ${company.name} experience. Be the first — share it in the Q&A section.`}
                action={
                  <Link to="/qa" className="btn btn-primary btn-sm">
                    Post your experience
                  </Link>
                }
              />
            ) : (
              companyExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} showCompany={false} />
              ))
            )}
          </div>
        </section>

        <section id="resources" className="detail-section">
          <h2>
            <Icon name="book" size={20} /> Resources
          </h2>
          <div className="grid grid-2 mt-2">
            {company.resources.map((resource) => (
              <div key={resource.title} className="item-card">
                <div className="card-top">
                  <div className="row" style={{ gap: 10 }}>
                    <span className="section-title-icon">
                      <Icon name="book" size={16} />
                    </span>
                    <div>
                      <span className="badge badge-primary">{resource.type}</span>
                      <div className="tiny muted mt-1">{resource.meta}</div>
                    </div>
                  </div>
                  <BookmarkButton
                    item={{
                      type: 'company-resource',
                      id: `${company.id}-${resource.title}`,
                      title: resource.title,
                      subtitle: `${company.name} · ${resource.type}`,
                      to: `/companies/${company.id}`
                    }}
                  />
                </div>
                <h4 className="card-title">{resource.title}</h4>
                <div className="card-foot">
                  <span className="tiny muted">Recommended for {company.name}</span>
                  <Link to="/resources" className="btn btn-soft btn-sm">
                    Library
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2>
            <Icon name="sparkle" size={20} /> Other companies
          </h2>
          <div className="grid grid-4 mt-2">
            {others.map((item) => (
              <Link key={item.id} to={`/companies/${item.id}`} className="item-card clickable">
                <div className="company-card-head">
                  <CompanyLogo companyId={item.id} size={38} />
                  <div>
                    <div className="card-title">{item.name}</div>
                    <div className="tiny muted">{item.stats.avgPackage}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}