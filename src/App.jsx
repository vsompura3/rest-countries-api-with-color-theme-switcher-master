import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Country from './pages/Country'
import NotFound from './pages/NotFound'
import { CountryContext, ThemeContext } from './context/AppContext'
import { Global } from '@emotion/react'
import GlobalStyles from './components/styles/GlobalStyles.styled'

const url = 'https://restcountries.com/v2/all'

function App() {
  const [theme, setTheme] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios.get(url)
      setCountries(data)
      localStorage.setItem('countries', JSON.stringify(data))
    }

    const localStorageRef = JSON.parse(localStorage.getItem('countries'))
    if (localStorageRef) {
      setCountries(localStorageRef)
    } else {
      fetchCountries()
    }
  }, [])

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Global styles={GlobalStyles} />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryName" element={<Country />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </CountryContext.Provider>
  )
}

export default App
