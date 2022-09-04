import axios from 'axios'
import { nonHyphenedParameter } from '../utils/helpers'
import { getBorderCountries } from './getBorderCountries'

const API_URL = `https://restcountries.com/v2/` || process.env.API_URL

export const getCountry = async query => {
  const { data } = await axios.get(
    `${API_URL}/name/${nonHyphenedParameter(query)}?fullText=true`,
  )

  return data
}
