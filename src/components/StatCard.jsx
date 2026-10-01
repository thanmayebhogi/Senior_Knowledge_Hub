import Icon from './Icon'

export default function StatCard({ icon = 'chart', value, label, hint, tone = 'primary' }) {
  return (
    <div className="stat-card">
      <div className="row-between">
        <span className={`badge badge-${tone}`}>
          <Icon name={icon} size={13} />
        </span>
        {hint && <span className="tiny muted">{hint}</span>}
      </div>
      <div className="value mt-1">{value}</div>
      <div className="label">{label}</div>
    </div>
  )
}