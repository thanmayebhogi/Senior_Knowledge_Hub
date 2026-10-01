import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import Home from './pages/Home'
import Companies from './pages/Companies'
import CompanyDetail from './pages/CompanyDetail'
import CompanyPreparation from './pages/CompanyPreparation'
import SeniorExperiences from './pages/SeniorExperiences'
import InterviewQuestions from './pages/InterviewQuestions'
import Resources from './pages/Resources'
import CodingProblems from './pages/CodingProblems'
import QA from './pages/QA'
import SuccessStories from './pages/SuccessStories'
import Profile from './pages/Profile'
import Bookmarks from './pages/Bookmarks'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:companyId" element={<CompanyDetail />} />
          <Route path="/company-preparation" element={<CompanyPreparation />} />
          <Route path="/senior-experiences" element={<SeniorExperiences />} />
          <Route path="/interview-questions" element={<InterviewQuestions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/coding-problems" element={<CodingProblems />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toast />
    </>
  )
}