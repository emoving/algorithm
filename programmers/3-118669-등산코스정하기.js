/**
 * 다익스트라(변형)
 *
 * 시작 지점에서 도착 지점까지 최단 거리를 구하는 것이 아닌,
 * 도착 지점까지의 간선의 최대값이 작은 길을 구하는 문제
 *
 * 다음 정점까지의 최소 거리보다 해당 정점과 다음 정점까지의 거리가 더 작다면,
 * 최신화 해주고 탐색을 하는것에 반해
 * 다음 정점까지의 최대 간선 값보다 현재까지의 최대 간선값과 현재 정점에서 다음 정점까지의 간선 길이 중 더 큰 값이 있다면 그 값으로 최신화 해주고 탐색 해주었다.
 */

class Queue {
  constructor() {
    this.map = new Map();
    this.first = 0;
    this.last = 0;
  }

  add(e) {
    if (!this.map.size) {
      this.map.set(0, e);
    } else {
      this.last += 1;
      this.map.set(this.last, e);
    }
  }

  poll() {
    const e = this.map.get(this.first);

    if (this.map.size == 1) {
      this.map.clear();
      this.first = 0;
      this.last = 0;
    } else {
      this.map.delete(this.first);
      this.first += 1;
    }

    return e;
  }

  size() {
    return this.map.size;
  }
}

function solution(n, paths, gates, summits) {
  const graph = Array.from(Array(n + 1), () => Array());

  paths.forEach((path) => {
    const [start, end, weight] = [...path];

    if (gates.includes(start)) graph[start].push([end, weight]);
    else if (gates.includes(end)) graph[end].push([start, weight]);
    else if (summits.includes(start)) graph[end].push([start, weight]);
    else if (summits.includes(end)) graph[start].push([end, weight]);
    else {
      graph[start].push([end, weight]);
      graph[end].push([start, weight]);
    }
  });

  const que = new Queue();
  const intensity = Array(n + 1).fill(Infinity);

  gates.forEach((gate) => {
    que.add([gate, 0]);
    intensity[gate] = 0;
  });

  while (que.size()) {
    const from = que.poll();

    graph[from[0]].forEach((to) => {
      if (intensity[to[0]] > Math.max(intensity[from[0]], to[1])) {
        intensity[to[0]] = Math.max(intensity[from[0]], to[1]);

        que.add(to);
      }
    });
  }

  let min = Number.MAX_SAFE_INTEGER;
  let ans;

  summits.sort((a, b) => a - b);
  summits.forEach((summit) => {
    if (intensity[summit] < min) {
      min = intensity[summit];
      ans = [summit, intensity[summit]];
    }
  });

  return ans;
}
