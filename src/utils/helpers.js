// converts 'User Details' to 'user-details'
export const hyphenedParameter = parameter =>
  parameter.replaceAll(' ', '-').toLowerCase()

// converts 'user-details' to 'user details'
export const nonHyphenedParameter = parameter =>
  parameter.replaceAll('-', ' ').toLowerCase()

// converts numbers from 40218234 to 40,218,234
export const formatNumber = number =>
  new Intl.NumberFormat(navigator.language).format(number)

// converts numbers from 40218234 to 40.2M
export const formatNumberShort = number => {
  const numberString = number.toString()
  if (numberString.length > 6) {
    return `${numberString.slice(0, -6)}.${numberString.slice(-6, -5)}M`
  } else if (numberString.length > 3) {
    return `${numberString.slice(0, -3)}.${numberString.slice(-3, -2)}K`
  }
  return numberString
}

// convert 2021-01-01 to Jan 2021
export const formatDate = date => {
  const dateObject = new Date(date)
  return `${dateObject.toLocaleString('default', {
    month: 'short',
  })} ${dateObject.getFullYear()}`
}

// convert 2021-01-01 to Jan 1, 2021
export const formatDateLong = date => {
  const dateObject = new Date(date)
  return `${dateObject.toLocaleString('default', {
    month: 'short',
  })} ${dateObject.getDate()}, ${dateObject.getFullYear()}`
}

// convert 2021-01-01 to 01/01/2021
export const formatDateNumeric = date => {
  const dateObject = new Date(date)
  return `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`
}

// convert 2021-01-01 to 01/01
export const formatDateNumericShort = date => {
  const dateObject = new Date(date)
  return `${dateObject.getMonth() + 1}/${dateObject.getDate()}`
}

// convert 2021-01-01 to 01/01/2021 12:00 AM
export const formatDateTime = date => {
  const dateObject = new Date(date)
  return `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()} ${dateObject.getHours()}:${dateObject.getMinutes()} ${dateObject.getHours() > 12 ? 'PM' : 'AM'}`
}