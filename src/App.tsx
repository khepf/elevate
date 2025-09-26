import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import InstallsPage from './pages/InstallsPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PurchasePage from './pages/PurchasePage'
import { useAnalytics } from './hooks/useAnalytics'
import { useScrollTracking } from './hooks/useScrollTracking'
import './App.css'

function App() {
  useAnalytics();
  useScrollTracking();

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/installs" element={<InstallsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
