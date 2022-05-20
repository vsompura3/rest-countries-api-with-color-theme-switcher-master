import { Link } from 'react-router-dom'
import { formatNumber } from '../utils/helpers'

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`flag of ${country.name}`} />
      <div className="country-card--info">
        <h2>
          <Link to={`/country/${country.name}`}>{country.name}</Link>
        </h2>
        <ul>
          <li>
            <span>Population:</span> {formatNumber(country.population)}
          </li>
          <li>
            <span>Region:</span> {country.region}
          </li>
          <li>
            <span>Capital:</span> {country.capital}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CountryCard
