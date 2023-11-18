/**
 * 괄호 제거
 *
 * 왼쪽 괄호부터 스택에 추가하다가 오른쪽 괄호가 만나면 쌍으로 추가
 * 괄호쌍 배열로 모든 경우의 수 조합
 */
const input = require("fs")
  .readFileSync(process.platform == "linux" ? 0 : "input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split("");
const temp = [];
const stack = [];
const set = new Set();

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "(") temp.push(i);
  else if (arr[i] === ")") stack.push([temp.pop(), i]);
}

const dfs = (cur, idx) => {
  if (idx === stack.length) {
    const tmp = [...arr];
    cur.forEach((e) => {
      tmp[stack[e][0]] = "";
      tmp[stack[e][1]] = "";

      set.add(tmp.join(""));
    });

    return;
  }

  dfs(cur.concat(idx), idx + 1);
  dfs(cur, idx + 1);
};

dfs([], 0);

const ans = Array.from(set);
ans.sort();

console.log(ans.join("\n"));
