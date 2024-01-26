const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .split(process.platform == "linux" ? "\n" : "\r\n");

const n = +input[0];
const k = +input[1];
let start = 1;
let end = n * n;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    cnt += Math.min(n, Math.floor(mid / i));
  }

  if (cnt < k) start = mid + 1;
  else end = mid - 1;
}

console.log(start);
