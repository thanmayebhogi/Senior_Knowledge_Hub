import { Link } from 'react-router-dom'
import Icon from './Icon'

const columns = [
  {
    title: 'Explore',
    links: [
      { to: '/companies', label: 'Companies' },
      { to: '/company-preparation', label: 'Company Preparation' },
      { to: '/senior-experiences', label: 'Senior Experiences' },
      { to: '/success-stories', label: 'Success Stories' }
    ]
  },
  {
    title: 'Practice',
    links: [
      { to: '/interview-questions', label: 'Interview Questions' },
      { to: '/coding-problems', label: 'Coding Problems' },
      { to: '/qa', label: 'Q&A Community' },
      { to: '/resources', label: 'Resources' }
    ]
  },
  {
    title: 'Your Space',
    links: [
      { to: '/profile', label: 'Profile' },
      { to: '/bookmarks', label: 'Bookmarks' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand">
              <span className="brand-mark">SK</span>
              <span className="brand-text">
                Senior Knowledge Hub
                <span>Built for final-year students</span>
              </span>
            </Link>
            <p className="small muted mt-2" style={{ maxWidth: '38ch' }}>
              A frontend-only knowledge hub with company-wise eligibility, selection process,
              senior experiences, interview questions and coding practice. Everything is stored
              locally in your browser.
            </p>
            <div className="row wrap mt-2">
              <span className="badge badge-success">
                <Icon name="check" size={13} /> No backend needed
              </span>
              <span className="badge badge-primary">
                <Icon name="shield" size={13} /> Data stays on device
              </span>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h5>{column.title}</h5>
              <ul className="footer-links">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Senior Knowledge Hub. Sample content for practice.</span>
          <span className="row">
            <span>React</span>
            <span>·</span>
            <span>Vite</span>
            <span>·</span>
            <span>localStorage</span>
          </span>
        </div>
      </div>
    </footer>
  )
}