import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { seedQuestions } from '../data/qa'

const AppContext = createContext(null)

export const defaultProfile = {
  name: '',
  email: '',
  college: '',
  branch: '',
  cgpa: '',
  batch: '2026',
  skills: [],
  targetCompanies: [],
  bio: '',
  prepStartDate: '',
  goalPackage: ''
}

export const emptyUserData = { questions: [], answers: [] }

export function AppProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', [])
  const [likes, setLikes] = useLocalStorage('likes', [])
  const [profile, setProfile] = useLocalStorage('profile', defaultProfile)
  const [userData, setUserData] = useLocalStorage('qa', emptyUserData)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message, tone = 'success') => {
    setToast({ message, tone, id: `${Date.now()}-${Math.random().toString(16).slice(2)}` })
  }, [])

  const dismissToast = useCallback(() => setToast(null), [])

  /* ---------------- bookmarks ---------------- */

  const isBookmarked = useCallback(
    (type, id) => bookmarks.some((item) => item.key === `${type}:${id}`),
    [bookmarks]
  )

  const toggleBookmark = useCallback(
    (item) => {
      const key = `${item.type}:${item.id}`
      setBookmarks((current) => {
        const exists = current.some((entry) => entry.key === key)
        if (exists) {
          showToast(`Removed from bookmarks`, 'info')
          return current.filter((entry) => entry.key !== key)
        }
        showToast(`Saved to bookmarks`, 'success')
        return [{ ...item, key, savedAt: new Date().toISOString() }, ...current]
      })
    },
    [setBookmarks, showToast]
  )

  const removeBookmark = useCallback(
    (key) => {
      setBookmarks((current) => current.filter((entry) => entry.key !== key))
      showToast('Bookmark removed', 'info')
    },
    [setBookmarks, showToast]
  )

  const clearBookmarks = useCallback(() => {
    setBookmarks([])
    showToast('All bookmarks cleared', 'info')
  }, [setBookmarks, showToast])

  const bookmarksByType = useCallback(
    (type) => bookmarks.filter((entry) => entry.type === type),
    [bookmarks]
  )

  /* ---------------- likes / helpful ---------------- */

  const isLiked = useCallback((key) => likes.includes(key), [likes])

  const toggleLike = useCallback(
    (key, label = 'item') => {
      setLikes((current) => {
        const exists = current.includes(key)
        showToast(exists ? 'Like removed' : `Marked ${label} as helpful`, exists ? 'info' : 'success')
        return exists ? current.filter((entry) => entry !== key) : [...current, key]
      })
    },
    [setLikes, showToast]
  )

  /* ---------------- profile ---------------- */

  const updateProfile = useCallback(
    (patch) => {
      setProfile((current) => ({ ...current, ...patch }))
      showToast('Profile saved locally on this device', 'success')
    },
    [setProfile, showToast]
  )

  const resetProfile = useCallback(() => {
    setProfile(defaultProfile)
    showToast('Profile reset', 'info')
  }, [setProfile, showToast])

  /* ---------------- Q&A (localStorage backed) ---------------- */

  const questions = useMemo(
    () => [...userData.questions, ...seedQuestions],
    [userData.questions]
  )

  const addQuestion = useCallback(
    ({ title, body, tags }) => {
      const question = {
        id: `local-${Date.now()}`,
        title: title.trim(),
        body: body.trim(),
        tags: tags.length ? tags : ['General'],
        author: profile.name?.trim() || 'You',
        votes: 0,
        views: 1,
        createdAt: new Date().toISOString(),
        solved: false,
        isMine: true,
        answers: []
      }
      setUserData((current) => ({
        ...current,
        questions: [question, ...current.questions]
      }))
      showToast('Question published', 'success')
      return question
    },
    [setUserData, showToast, profile.name]
  )

  const addAnswer = useCallback(
    (questionId, body) => {
      const answer = {
        id: `local-a-${Date.now()}`,
        author: profile.name?.trim() || 'You',
        body: body.trim(),
        createdAt: new Date().toISOString(),
        votes: 0,
        isMine: true
      }

      setUserData((current) => {
        const ownQuestions = current.questions.map((question) =>
          question.id === questionId
            ? { ...question, answers: [...question.answers, answer], solved: true }
            : question
        )

        const answersMap = { ...(current.answers || {}) }
        const existing = answersMap[questionId] || []
        answersMap[questionId] = [...existing, answer]

        return {
          ...current,
          questions: ownQuestions,
          answers: answersMap
        }
      })
      showToast('Answer posted', 'success')
    },
    [setUserData, showToast, profile.name]
  )

  const answersFor = useCallback(
    (questionId) => {
      const own = userData.answers?.[questionId] || []
      const seed = seedQuestions.find((question) => question.id === questionId)?.answers || []
      return [...own, ...seed]
    },
    [userData.answers]
  )

  const deleteQuestion = useCallback(
    (questionId) => {
      setUserData((current) => {
        const answers = { ...(current.answers || {}) }
        delete answers[questionId]
        return { ...current, questions: current.questions.filter((q) => q.id !== questionId), answers }
      })
      showToast('Question deleted', 'info')
    },
    [setUserData, showToast]
  )

  const resetCommunity = useCallback(() => {
    setUserData(emptyUserData)
    showToast('Your questions and answers were cleared', 'info')
  }, [setUserData, showToast])

  const value = useMemo(
    () => ({
      bookmarks,
      isBookmarked,
      toggleBookmark,
      removeBookmark,
      clearBookmarks,
      bookmarksByType,
      likes,
      isLiked,
      toggleLike,
      profile,
      updateProfile,
      resetProfile,
      questions,
      addQuestion,
      addAnswer,
      answersFor,
      deleteQuestion,
      resetCommunity,
      toast,
      showToast,
      dismissToast
    }),
    [
      bookmarks,
      isBookmarked,
      toggleBookmark,
      removeBookmark,
      clearBookmarks,
      bookmarksByType,
      likes,
      isLiked,
      toggleLike,
      profile,
      updateProfile,
      resetProfile,
      questions,
      addQuestion,
      addAnswer,
      answersFor,
      deleteQuestion,
      resetCommunity,
      toast,
      showToast,
      dismissToast
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used inside <AppProvider>')
  }
  return context
}