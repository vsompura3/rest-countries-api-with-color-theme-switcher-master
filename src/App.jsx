import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Country from './pages/Country'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const STORAGE_KEY = 'theme-preference'

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem(STORAGE_KEY) || 'light',
  )

  useEffect(() => {
    document.firstElementChild.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(STORAGE_KEY, newTheme)
  }

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div className="container grid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Home />} />
            <Route path="/countries/:countryName" element={<Country />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
