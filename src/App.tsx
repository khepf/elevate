import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useAnalytics } from './hooks/useAnalytics'
import { useScrollTracking } from './hooks/useScrollTracking'
import './App.css'

function App() {
  // Initialize analytics and scroll tracking
  useAnalytics();
  useScrollTracking();

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
