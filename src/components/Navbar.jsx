import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Icon from './Icon'

const primaryLinks = [
  { to: '/', label: 'Home', icon: 'rocket' },
  { to: '/companies', label: 'Companies', icon: 'building' },
  { to: '/company-preparation', label: 'Preparation', icon: 'target' },
  { to: '/senior-experiences', label: 'Experiences', icon: 'users' },
  { to: '/interview-questions', label: 'Questions', icon: 'help' },
  { to: '/coding-problems', label: 'Coding', icon: 'code' },
  { to: '/resources', label: 'Resources', icon: 'book' },
  { to: '/qa', label: 'Q&A', icon: 'message' },
  { to: '/success-stories', label: 'Stories', icon: 'trophy' }
]

const extraLinks = [
  { to: '/profile', label: 'Profile', icon: 'user' },
  { to: '/bookmarks', label: 'Bookmarks', icon: 'bookmark' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { bookmarks } = useApp()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">SK</span>
          <span className="brand-text">
            Senior Knowledge Hub
            <span>Placement preparation</span>
          </span>
        </Link>

        <nav className="nav-links">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/bookmarks" className="icon-btn" title="Bookmarks" aria-label="Bookmarks">
            <Icon name="bookmark" size={17} filled={bookmarks.length > 0} />
            {bookmarks.length > 0 && <span className="nav-count">{bookmarks.length}</span>}
          </Link>
          <Link to="/profile" className="icon-btn" title="Profile" aria-label="Profile">
            <Icon name="user" size={17} />
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <Icon name={link.icon} size={17} />
              {link.label}
            </NavLink>
          ))}
          <div className="divider" />
          {extraLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <Icon name={link.icon} size={17} />
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}