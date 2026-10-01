import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import SectionTitle from '../components/SectionTitle'
import CompanyLogo from '../components/CompanyLogo'
import StatCard from '../components/StatCard'
import SearchInput from '../components/SearchInput'
import {
  preparationPhases,
  companyFocus,
  universalChecklist,
  aptitudeTopicWeightage
} from '../data/preparation'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useApp } from '../context/AppContext'

export default function CompanyPreparation() {
  const [checked, setChecked] = useLocalStorage('prep-checklist', [])
  const [query, setQuery] = useState('')
  const { showToast } = useApp()

  const allTasks = useMemo(
    () => preparationPhases.flatMap((phase) => phase.tasks.map((task) => task.title)),
    []
  )

  const progress = allTasks.length ? Math.round((checked.length / allTasks.length) * 100) : 0

  const toggleTask = (title) => {
    setChecked((current) => {
      const exists = current.includes(title)
      showToast(exists ? 'Task marked incomplete' : 'Task completed — nice work', exists ? 'info' : 'success')
      return exists ? current.filter((item) => item !== title) : [...current, title]
    })
  }

  const focusFiltered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return companyFocus
    return companyFocus.filter((item) =>
      `${item.name} ${item.focus} ${item.tip} ${item.topics.map((topic) => topic.name).join(' ')}`
        .toLowerCase()
        .includes(term)
    )
  }, [query])

  return (
    <>
      <PageHeader
        eyebrow="Preparation hub"
        title="Company Preparation"
        description="A fixed 12-week plan built around what each recruiter actually tests, plus a company-wise focus map and a practical checklist you can tick off."
        actions={
          <>
            <Link to="/companies" className="btn btn-outline">
              <Icon name="building" size={16} />
              Open a company
            </Link>
            <Link to="/coding-problems" className="btn btn-primary">
              <Icon name="code" size={16} />
              Start coding practice
            </Link>
          </>
        }
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="layers" value="12" label="Week roadmap" />
          <StatCard icon="target" value={companyFocus.length} label="Company focus maps" tone="accent" />
          <StatCard icon="checkCircle" value={`${progress}%`} label="Checklist completed" tone="success" />
          <StatCard icon="clipboard" value={universalChecklist.length} label="Drive-day reminders" tone="warning" />
        </div>
      </PageHeader>

      <div className="container page">
        <section className="panel">
          <div className="row-between wrap mb-2">
            <div>
              <h3>Your preparation progress</h3>
              <p className="small muted">
                {checked.length} of {allTasks.length} tasks completed — stored only in this browser.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setChecked([])
                showToast('Checklist reset', 'info')
              }}
            >
              Reset progress
            </button>
          </div>
          <div className="progress">
            <span style={{ width: `${progress}%` }} />
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="layers"
            title="12-week roadmap"
            subtitle="Move phase by phase. Each phase has a clear goal and five tasks that matter most."
          />
          <div className="stack mt-3">
            {preparationPhases.map((phase) => (
              <div key={phase.id} className="item-card" style={{ borderLeft: `4px solid ${phase.color}` }}>
                <div className="card-top">
                  <div>
                    <div className="row wrap" style={{ gap: 10 }}>
                      <h3 className="card-title">{phase.title}</h3>
                      <span className="badge" style={{ background: `${phase.color}14`, color: phase.color }}>
                        {phase.duration}
                      </span>
                    </div>
                    <p className="small muted mt-1">{phase.goal}</p>
                  </div>
                  <span className="badge badge-primary">
                    {phase.tasks.filter((task) => checked.includes(task.title)).length}/{phase.tasks.length}
                  </span>
                </div>

                <div className="stack mt-2" style={{ gap: 8 }}>
                  {phase.tasks.map((task) => {
                    const done = checked.includes(task.title)
                    return (
                      <button
                        key={task.title}
                        type="button"
                        className={`task-row${done ? ' done' : ''}`}
                        onClick={() => toggleTask(task.title)}
                      >
                        <span className={`task-check${done ? ' checked' : ''}`}>
                          {done && <Icon name="check" size={13} />}
                        </span>
                        <span className="grow" style={{ textAlign: 'left' }}>
                          <span className="small strong" style={{ display: 'block' }}>
                            {task.title}
                          </span>
                          <span className="tiny muted">{task.meta}</span>
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="target"
            title="Company-wise focus map"
            subtitle="Where each company spends its cut-off marks, and the single tip that matters most."
          />
          <div className="toolbar mt-2">
            <SearchInput value={query} onChange={setQuery} placeholder="Search focus areas…" />
          </div>
          <div className="grid grid-2">
            {focusFiltered.map((item) => (
              <div key={item.companyId} className="item-card">
                <div className="card-top">
                  <div className="row" style={{ gap: 12 }}>
                    <CompanyLogo companyId={item.companyId} size={38} />
                    <div>
                      <Link to={`/companies/${item.companyId}`} className="card-title">
                        {item.name}
                      </Link>
                      <div className="tiny muted">{item.focus}</div>
                    </div>
                  </div>
                  <span className={`badge badge-${item.priority === 'High' ? 'danger' : 'info'}`}>
                    {item.priority} priority
                  </span>
                </div>

                <div className="stack mt-2" style={{ gap: 10 }}>
                  {item.topics.map((topic) => (
                    <div key={topic.name}>
                      <div className="row-between">
                        <span className="small strong">{topic.name}</span>
                        <span className="tiny muted">{topic.weight}%</span>
                      </div>
                      <div className="progress" style={{ marginTop: 5 }}>
                        <span style={{ width: `${topic.weight}%` }} />
                      </div>
                      <div className="tiny muted mt-1">{topic.note}</div>
                    </div>
                  ))}
                </div>

                <div className="callout mt-2">
                  <Icon name="bulb" size={16} />
                  <div>{item.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="chart"
            title="Aptitude weightage across drives"
            subtitle="Roughly how the marks are distributed in the online tests of these recruiters."
          />
          <div className="panel mt-2">
            <div className="stack">
              {aptitudeTopicWeightage.map((topic) => (
                <div key={topic.topic}>
                  <div className="row-between">
                    <span className="small strong">{topic.topic}</span>
                    <span className="tiny muted">{topic.weight}%</span>
                  </div>
                  <div className="progress" style={{ marginTop: 6 }}>
                    <span style={{ width: `${topic.weight}%` }} />
                  </div>
                  <div className="tiny muted mt-1">{topic.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <SectionTitle
            icon="shield"
            title="Drive-day reminders"
            subtitle="Small things that cost students their selection every year."
          />
          <div className="grid grid-3 mt-2">
            {universalChecklist.map((item) => (
              <div key={item.id} className="item-card">
                <div className="row" style={{ gap: 10 }}>
                  <span className="section-title-icon" style={{ width: 30, height: 30 }}>
                    <Icon name="check" size={15} />
                  </span>
                  <div>
                    <div className="card-title">{item.title}</div>
                    <div className="tiny muted">{item.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}