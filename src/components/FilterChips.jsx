/** Filter chip group — single-select option used across listing pages. */
export default function FilterChips({ options, value, onChange, ariaLabel = 'Filter options' }) {
  return (
    <div className="chips" role="group" aria-label={ariaLabel}>
      {options.map((option) => {
        const label = typeof option === 'string' ? option : option.label
        const key = typeof option === 'string' ? option : option.value
        return (
          <button
            key={key}
            type="button"
            className={`chip${value === key ? ' active' : ''}`}
            onClick={() => onChange(key)}
            aria-pressed={value === key}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}