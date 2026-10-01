/** Visual tone helpers shared by cards (badge colours, avatar gradients). */

export const difficultyTone = (difficulty) =>
  ({ Easy: 'success', Medium: 'warning', Hard: 'danger' }[difficulty] || 'primary')

export const outcomeTone = (outcome) =>
  ({
    Selected: 'success',
    'Not selected': 'danger',
    Rejected: 'danger',
    'In process': 'info',
    'Offer accepted': 'success'
  }[outcome] || 'primary')

const avatarPalette = [
  'linear-gradient(135deg,#2563eb,#7c3aed)',
  'linear-gradient(135deg,#0d9488,#2563eb)',
  'linear-gradient(135deg,#ea580c,#db2777)',
  'linear-gradient(135deg,#16a34a,#0d9488)',
  'linear-gradient(135deg,#7c3aed,#db2777)',
  'linear-gradient(135deg,#0284c7,#0ea5e9)',
  'linear-gradient(135deg,#f59e0b,#ea580c)',
  'linear-gradient(135deg,#4f46e5,#06b6d4)'
]

/** Deterministic gradient for an avatar, so the same name always looks the same. */
export const avatarGradient = (seed = '') => {
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 997
  }
  return avatarPalette[hash % avatarPalette.length]
}

export const avatarStyle = (seed) => ({ background: avatarGradient(seed) })