/**
 * Tiny safe wrappers around localStorage so the app never crashes
 * when storage is unavailable (private mode, disabled cookies, quota, etc).
 */

const PREFIX = 'skh'

export const storageKey = (name) => `${PREFIX}.${name}`

export function readStorage(key, fallback) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return fallback
    const raw = window.localStorage.getItem(storageKey(key))
    if (raw === null) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function writeStorage(key, value) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false
    window.localStorage.setItem(storageKey(key), JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function removeStorage(key) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false
    window.localStorage.removeItem(storageKey(key))
    return true
  } catch {
    return false
  }
}