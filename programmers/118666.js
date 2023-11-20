/**
 *
 * 성격 유형 검사하기(2022 카카오 인턴십)
 */
function solution(survey, choices) {
  const point = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  choices.forEach((e, i) => {
    switch (e) {
      case 1:
        point[survey[i][0]] += 3;
        break;
      case 2:
        point[survey[i][0]] += 2;
        break;
      case 3:
        point[survey[i][0]] += 1;
        break;
      case 5:
        point[survey[i][1]] += 1;
        break;
      case 6:
        point[survey[i][1]] += 2;
        break;
      case 7:
        point[survey[i][1]] += 3;
        break;
    }
  });

  const obj = Object.entries(point);
  let ans = "";

  for (let i = 0; i < obj.length; i += 2) {
    if (obj[i][1] === obj[i + 1][1]) {
      if (obj[i][0] < obj[i + 1][0]) {
        ans += obj[i][0];
      } else {
        ans += obj[i + 1][0];
      }
    } else if (obj[i][1] > obj[i + 1][1]) {
      ans += obj[i][0];
    } else {
      ans += obj[i + 1][0];
    }
  }

  return ans;
}
