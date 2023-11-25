/**
 *
 * 그리디
 *
 * 스택에 추가하여 가장 먼거리부터 제외하며 맥스값을 합해주는 문제
 * 생각보다 그리디에 조건별로 처리하는게 많이 어려웠다..
 */
function solution(cap, n, deliveries, pickups) {
  let deliverySum = deliveries.reduce((acc, cur) => acc + cur, 0);
  let pickupSum = pickups.reduce((acc, cur) => acc + cur, 0);
  let ans = 0;

  while (deliverySum || pickupSum) {
    let max = 0;
    let deliveryCnt = 0;
    let pickupCnt = 0;
    let deliveryBox = cap;
    let pickupBox = cap;

    for (let i = deliveries.length - 1; i >= 0; i--) {
      if (deliveries[i] === 0) deliveries.pop();
      else break;
    }

    for (let i = pickups.length - 1; i >= 0; i--) {
      if (pickups[i] === 0) pickups.pop();
      else break;
    }

    for (let i = deliveries.length - 1; i >= 0; i--) {
      max = Math.max(max, i + 1);

      if (deliveries[i] >= deliveryBox) {
        deliveries[i] -= deliveryBox;
        deliveryCnt += deliveryBox;
        break;
      } else {
        deliveryCnt += deliveries[i];
        deliveryBox -= deliveries[i];
        deliveries[i] = 0;
      }
    }

    for (let i = pickups.length - 1; i >= 0; i--) {
      max = Math.max(max, i + 1);

      if (pickups[i] >= pickupBox) {
        pickups[i] -= pickupBox;
        pickupCnt += pickupBox;
        break;
      } else {
        pickupCnt += pickups[i];
        pickupBox -= pickups[i];
        pickups[i] = 0;
      }
    }

    deliverySum -= deliveryCnt;
    pickupSum -= pickupCnt;
    ans += max;
  }

  return ans * 2;
}
