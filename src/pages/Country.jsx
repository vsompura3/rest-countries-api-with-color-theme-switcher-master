import axios from 'axios'
import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/styles/Container.styled'
import CountryDetails from '../components/styles/CountryDetails.styled'
import { CountryContext } from '../context/AppContext'
import { formatNumber } from '../utils/helpers'

function Country() {
  const { countries, setCountries } = useContext(CountryContext)
  const { countryName } = useParams()

  useEffect(() => {
    if (!countries.length) {
      async function fetchCountries() {
        const { data } = await axios.get('https://restcountries.com/v2/all')
        setCountries(data)
      }
      fetchCountries()
    }
  }, [])

  return (
    <Container>
      <CountryDetails>
        <div className="back-btn">
          <Link to="/">
            <span>
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </span>
            Back
          </Link>
        </div>
        {countries.map(
          country =>
            country.name === countryName && (
              <div key={country.name} className="even-columns">
                <img
                  className="col-1"
                  src={country.flag}
                  alt={`flag of ${country.flag}`}
                />
                <div className="col-2">
                  <h2>{country.name}</h2>
                  <ul>
                    <li>
                      <p>Native Name:</p> <span>{country.nativeName}</span>
                    </li>
                    <li>
                      <p>Population:</p>{' '}
                      <span>{formatNumber(country.population)}</span>
                    </li>
                    <li>
                      <p>Region:</p> <span>{country.region}</span>
                    </li>
                    <li>
                      <p>Sub Region:</p> <span>{country.subregion}</span>
                    </li>
                    <li>
                      <p>Capital:</p> <span>{country.capital}</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>Top Level Domain:</p>{' '}
                      {country.topLevelDomain.map(domain => (
                        <span key={domain}>{domain}</span>
                      ))}
                    </li>
                    <li>
                      <p>Currencies:</p>{' '}
                      {country.currencies.map(currency => (
                        <span key={currency.name}>{currency.name}</span>
                      ))}
                    </li>
                    <li>
                      <p>Languages:</p>{' '}
                      {country.languages.map((lang, i) => (
                        <span key={lang.name}>
                          {lang.name}
                          {i !== country.languages.length - 1 && ','}
                        </span>
                      ))}
                    </li>
                  </ul>
                  <div>
                    <h3>Border Countries:</h3>
                    <ul className="borders-list">
                      {country.borders ? (
                        country.borders.map(c1 =>
                          countries.map(
                            c2 =>
                              c1 === c2.alpha3Code && (
                                <li key={c2.name}>
                                  <Link to={`/country/${c2.name}`}>
                                    {c2.name}
                                  </Link>
                                </li>
                              ),
                          ),
                        )
                      ) : (
                        <li>No Border Countries</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ),
        )}
      </CountryDetails>
    </Container>
  )
}

export default Country
