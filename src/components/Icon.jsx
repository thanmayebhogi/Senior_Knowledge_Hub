/**
 * Lightweight inline SVG icon set (no icon library dependency).
 * Usage: <Icon name="search" size={18} />
 */

const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></>,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  arrowRight: <path d="M5 12h14m-6-7 7 7-7 7" />,
  arrowLeft: <path d="M19 12H5m6 7-7-7 7-7" />,
  bookmark: <path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1Z" />,
  thumbUp:
    <path d="M7 10v10H4V10h3Zm0 9h9.2a2 2 0 0 0 1.9-1.4l1.8-6A2 2 0 0 0 18 9h-3.2l.6-3.1A2 2 0 0 0 13.5 3L7 10v9Z" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  checkCircle: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.5 2.5 4.5-5" /></>,
  star: <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9L12 3.6Z" />,
  building:
    <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2" /></>,
  briefcase:
    <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18" /></>,
  graduation:
    <><path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z" /><path d="M6.5 11.5V16c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4.5M21.5 9v6" /></>,
  book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5V4.5Z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v4H6.5A2.5 2.5 0 0 1 4 20.5Z" /></>,
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />,
  terminal: <path d="m4 17 5-5-5-5m7 10h9" />,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0M17 5.2a3.2 3.2 0 0 1 0 6.1M18.5 20H21a5.6 5.6 0 0 0-3.4-5.1" /></>,
  message: <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.7-5.3A8.5 8.5 0 1 1 21 12Z" />,
  trophy:
    <><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5A3.5 3.5 0 0 1 16.5 11M9 20h6M12 13v7" /></>,
  award:
    <><circle cx="12" cy="9" r="5" /><path d="m8.5 13.5-1 7.5L12 18l4.5 3-1-7.5" /></>,
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></>,
  clipboard:
    <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9.5 4V3.2A1.2 1.2 0 0 1 10.7 2h2.6A1.2 1.2 0 0 1 14.5 3.2V4M9.5 10h5M9.5 14h5" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  filter: <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />,
  download: <path d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
  external: <path d="M14 4h6v6M20 4l-8 8M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />,
  trash: <path d="M4 7h16M9 7V5h6v2m-8 0 1 13h8l1-13M10 11v6M14 11v6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  send: <path d="m21 3-9.5 9.5M21 3l-6.5 18-4-8-8-4L21 3Z" />,
  info: <><circle cx="12" cy="12" r="8.5" /><path d="M12 11v5.5M12 7.8v.4" /></>,
  help: <><circle cx="12" cy="12" r="8.5" /><path d="M9.8 9.4A2.4 2.4 0 1 1 12 13v1.2M12 17v.3" /></>,
  bulb: <path d="M9.5 17h5M10 20h4M12 3a5.5 5.5 0 0 0-3.4 9.8c.7.6 1.1 1.3 1.2 2.2h4.4c.1-.9.5-1.6 1.2-2.2A5.5 5.5 0 0 0 12 3Z" />,
  trending: <path d="m3 17 6-6 4 4 7-7M17 8h4v4" />,
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  shield: <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />,
  mapPin: <><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  sparkle: <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18l-1.8-5.4L4.5 10.8 10.2 9 12 3.5ZM19 3v3M20.5 4.5h-3" />,
  chart: <path d="M4 20V10m5 10V4m5 16v-7m5 7V8" />,
    layers: <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3ZM3.5 12.5 12 17l8.5-4.5M3.5 17 12 21.5 20.5 17" />,
    fileText: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  user: <><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>,
  rocket:
    <><path d="M13 3c3.5 1 6 3.5 7 7-2 5-5.5 8.5-10 10l-4-4c1.5-4.5 5-8 11-10Z" /><circle cx="14.5" cy="9.5" r="1.6" /><path d="M6 17c-1.5 1-2 3.5-2 3.5S6.5 20 8 19" /></>,
  heart: <path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 7.5 3c0 5-7.5 9.6-7.5 9.6Z" />,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></>,
  compass: <><circle cx="12" cy="12" r="8.5" /><path d="m15 9-1.8 4.2L9 15l1.8-4.2L15 9Z" /></>
}

export default function Icon({ name, size = 18, strokeWidth = 1.8, filled = false, className = '', style }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  )
}