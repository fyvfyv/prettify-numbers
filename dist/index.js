"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function getNumWithSpaces(num, thousandsSep, decimalsSep) {
    if (thousandsSep === void 0) { thousandsSep = ' '; }
    if (decimalsSep === void 0) { decimalsSep = ','; }
    var parts = num.toString().split(/[,.]/);
    // Add spaces between every 3 digit
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
    return parts.join(decimalsSep);
}
exports.default = getNumWithSpaces;
