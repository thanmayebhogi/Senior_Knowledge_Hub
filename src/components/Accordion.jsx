import { useId, useState } from 'react'
import Icon from './Icon'

/** Accessible accordion panel used for company detail sections. */
export default function Accordion({ title, icon = 'info', badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <div className={`accordion${open ? ' open' : ''}`}>
      <button
        type="button"
        className="accordion-head"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="section-title-icon" style={{ width: 30, height: 30 }}>
          <Icon name={icon} size={16} />
        </span>
        <span className="grow">{title}</span>
        {badge && <span className="badge badge-primary">{badge}</span>}
        <Icon name="chevronDown" size={17} className="accordion-icon" />
      </button>
      {open && (
        <div className="accordion-body" id={id}>
          {children}
        </div>
      )}
    </div>
  )
}