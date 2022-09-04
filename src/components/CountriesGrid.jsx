import { CountryCard } from './CountryCard'

function CountriesGrid({ countries, searchedCountry, region }) {
  return (
    <ul className="countries-list">
      {countries
        .filter(country =>
          country.name.toLowerCase().includes(searchedCountry.toLowerCase()),
        )
        .filter(country =>
          country.region.toLowerCase().includes(region.toLowerCase()),
        )
        .map(country => (
          <li key={country.alpha3Code}>
            <CountryCard {...country} />
          </li>
        ))}
    </ul>
  )
}

export default CountriesGrid
