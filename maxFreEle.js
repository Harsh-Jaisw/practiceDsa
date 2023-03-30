function maxFreEle(arr) {
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }
  let maxValue = 0;
  let maxElem = 0;
  mp.forEach((value, key) => {
    if (maxValue < value) {
      maxValue = value;
      maxElem = key;
    }
  });
  return maxElem;
}
console.log(maxFreEle([1, 2, 3, 4, 5, 6, 6, 6, 5]));
