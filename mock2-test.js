// 1- We have given two array and we have to check the sequence of array2 with array1 and return true or false.
function SequenceArr(arr1, arr2) {
  let i = 0;
  let j = 0;
  let n = arr1.length;
  let count = 0;
  while (i < n) {
    if (arr1[i] === arr2[j]) {
      j++;
      i++;
      count++;
    } else {
      i++;
    }
  }
  if (count == arr2.length) {
    return true;
  }
  return false;
}
console.log(SequenceArr([10, 4, 7, 2, 3, 6], [10, 3, 2]));

//2-Find the total sum of the array which included the price using reduce function. 
//  let product = [
//   { name: "a", price: 10 },
//   { name: "b", price: 40 },
//   { name: "c", price: 30 },
//   { name: "d", price: 20 },
// ];

//  let FinalSum
// FinalSum=product.reduce((acc,current)=>acc+current.price,0)
// console.log(FinalSum)

//3- Change the name key with id and iterate over it using map and increase the id by 1.
// let LessArr = [];
// let id = 1;
// LessArr = product.map((item,i) => {
//   let obj={}
//   obj["id"]=id
//   id++
//   obj[`price`]=item.price
//   return obj
// }
// );
// console.log(LessArr);
