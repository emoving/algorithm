const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split("");

let cnt = 0;
P: for (let i = 0; i < n; i++) {
  if (arr[i] === "P") {
    // 왼쪽 먼저 탐색
    for (let j = k; j >= 1; j--) {
      if (i < j) continue;

      if (arr[i - j] === "H") {
        cnt++;
        arr[i - j] = "";
        continue P;
      }
    }

    // 오른쪽 탐색
    for (let j = 1; j <= k; j++) {
      if (i + j >= n) continue;

      if (arr[i + j] === "H") {
        cnt++;
        arr[i + j] = "";
        continue P;
      }
    }
  }
}

console.log(cnt);
