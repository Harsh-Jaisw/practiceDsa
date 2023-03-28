function MaxFre(arr) {
  let mp = new Map();
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (mp.has(arr[i])) {
      x = mp.get(arr[i]);
      mp.set(arr[i], x + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }
  let maxValue = 0;
  let maxKey = 0;

  for (let [key, value] of mp) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(MaxFre([1, 2, 3, 4, 3, 2, 3, 1, 4, 2, 3]));
