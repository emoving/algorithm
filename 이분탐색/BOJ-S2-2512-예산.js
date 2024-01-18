const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .split(process.platform == "linux" ? "\n" : "\r\n");

const [n, arr, m] = [+input[0], input[1].split(" ").map(Number), +input[2]];

arr.sort((a, b) => a - b);

let s = 1;
let e = arr[n - 1];

while (s <= e) {
  const mid = ~~((s + e) / 2);
  let sum = 0;

  for (const cur of arr) {
    if (cur <= mid) sum += cur;
    else sum += mid;
  }

  if (sum <= m) s = mid + 1; // 가능
  else e = mid - 1; // 불가능
}

console.log(e);
