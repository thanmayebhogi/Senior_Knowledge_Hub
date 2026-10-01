import { useMemo } from 'react'
import PageHeader from '../components/PageHeader'
import ResourceCard from '../components/ResourceCard'
import SearchInput from '../components/SearchInput'
import FilterChips from '../components/FilterChips'
import EmptyState from '../components/EmptyState'
import StatCard from '../components/StatCard'
import Icon from '../components/Icon'
import {
  resources,
  featuredResources,
  resourceTypes,
  resourceCategories,
  resourceLevels
} from '../data/resources'
import { companies } from '../data/companies'
import { useListFilter } from '../hooks/useListFilter'
import { compactNumber } from '../utils/format'

export default function Resources() {
  const typeOptions = useMemo(() => ['All', ...resourceTypes], [])
  const categoryOptions = useMemo(() => ['All', ...resourceCategories], [])
  const levelOptions = useMemo(() => ['All', ...resourceLevels], [])

  const { query, setQuery, active, setFacet, filtered } = useListFilter(resources, {
    searchFields: (resource) => [resource.title, resource.description, resource.category, resource.author],
    facets: {
      type: (resource, value) => resource.type === value,
      category: (resource, value) => resource.category === value,
      level: (resource, value) => resource.level === value,
      company: (resource, value) => {
        const company = companies.find((item) => item.name === value)
        return resource.companyId === company?.id
      }
    }
  })

  const companyOptions = useMemo(
    () => ['All', ...companies.filter((company) => company.resources.length > 0).map((c) => c.name)],
    []
  )

  const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloads, 0)

  return (
    <>
      <PageHeader
        eyebrow="Resource library"
        title="Resources"
        description="Cheat sheets, video series, practice sets and templates that directly support the preparation plan — filtered by company, type and level."
      >
        <div className="grid grid-4 mt-3">
          <StatCard icon="book" value={resources.length} label="Resources" />
          <StatCard icon="sparkle" value={featuredResources.length} label="Editor's picks" tone="accent" />
          <StatCard icon="download" value={compactNumber(totalDownloads)} label="Downloads" tone="success" />
          <StatCard icon="layers" value={resourceTypes.length} label="Resource types" tone="info" />
        </div>
      </PageHeader>

      <div className="container page">
        <div className="toolbar">
          <SearchInput value={query} onChange={setQuery} placeholder="Search cheat sheets, videos, templates…" />
        </div>

        <div className="stack" style={{ gap: 12, marginBottom: 22 }}>
          <FilterChips
            options={typeOptions}
            value={active.type || 'All'}
            onChange={(value) => setFacet('type', value === 'All' ? '' : value)}
            ariaLabel="Filter by type"
          />
          <div className="grid grid-2" style={{ gap: 12 }}>
            <FilterChips
              options={levelOptions}
              value={active.level || 'All'}
              onChange={(value) => setFacet('level', value === 'All' ? '' : value)}
              ariaLabel="Filter by level"
            />
            <FilterChips
              options={companyOptions}
              value={active.company || 'All'}
              onChange={(value) => setFacet('company', value === 'All' ? '' : value)}
              ariaLabel="Filter by company"
            />
          </div>
          <FilterChips
            options={categoryOptions}
            value={active.category || 'All'}
            onChange={(value) => setFacet('category', value === 'All' ? '' : value)}
            ariaLabel="Filter by category"
          />
        </div>

        <p className="result-count">
          Showing <strong>{filtered.length}</strong> of {resources.length} resources
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon="book"
            title="No resources found"
            description="Try removing a filter or searching for a broader topic like SQL or aptitude."
          />
        ) : (
          <div className="grid grid-3">
            {filtered.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}

        <section className="panel mt-4">
          <div className="row-between wrap">
            <div className="row" style={{ gap: 14 }}>
              <span className="section-title-icon">
                <Icon name="download" size={18} />
              </span>
              <div>
                <h3>Everything here is sample content</h3>
                <p className="small muted">
                  Resource cards mirror the structure of a real library so you can plug in your own
                  links later.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setQuery('')
                setFacet('type', '')
                setFacet('level', '')
                setFacet('company', '')
                setFacet('category', '')
              }}
            >
              Reset all filters
            </button>
          </div>
        </section>
      </div>
    </>
  )
}