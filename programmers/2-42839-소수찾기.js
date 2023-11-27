function solution(numbers) {
  const permutation = (start, current) => {
    set.add(+current.join(""));

    if (start === numbers.length) {
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (v[i]) continue;

      current.push(numbers[i]);
      v[i] = true;
      permutation(start + 1, current);
      v[i] = false;
      current.pop();
    }
  };

  const isPrime = () => {
    for (let i = 2; i * i <= max; i++) {
      if (!primes[i]) continue;

      for (let j = i * 2; j <= max; j += i) {
        primes[j] = false;
      }
    }
  };

  const set = new Set();
  const v = Array(numbers.length).fill(false);
  let ans = 0;

  permutation(0, []);

  const max = Math.max(...[...set]);
  const primes = Array(max + 1)
    .fill(true)
    .fill(false, 0, 2);

  isPrime();

  [...set].forEach((e) => {
    if (primes[e]) ans++;
  });

  console.log(ans);
}

solution("17");
