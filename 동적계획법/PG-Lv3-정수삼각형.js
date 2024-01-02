/**
 * 동적 계획법
 *
 * 2차원 배열에서 위에서 부터 순회하며
 * 마지막에 도착시 가장 큰 값 구하는 문제
 */

function solution(triangle) {
  const n = triangle.length;
  const arr = triangle.map((e) => [...e]);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) arr[i][j] += arr[i - 1][j];
      else if (j === i) arr[i][j] += arr[i - 1][j - 1];
      else arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
    }
  }

  return Math.max(...arr[n - 1]);
}
