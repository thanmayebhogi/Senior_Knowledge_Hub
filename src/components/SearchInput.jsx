import Icon from './Icon'

/** Search field with a clear button. */
export default function SearchInput({ value, onChange, placeholder = 'Search…', className = '' }) {
  return (
    <div className={`search ${className}`}>
      <Icon name="search" size={17} className="search-icon" />
      <input
        type="search"
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-label={placeholder}
      />
      {value && (
        <button type="button" className="search-clear" onClick={() => onChange('')} aria-label="Clear search">
          <Icon name="x" size={13} />
        </button>
      )}
    </div>
  )
}