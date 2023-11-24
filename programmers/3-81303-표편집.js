/**
 * 이중 연결 리스트
 *
 * 리스트는 따로 구현하지 않고 노드만 가지고 구현했다.
 * 삭제와 삽입시 맨 앞 노드거나 맨 마지막 노드일 시 head, tail도 바꿔야하는 것 주의하자
 */
class Node {
  constructor(idx, prev) {
    this.idx = idx;
    this.prev = prev;
    this.next = null;
  }
}

function solution(n, k, cmd) {
  const stack = [];
  let prevNode = new Node(0, null);
  let headNode = prevNode;
  let curNode;

  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;

    if (i === k) curNode = newNode;
  }

  cmd.forEach((command) => {
    if (command === "C") C();
    else if (command === "Z") Z();
    else {
      const [key, value] = command.split(" ");

      if (key === "U") U(value);
      else D(value);
    }
  });

  const arr = Array(n).fill("X");

  while (headNode) {
    arr[headNode.idx] = "O";
    headNode = headNode.next;
  }

  function U(value) {
    for (let i = 0; i < value; i++) {
      curNode = curNode.prev;
    }
  }

  function D(value) {
    for (let i = 0; i < value; i++) {
      curNode = curNode.next;
    }
  }

  function C() {
    const deleteNode = curNode;

    if (curNode.next && curNode.prev) {
      curNode.prev.next = curNode.next;
      curNode.next.prev = curNode.prev;
      curNode = curNode.next;
    } else if (curNode.next) {
      curNode.next.prev = null;
      curNode = curNode.next;
      headNode = curNode;
    } else {
      curNode.prev.next = null;
      curNode = curNode.prev;
    }

    stack.push(deleteNode);
  }

  function Z() {
    const popNode = stack.pop();

    if (popNode.next && popNode.prev) {
      popNode.next.prev = popNode;
      popNode.prev.next = popNode;
    } else if (popNode.next) {
      popNode.next.prev = popNode;
      headNode = popNode;
    } else {
      popNode.prev.next = popNode;
    }
  }

  return arr.join("");
}
