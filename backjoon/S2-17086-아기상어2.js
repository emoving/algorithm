/**
 * BFS
 */
const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const d = Array.from(Array(n), () => Array(m).fill(false));
const arr = [];
let ans = 0;

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!arr[i][j] && !d[i][j]) {
      bfs(i, j);
    }
  }
}

console.log(ans);

function bfs(r, c) {
  const que = [[r, c]];
  d[r][c] = true;
  let cnt = 0;

  while (que.length) {
    const length = que.length;

    for (let i = 0; i < length; i++) {
      const [x, y] = que.shift();

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (arr[x][y] === 1) return;

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (!d[nx][ny]) {
          d[nx][ny] = true;
          que.push([nx, ny]);
        }
      }
    }

    cnt++;
    ans = Math.max(ans, cnt);
  }
}
