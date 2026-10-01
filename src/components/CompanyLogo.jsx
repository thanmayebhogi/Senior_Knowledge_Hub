import { companyById } from '../data/companies'

/** Company monogram tile used in cards and the company hero. */
export default function CompanyLogo({ companyId, size, className = '' }) {
  const company = companyById(companyId)

  if (!company) return null

  return (
    <span
      className={`logo-tile ${className}`}
      style={{ background: company.color, width: size, height: size, fontSize: size ? size * 0.29 : undefined }}
      title={company.fullName}
    >
      {company.logo}
    </span>
  )
}