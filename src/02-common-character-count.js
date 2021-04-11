/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s11 = s1.split('');
  const s22 = s2.split('');
  let res = 0;
  for (let i = 0; i < s11.length; i++) {
    const elem = s22.indexOf(s11[i]);
    if (elem !== -1) {
      s22.splice(elem, 1);
      res += 1;
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
