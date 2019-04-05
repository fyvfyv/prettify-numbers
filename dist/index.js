"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function getNumWithSpaces(num, separator) {
    if (separator === void 0) { separator = ' '; }
    var parts = num.toString().split(/[,.]/);
    // Add spaces between every 3 digit
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(',');
}
exports.default = getNumWithSpaces;
