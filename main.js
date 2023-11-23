class Node {
  constructor(idx, prev) {
    this.idx = idx;
    this.prev = prev;
    this.next = null;
  }
}

console.log(new Node(0));

function solution(n, k, cmd) {
  let prevNode = new Node(0);
  let curNode;

  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;

    if (i === k) curNode = newNode;

    cmd.forEach((command) => {});
  }
}

solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]);
