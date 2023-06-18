/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));

  // check each row for word
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // transpose the rows to columns
  let verticalJoin = '';
  for (let col = 0; col < letters[0].length; col++) {
    for (let row = 0; row < letters.length; row++) {
      verticalJoin += letters[row][col];
    }
  }
  // check each new row for word
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
