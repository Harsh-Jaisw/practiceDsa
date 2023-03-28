function sumEven(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] % 2 === 0
      ? (sum += arr[0] + sumEven(arr.slice(1)))
      : sumEven(arr.slice(1));
  }
}
console.log(sumEven([1, 2, 3, 4, 5, 6, 7, 10]));
