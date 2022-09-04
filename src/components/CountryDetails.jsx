import { Link } from 'react-router-dom'
import { formatNumber, hyphenedParameter } from '../utils/helpers'

export const CountryDetails = ({
  name,
  flags,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) => {
  return (
    <>
      <picture>
        <img src={flags.svg} alt={`flag of ${name}`} />
      </picture>
      <div>
        <h2>{name}</h2>
        <ul>
          <li>
            Native Name: <span>{nativeName}</span>
          </li>
          <li>
            Population: <span>{formatNumber(population)}</span>
          </li>
          <li>
            Region: <span>{region}</span>
          </li>
          <li>
            Sub Region: <span>{subregion}</span>
          </li>
          <li>
            Capital: <span>{capital ? capital : 'NIL'}</span>
          </li>
        </ul>
        <ul>
          <li>
            Top Level Domain:
            <ul>
              {topLevelDomain.map(domain => (
                <li key={domain}>
                  <span>{domain}</span>
                </li>
              ))}
            </ul>
          </li>
          <li>
            Currencies:
            <ul>
              {currencies.map(currency => (
                <li key={currency.name}>
                  <span>{currency.name}</span>
                </li>
              ))}
            </ul>
          </li>
          <li>
            Languages:
            <ul className="languages-list">
              {languages.map((language, index, array) => (
                <li key={language.name} style={{ gap: 0 }}>
                  <span>{language.name}</span>
                  {index !== array.length - 1 ? ',' : null}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div>
          <p>Border Countries: </p>
          <ul className="border-countries">
            {borderCountries ? (
              borderCountries.map(({ name, alpha3Code }) => (
                <li key={alpha3Code}>
                  <span>
                    <Link
                      to={`/countries/${hyphenedParameter(name)}`}
                      className="border-country"
                    >
                      {name}
                    </Link>
                  </span>
                </li>
              ))
            ) : (
              <span>NA</span>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
