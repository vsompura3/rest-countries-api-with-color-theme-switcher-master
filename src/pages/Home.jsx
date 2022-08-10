import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '../App'

function Home() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('fetching data')
    axios
      .get('https://restcountries.com/v2/all')
      .then(({ data }) => setCountries(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {countries.map(c => (
        <div
          key={c.name}
          style={{ border: '1px solid black', padding: 20, margin: 10 }}
        >
          <Link to={ROUTE_PATHS.Country}>{c.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Home
