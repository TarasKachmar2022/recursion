const arr = [40, [155, 6, 87, 35], 10, 57, 55, 80];

function findMinNumber() {
  let min;

  for (const numbers of arguments) {
    for (const num of numbers) {
      if (typeof num === 'number') {
        min = num;
        break;
      }
    }
  }

  for (const numbers of arguments) {
    for (const num of numbers) {
      if (typeof num === 'number') {
        if (num < min) {
          min = num;
        }
      } else {
        min = findMinNumber([...num]);
      }
    }
  }
  return min;
}

console.log(findMinNumber(arr));
