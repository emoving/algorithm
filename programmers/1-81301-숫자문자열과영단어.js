/**
 *
 * 구현
 */
function solution(s) {
  const word = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let ans = "";
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      ans += s[i];
      temp = "";
      continue;
    }

    temp += s[i];

    if (word.hasOwnProperty(temp)) {
      ans += word[temp];
      temp = "";
    }
  }

  return +ans;
}
