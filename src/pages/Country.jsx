import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBorderCountries } from '../api/getBorderCountries'
import { getCountry } from '../api/getCountry'
import { CountryDetails } from '../components/CountryDetails'

const BackIcon = () => {
  return (
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
  )
}

function Country() {
  const { countryName } = useParams()
  const [fetchedCountry, setFetchedCountry] = useState([])
  const [borderCountries, setBorderCountries] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await getCountry(countryName)
      setFetchedCountry(data)
      setBorderCountries([])
      data.map(({ borders }) => {
        borders.map(async border => {
          const data = await getBorderCountries(border)
          setBorderCountries(prev => [...prev, data])
        })
      })
    })()
  }, [countryName])

  console.log(fetchedCountry)

  return (
    <>
      <div className="back">
        <Link to="/">
          <BackIcon />
          Back
        </Link>
      </div>
      <section className="country-details">
        {fetchedCountry.map(country => (
          <CountryDetails
            {...country}
            key={country.alpha3Code}
            borderCountries={borderCountries}
          />
        ))}
      </section>
    </>
  )
}

export default Country
