import { useContext, useState } from 'react'
import CountryCard from '../components/CountryCard'
import Container from '../components/styles/Container.styled'
import CountriesGrid from '../components/styles/CountriesGrid.styled'
import FormStyled from '../components/styles/FormStyled.styled'
import { CountryContext } from '../context/AppContext'

function Home() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')
  const { countries } = useContext(CountryContext)

  return (
    <main>
      <Container>
        <FormStyled>
          <div>
            <label className="sr-only" htmlFor="country-search">
              Search for a country
            </label>
            <input
              type="search"
              id="country-search"
              placeholder="Search for a country..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <div>
            <select
              name="region-options"
              id="regions-list"
              value={region}
              onChange={e => setRegion(e.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </FormStyled>
        <CountriesGrid>
          {countries
            .filter(country =>
              country.region.toLowerCase().includes(region.toLowerCase()),
            )
            .filter(country =>
              country.name.toLowerCase().includes(query.toLowerCase()),
            )
            .map(country => (
              <CountryCard key={country.name} country={country} />
            ))}
        </CountriesGrid>
      </Container>
    </main>
  )
}

export default Home
