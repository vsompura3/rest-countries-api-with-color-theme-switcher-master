import { useParams } from 'react-router-dom'

function Country() {
  const { country } = useParams()
  console.log(country)
  return <div>Country</div>
}

export default Country
