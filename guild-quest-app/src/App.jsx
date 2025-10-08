import { HashRouter, Routes, Route } from 'react-router-dom'
import { usePlatform } from './hooks/usePlatform'
import HamburgerMenu from './components/common/HamburgerMenu'
import BackButton from './components/common/BackButton'
import Footer from './components/common/Footer'
import HeroSection from './components/home/HeroSection'
import FeaturesSection from './components/home/FeaturesSection'
import QuestsPage from './pages/QuestsPage'  // ← これを追加

function HomePage() {
  const { isApp } = usePlatform();

  return (
    <div className={isApp ? 'pb-20' : ''}>
      <HeroSection />
      <FeaturesSection />
      {!isApp && <Footer />}
    </div>
  )
}

// ← この古いQuestsPage関数を削除
// function QuestsPage() {
//   ...
// }

function MapPage() {
  const { isApp } = usePlatform();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white flex items-center justify-center ${isApp ? 'pb-20' : ''}`}>
      {!isApp && <BackButton />}
      <h1 className="text-4xl font-bold">MAP PAGE</h1>
    </div>
  )
}

function StatsPage() {
  const { isApp } = usePlatform();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white flex items-center justify-center ${isApp ? 'pb-20' : ''}`}>
      {!isApp && <BackButton />}
      <h1 className="text-4xl font-bold">STATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="w-full">
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quests" element={<QuestsPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App