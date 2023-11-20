/**
 * 구현
 *
 * 삽입 정렬 느낌으로 풀었다.
 * 키 큰순으로 순회하면서 이미 나보다 키 큰사람은 추가 되있으므로
 * 기억하고 있는 숫자만큼만 뒤로 가서 서면 되기에 삽입해주었다.
 */

const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ");

const ans = [];
for (let i = n - 1; i >= 0; i--) {
  ans.splice(arr[i], 0, i + 1);
}

console.log(ans.join(" "));
