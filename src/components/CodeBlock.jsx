import { useState } from 'react'
import Icon from './Icon'

/** Code block with a copy-to-clipboard button. */
export default function CodeBlock({ code, language = 'python' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-wrap">
      <button type="button" className="copy-btn" onClick={handleCopy}>
        <Icon name={copied ? 'check' : 'fileText'} size={13} />
        {copied ? 'Copied' : `Copy ${language}`}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}