/**
 * Divide number by thousands with spaces and change dot to comma to divide decimals.
 *
 * @example
 * // returns "100 000,12"
 * getNumWithSpaces('100000,12', ' ')
 *
 * @param {number|string} num
 * @param {string} separator — Thousands separator symbol
 * @returns {string} Return formatted string with number
 */
export default function getNumWithSpaces(num: number | string, separator?: string): string;
