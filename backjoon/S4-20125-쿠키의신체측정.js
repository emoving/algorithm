/**
 * 구현
 *
 * 2차원 평면에서 범위 내 조건 만족하는 길이 구하는 문제
 */
const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = Array.from(Array(n + 1), () => Array(n + 1));
let heart;
let flag = false;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    arr[i][j] = input[i][j - 1];

    if (!flag && arr[i][j] === "*") {
      heart = [i + 1, j];
      flag = true;
    }
  }
}

const ans = new Array(5).fill(0);

// 왼쪽 팔
for (let i = heart[1] - 1; i > 0; i--) {
  if (arr[heart[0]][i] !== "*") break;

  ans[0]++;
}

// 오른쪽 팔
for (let i = heart[1] + 1; i <= n; i++) {
  if (arr[heart[0]][i] !== "*") break;

  ans[1]++;
}

// 허리
for (let i = heart[0] + 1; i <= n; i++) {
  if (arr[i][heart[1]] !== "*") break;

  ans[2]++;
}

// 다리
for (let i = heart[0] + ans[2] + 1; i <= n; i++) {
  if (arr[i][heart[1] - 1] === "*") ans[3]++;
  if (arr[i][heart[1] + 1] === "*") ans[4]++;
}

console.log(heart.join(" "));
console.log(ans.join(" "));
