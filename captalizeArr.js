// function Cap(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i][0].toUpperCase()+arr[i].slice(1))
//   }
//   return newArr;
// }
// console.log(Cap(["bhavish", "harshada", "salaini"]));
function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return arr;
  } else {
    let capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);
    return [capitalized,...capitalizeFirst(arr.slice(1))];
  }
}
console.log(capitalizeFirst(["hello", "sanjay", "salini", "harsh"]));

// Output: ['Hello', 'Shalini', 'Hiii']
