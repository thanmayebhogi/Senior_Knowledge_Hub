import { useEffect } from 'react'
import { useApp } from '../context/AppContext'
import Icon from './Icon'

/** Lightweight toast rendered once at the app root. */
export default function Toast() {
  const { toast, dismissToast } = useApp()

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(dismissToast, 2600)
    return () => window.clearTimeout(timer)
  }, [toast, dismissToast])

  if (!toast) return null

  return (
    <div className="toast-wrap">
      <div className={`toast ${toast.tone || 'success'}`} role="status" aria-live="polite">
        <Icon name={toast.tone === 'info' ? 'info' : 'checkCircle'} size={17} />
        <span className="grow">{toast.message}</span>
        <button type="button" onClick={dismissToast} aria-label="Dismiss notification">
          <Icon name="x" size={15} />
        </button>
      </div>
    </div>
  )
}