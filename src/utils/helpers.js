export function formatNumber(num) {
  return new Intl.NumberFormat(navigator.language).format(num)
}
