import axios from 'axios'

const API_URL = `https://restcountries.com/v2/alpha/` || process.env.API_URL

export const getBorderCountries = async query => {
  const { data } = await axios.get(`${API_URL}/${query}`)
  return data
}
