/**
 *
 * 그래프 탐색
 */
function solution(n, edge) {
  const list = Array.from(Array(n + 1), () => []);
  const v = [1, 1];
  const que = [1];

  edge.forEach(([from, to]) => {
    list[from].push(to);
    list[to].push(from);
  });

  while (que.length) {
    const cur = que.shift();

    list[cur].forEach((next) => {
      if (!v[next]) {
        v[next] = v[cur] + 1;
        que.push(next);
      }
    });
  }

  const max = Math.max(...v);

  return v.filter((e) => e === max).length;
}
