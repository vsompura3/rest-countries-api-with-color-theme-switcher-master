// converts 'User Details' to 'user-details'
export const hyphenedParameter = parameter =>
  parameter.replaceAll(' ', '-').toLowerCase()

// converts 'user-details' to 'user details'
export const nonHyphenedParameter = parameter =>
  parameter.replaceAll('-', ' ').toLowerCase()

// converts numbers from 40218234 to 40,218,234
export const formatNumber = number =>
  new Intl.NumberFormat(navigator.language).format(number)
