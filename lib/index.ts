/**
 * Divide number by thousands with spaces and change dot to comma to divide decimals.
 *
 * @example
 * // returns "100 000,12"
 * getNumWithSpaces('100000,12', ' ', ',')
 *
 * @param {number|string} num
 * @param {string} thousandsSep — Thousands separator symbol
 * @param {string} decimalsSep - Decimals separator symbol
 * @returns {string} Return formatted string with number
 */
export default function getNumWithSpaces (num: number | string, thousandsSep: string = ' ', decimalsSep: string = ','): string {
  const parts = num.toString().split(/[,.]/)

  // Add spaces between every 3 digit
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep)

  return parts.join(decimalsSep)
}