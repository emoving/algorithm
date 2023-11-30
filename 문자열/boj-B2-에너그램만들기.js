/**
 * 두 단어사이에 공통되는 부분을 제외한 단어의 개수 구하기
 *
 * 문자열 배열을 사용해서 계산하는 방법
 * 문자열을 탐색하며 겹치는 부분은 제거하기(문자열 길이가 길어지면 시간 불리)
 */

const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .split(process.platform == "linux" ? "\n" : "\r\n");

const arr = Array(26).fill(0);
let ans = 0;

for (const s of input[0]) {
  arr[s.charCodeAt() - 97]++;
}

for (const s of input[1]) {
  arr[s.charCodeAt() - 97]--;
}

arr.forEach((e) => {
  ans += Math.abs(e);
});

console.log(ans);
