const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .split(process.platform == "linux" ? "\n" : "\r\n");

const [n, c] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let min = 1;
let max = arr[n - 1];

while (min <= max) {
  const dist = Math.floor((min + max) / 2); // 공유기 사이의 간격
  let cnt = 1;
  let prev = arr[0];

  // 집들을 순회하면서 집간의 거리가 공유기 사이 간격 이상인지 확인
  for (const cur of arr) {
    if (cur - prev < dist) continue;

    prev = cur;
    cnt += 1;
  }

  // 공유기 설치가 가능하다면 간격을 더 늘려본다
  if (cnt >= c) min = dist + 1;
  // 공유기 설치가 불가능하다면 간격을 더 줄인다
  else max = dist - 1;
}

// 마지막에 가능한 경우 +1을 늘린 경우로 끝냈으니 -1한 값을 제출
console.log(min - 1);
