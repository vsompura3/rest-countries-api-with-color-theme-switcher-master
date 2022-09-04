import axios from 'axios'

const API_URL = `https://restcountries.com/v2/all` || process.env.API_URL

export const getCountries = async () => {
  const { data } = await axios.get(API_URL)
  return data
}
