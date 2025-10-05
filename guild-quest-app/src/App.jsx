import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HamburgerMenu from './components/common/HamburgerMenu'
import BackButton from './components/common/BackButton'
import HeroSection from './components/home/HeroSection'
import FeaturesSection from './components/home/FeaturesSection'
import Footer from './components/common/Footer'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  )
}

function QuestsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <BackButton />
      <h1 className="text-4xl font-bold">QUESTS PAGE</h1>
    </div>
  )
}

function MapPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <BackButton />
      <h1 className="text-4xl font-bold">MAP PAGE</h1>
    </div>
  )
}

function StatsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <BackButton />
      <h1 className="text-4xl font-bold">STATS PAGE</h1>
    </div>
  )
}

function App() {
  // GitHub Pagesのベースパスを自動検出
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={basename}>
      <div className="w-full">
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quests" element={<QuestsPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App