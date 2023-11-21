function solution(alp, cop, problems) {
  let maxAlp = alp;
  let maxCop = cop;

  problems.forEach((problem) => {
    maxAlp = Math.max(maxAlp, problem[0]);
    maxCop = Math.max(maxCop, problem[1]);
  });

  if (alp >= maxAlp && cop >= maxCop) return 0;

  const dp = Array.from(Array(maxAlp + 31), () => Array(maxCop + 31).fill(0));

  for (let i = 0; i <= maxAlp + 30 - alp; i++) {
    for (let j = 0; j <= maxCop + 30 - cop; j++) {
      dp[alp + i][cop + j] = i + j;
    }
  }

  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      let isChange = false;

      problems.forEach((problem) => {
        if (i >= problem[0] && j >= problem[1]) {
          dp[i + problem[2]][j + problem[3]] = Math.min(
            dp[i + problem[2]][j + problem[3]],
            dp[i][j] + problem[4]
          );

          isChange = true;
        }
      });

      if (isChange) {
        for (let x = 0; x <= maxAlp + 30 - i; x++) {
          for (let y = 0; y <= maxAlp + 30 - j; y++) {
            dp[i + x][j + y] = Math.min(dp[i][j] + x + y, dp[i + x][j + y]);
          }
        }
      }
    }
  }

  let ans = dp[maxAlp][maxCop];
  for (let i = maxAlp; i <= maxAlp + 30; i++) {
    for (let j = maxCop; j <= maxCop + 30; j++) {
      ans = Math.min(ans, dp[i][j]);
    }
  }

  return ans;
}
