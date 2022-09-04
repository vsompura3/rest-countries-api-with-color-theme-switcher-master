import { useEffect, useState } from 'react'
import { getCountries } from '../api/getCountries'
import CountriesGrid from '../components/CountriesGrid'
import Navbar from '../components/Navbar'

function Home() {
  const [countries, setCountries] = useState(
    JSON.parse(localStorage.getItem('countries')) || [],
  )
  const [searchedCountry, setSearchedCountry] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data)
      localStorage.setItem('countries', JSON.stringify(data))
    })
  }, [])

  return (
    <>
      <Navbar
        searchedCountry={searchedCountry}
        setSearchedCountry={setSearchedCountry}
        region={region}
        setRegion={setRegion}
      />
      <section
        className="countries-wrapper"
        aria-labelledby="secondary-heading"
      >
        <h2 className="sr-only" id="secondary-heading">
          List of Countries
        </h2>
        <CountriesGrid
          countries={countries}
          searchedCountry={searchedCountry}
          region={region}
        />
      </section>
    </>
  )
}

export default Home
