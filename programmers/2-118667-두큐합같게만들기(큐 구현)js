function solution(que1, que2) {
  let que1Sum = que1.reduce((sum, e) => sum + e, 0);
  let que2Sum = que2.reduce((sum, e) => sum + e, 0);

  if ((que1Sum + que2Sum) % 2 !== 0) return -1;

  const length = que1.length + que2.length;
  let que1Idx = 0;
  let que2Idx = 0;

  for (let i = 0, cnt = 0; i < length * 2; i++, cnt++) {
    if (que1Sum > que2Sum) {
      const n = que1[que1Idx++];

      que2.push(n);
      que1Sum -= n;
      que2Sum += n;
    } else if (que1Sum < que2Sum) {
      const n = que2[que2Idx++];

      que1.push(n);
      que2Sum -= n;
      que1Sum += n;
    } else {
      return cnt;
    }
  }

  return -1;
}
