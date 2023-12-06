/**
 * 위상 정렬
 *
 * 진입 조건 개수를 셀 배열을 하나 만들어 준다
 * 노드 생성시 진입 배열의 개수 + 1
 * 진입 차수가 0인것 부터 큐에 추가
 * 큐에서 꺼내 그래프 순회하며 진입 차수 -1
 */

const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .split(process.platform == "linux" ? "\n" : "\r\n");

const [n, m] = input[0].split(" ").map(Number);
const list = Array.from(Array(n + 1), () => []);
const d = Array(n + 1).fill(0);
const ans = [];

const topologySort = () => {
  const que = [];

  for (let i = 1; i <= n; i++) {
    if (!d[i]) que.push(i);
  }

  while (que.length) {
    const cur = que.shift();
    ans.push(cur);

    for (const i of list[cur]) {
      if (!--d[i]) que.push(i);
    }
  }
};

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  list[a].push(b);
  d[b]++;
}

topologySort();

console.log(ans.join(" "));
