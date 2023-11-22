class Que {
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

function solution(queue1, queue2) {
  let que1Sum = queue1.reduce((sum, e) => sum + e, 0);
  let que2Sum = queue2.reduce((sum, e) => sum + e, 0);

  if ((que1Sum + que2Sum) % 2 !== 0) return -1;

  const que1 = new Que();
  const que2 = new Que();

  queue1.forEach((e) => que1.add(e));
  queue2.forEach((e) => que2.add(e));

  for (let i = 0, cnt = 0; i < queue1.length * 3; i++, cnt++) {
    if (que1Sum > que2Sum) {
      const n = que1.poll();
      que2.add(n);

      que1Sum -= n;
      que2Sum += n;
    } else if (que1Sum < que2Sum) {
      const n = que2.poll();
      que1.add(n);

      que2Sum -= n;
      que1Sum += n;
    } else {
      return cnt;
    }
  }

  return -1;
}
