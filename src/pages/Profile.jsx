import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import StatCard from '../components/StatCard'
import { companies } from '../data/companies'
import { useApp } from '../context/AppContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { avatarStyle } from '../utils/tone'
import { initials } from '../utils/format'

const branches = [
  'Computer Science (CSE)',
  'Information Technology (IT)',
  'Electronics & Communication (ECE)',
  'Mechanical Engineering',
  'Civil Engineering',
  'ECE / IoT',
  'BCA',
  'MCA',
  'B.Sc (CS / IT)',
  'MBA / BBA',
  'Other'
]

const skillSuggestions = [
  'Java',
  'Python',
  'C',
  'C++',
  'JavaScript',
  'React',
  'Node.js',
  'SQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Linux',
  'Git'
]

export default function Profile() {
  const {
    profile,
    updateProfile,
    resetProfile,
    bookmarks,
    likes,
    questions,
    answersFor,
    resetCommunity
  } = useApp()
  const [checked] = useLocalStorage('prep-checklist', [])

  const [form, setForm] = useState(profile)
  const [errors, setErrors] = useState({})
  const [skillDraft, setSkillDraft] = useState('')

  const update = (patch) => setForm((current) => ({ ...current, ...patch }))

  const toggleTarget = (companyId) =>
    update({
      targetCompanies: form.targetCompanies.includes(companyId)
        ? form.targetCompanies.filter((id) => id !== companyId)
        : [...form.targetCompanies, companyId]
    })

  const toggleSkill = (skill) =>
    update({
      skills: form.skills.includes(skill)
        ? form.skills.filter((item) => item !== skill)
        : [...form.skills, skill]
    })

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Add your name so the Q&A posts are attributed to you.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (form.cgpa && (Number(form.cgpa) < 0 || Number(form.cgpa) > 10)) {
      nextErrors.cgpa = 'CGPA should be between 0 and 10.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    updateProfile(form)
  }

  const cgpa = Number(form.cgpa) || 0
  const myAnswers = questions
    .filter((question) => question.isMine)
    .reduce((sum, question) => sum + answersFor(question.id).filter((answer) => answer.isMine).length, 0)

  const eligibility = useMemo(
    () =>
      companies.map((company) => {
        if (!cgpa) return { company, status: 'unknown', label: 'Add your CGPA' }
        if (cgpa >= 7.5) return { company, status: 'strong', label: 'Strong profile' }
        if (cgpa >= 6) return { company, status: 'eligible', label: 'Meets criteria' }
        return { company, status: 'risk', label: 'Below 60% criterion' }
      }),
    [cgpa]
  )

  const saved = form.name !== profile.name || form.email !== profile.email

  return (
    <>
      <PageHeader
        eyebrow="Your space"
        title="Profile"
        description="Save your details once and this hub keeps them in your browser for quick access while preparing. No server, no login."
        actions={
          <>
            <Link to="/qa" className="btn btn-outline btn-sm">
              <Icon name="message" size={15} />
              Ask a question
            </Link>
            <Link to="/bookmarks" className="btn btn-primary btn-sm">
              <Icon name="bookmark" size={15} />
              My bookmarks
            </Link>
          </>
        }
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="bookmark" value={bookmarks.length} label="Bookmarks saved" />
          <StatCard icon="thumbUp" value={likes.length} label="Helpful votes given" tone="accent" />
          <StatCard
            icon="message"
            value={questions.filter((question) => question.isMine).length + myAnswers}
            label="Your Q&A posts"
            tone="info"
          />
          <StatCard icon="checkCircle" value={checked.length} label="Prep tasks done" tone="success" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="profile-layout">
          <form className="panel" onSubmit={handleSubmit} noValidate>
            <div className="row-between wrap mb-3">
              <div className="row" style={{ gap: 14 }}>
                <span className="avatar avatar-lg" style={avatarStyle(form.name || 'Guest')}>
                  {initials(form.name || 'Guest')}
                </span>
                <div>
                  <h3>{form.name || 'Your name'}</h3>
                  <p className="small muted">
                    {form.college || 'Add your college'} · {form.branch || 'Branch'}
                  </p>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                <Icon name="check" size={16} />
                Save profile
              </button>
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="p-name">Full name</label>
                <input
                  id="p-name"
                  className="input"
                  value={form.name}
                  onChange={(event) => update({ name: event.target.value })}
                  placeholder="Your name"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="p-email">Email (optional)</label>
                <input
                  id="p-email"
                  className="input"
                  value={form.email}
                  onChange={(event) => update({ email: event.target.value })}
                  placeholder="you@college.edu"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="field">
                <label htmlFor="p-college">College</label>
                <input
                  id="p-college"
                  className="input"
                  value={form.college}
                  onChange={(event) => update({ college: event.target.value })}
                  placeholder="College / University name"
                />
              </div>

              <div className="field">
                <label htmlFor="p-branch">Branch</label>
                <select
                  id="p-branch"
                  className="select"
                  value={form.branch}
                  onChange={(event) => update({ branch: event.target.value })}
                >
                  <option value="">Select branch</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="p-cgpa">Current CGPA (out of 10)</label>
                <input
                  id="p-cgpa"
                  className="input"
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={form.cgpa}
                  onChange={(event) => update({ cgpa: event.target.value })}
                  placeholder="e.g. 8.2"
                />
                {errors.cgpa && <span className="form-error">{errors.cgpa}</span>}
              </div>

              <div className="field">
                <label htmlFor="p-batch">Graduation batch</label>
                <select
                  id="p-batch"
                  className="select"
                  value={form.batch}
                  onChange={(event) => update({ batch: event.target.value })}
                >
                  {['2025', '2026', '2027'].map((batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="p-goal">Goal package</label>
                <input
                  id="p-goal"
                  className="input"
                  value={form.goalPackage}
                  onChange={(event) => update({ goalPackage: event.target.value })}
                  placeholder="e.g. 8 LPA"
                />
              </div>

              <div className="field">
                <label htmlFor="p-start">Preparation start date</label>
                <input
                  id="p-start"
                  className="input"
                  type="date"
                  value={form.prepStartDate}
                  onChange={(event) => update({ prepStartDate: event.target.value })}
                />
              </div>
            </div>

            <div className="field mt-3">
              <label htmlFor="p-bio">About me</label>
              <textarea
                id="p-bio"
                className="textarea"
                value={form.bio}
                onChange={(event) => update({ bio: event.target.value })}
                placeholder="Branch, projects, internships, target companies…"
              />
            </div>

            <div className="field mt-3">
              <label>Skills you are practising</label>
              <div className="chips mt-1">
                {skillSuggestions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    className={`chip${form.skills.includes(skill) ? ' active' : ''}`}
                    onClick={() => toggleSkill(skill)}
                    aria-pressed={form.skills.includes(skill)}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <div className="row mt-2">
                <input
                  className="input"
                  style={{ maxWidth: 260 }}
                  value={skillDraft}
                  placeholder="Add another skill"
                  onChange={(event) => setSkillDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault()
                      const value = skillDraft.trim()
                      if (value && !form.skills.includes(value)) toggleSkill(value)
                      setSkillDraft('')
                    }
                  }}
                />
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => {
                    const value = skillDraft.trim()
                    if (value && !form.skills.includes(value)) toggleSkill(value)
                    setSkillDraft('')
                  }}
                >
                  <Icon name="plus" size={14} />
                  Add
                </button>
              </div>
              {form.skills.length > 0 && (
                <div className="row wrap mt-2" style={{ gap: 8 }}>
                  {form.skills.map((skill) => (
                    <span key={skill} className="badge badge-primary">
                      {skill}
                      <button
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        aria-label={`Remove ${skill}`}
                        style={{ display: 'grid', placeItems: 'center' }}
                      >
                        <Icon name="x" size={11} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="field mt-3">
              <label>Target companies</label>
              <div className="chips mt-1">
                {companies.map((company) => (
                  <button
                    key={company.id}
                    type="button"
                    className={`chip${form.targetCompanies.includes(company.id) ? ' active' : ''}`}
                    onClick={() => toggleTarget(company.id)}
                    aria-pressed={form.targetCompanies.includes(company.id)}
                  >
                    {company.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="row-between wrap mt-3">
              <span className="tiny muted">
                {saved ? 'You have unsaved changes' : 'All changes saved to this browser'}
              </span>
              <div className="row" style={{ gap: 8 }}>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setForm(profile)}
                  disabled={!saved}
                >
                  Discard changes
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    resetProfile()
                    setForm({ ...profile, name: '', email: '', college: '', branch: '', cgpa: '', bio: '', skills: [], targetCompanies: [] })
                  }}
                >
                  <Icon name="trash" size={14} />
                  Reset profile
                </button>
              </div>
            </div>
          </form>

          <aside className="stack">
            <div className="panel">
              <h4>
                <Icon name="target" size={16} /> Eligibility snapshot
              </h4>
              {!cgpa && (
                <p className="small muted mt-1">
                  Add your CGPA above and we will flag which companies you currently meet.
                </p>
              )}
              <div className="stack mt-2" style={{ gap: 8 }}>
                {eligibility.map(({ company, status, label }) => (
                  <Link key={company.id} to={`/companies/${company.id}`} className="elig-row">
                    <span className="logo-tile" style={{ background: company.color, width: 28, height: 28, fontSize: 9 }}>
                      {company.logo}
                    </span>
                    <span className="grow small strong">{company.name}</span>
                    <span className={`badge badge-${status === 'risk' ? 'danger' : status === 'strong' ? 'success' : status === 'eligible' ? 'info' : ''}`}>
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="panel">
              <h4>
                <Icon name="shield" size={16} /> Your local data
              </h4>
              <p className="small muted mt-1">
                Everything below is stored in this browser's localStorage. Clearing the browser data
                removes it permanently.
              </p>
              <ul className="check-list mt-2">
                <li>
                  <Icon name="check" size={15} />
                  Profile details ({profile.name ? 'saved' : 'not filled yet'})
                </li>
                <li>
                  <Icon name="check" size={15} />
                  {bookmarks.length} bookmarked items
                </li>
                <li>
                  <Icon name="check" size={15} />
                  {likes.length} helpful votes given
                </li>
                <li>
                  <Icon name="check" size={15} />
                  {questions.filter((question) => question.isMine).length} questions you posted
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-outline btn-sm btn-block mt-2"
                onClick={resetCommunity}
              >
                <Icon name="trash" size={14} />
                Clear my Q&amp;A posts
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}