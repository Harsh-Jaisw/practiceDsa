// function twoSumClosest(arr, k) {
//   closestSum = -Infinity;
//   let i = 0;
//   let j = arr.length - 1;
//   let a;
//   let b;
//   while (i < j) {
//     if (arr[i] + arr[j] >=k) {
//       closestSum = arr[i] + arr[j];
//       a = i;
//       b = j;
//     } else if (arr[i] + arr[j] < k) {
//       j--;
//     } else {
//       i++;
//     }
//   }
  
//   return a,b;
// }
// console.log(twoSumClosest([1, 2, 5, 8, 9, 14], 12));
function TwoSumCloset(arr,t){
let closetSum = -Infinity
    let i = 0
    let j = arr.length-1;
    let a;
    let b;
    while(i<j){
        if(arr[i]+arr[j] > t){
            closetSum = arr[i] + arr[j]
            a = i
            b = j
        }else if ( arr[i] + arr[j] < t){
            j--
        }
        else{
            i++
        }
        return [a,b]
    }
}
console.log(TwoSumCloset([1,2,5,8,9,14],17))