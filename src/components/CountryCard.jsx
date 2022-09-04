import { Link } from 'react-router-dom'
import { formatNumber, hyphenedParameter } from '../utils/helpers'

export const CountryCard = ({ name, flags, population, region, capital }) => {
  return (
    <Link to={`/countries/${hyphenedParameter(name)}`} className="country-card">
      <picture>
        <img src={flags.svg} alt={`flag of ${name}`} />
      </picture>
      <div>
        <h3>{name}</h3>
        <ul role="list">
          <li>
            Population: <span>{formatNumber(population)}</span>
          </li>
          <li>
            Region: <span>{region}</span>
          </li>
          <li>
            Capital: <span>{capital ? capital : 'NIL'}</span>
          </li>
        </ul>
      </div>
    </Link>
  )
}
