/**
 *
 * 그래프 탐색
 */
function solution(places) {
  const ans = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = (r, c, place, d) => {
    const que = [[r, c]];
    let cnt = 0;
    d[r][c] = true;

    while (que.length) {
      const size = que.length;

      for (let i = 0; i < size; i++) {
        const [x, y] = que.shift();

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx < 0 || nx > 4 || ny < 0 || ny > 4) continue;
          if (!d[nx][ny] && place[nx][ny] === "P") return false;

          if (cnt === 0 && place[nx][ny] === "O") {
            que.push([nx, ny]);
          }
        }
      }

      cnt++;
    }

    return true;
  };

  out: for (let i = 0; i < places.length; i++) {
    const place = places[i];
    const d = Array.from(Array(5), () => Array(5).fill(false));

    for (let i = 0; i < place.length; i++) {
      for (let j = 0; j < place.length; j++) {
        if (place[i][j] === "P") {
          if (!bfs(i, j, place, d)) {
            ans.push(0);
            continue out;
          }
        }
      }
    }

    ans.push(1);
  }

  return ans;
}
