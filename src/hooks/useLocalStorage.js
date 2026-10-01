import { useCallback, useEffect, useState } from 'react'
import { readStorage, writeStorage } from '../utils/storage'

/**
 * useLocalStorage(key, initialValue)
 * React state that is transparently persisted to localStorage.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readStorage(key, initialValue))

  useEffect(() => {
    writeStorage(key, value)
  }, [key, value])

  const reset = useCallback(() => setValue(initialValue), [initialValue])

  return [value, setValue, reset]
}