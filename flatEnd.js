// function FlatEndArr(arr) {
//   let flat = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i]) === false) {
//        flat.push(arr[i]);
//     } else {
//        flat=flat.concat(FlatEndArr(arr[i]))     
//     }
//   }
//   return flat
// }
// console.log(FlatEndArr([1, 2, [3, 4],[[4,5],7]]));

function FlatEndArr(arr){
  let flat=[]
 for(let i=0;i<arr.length;i++){
  if(Array.isArray(arr[i])===false){
    flat.push(arr[i])
  }
  else{
    flat=flat.concat(FlatEndArr(arr[i]))
  }
 }
 return flat
}
console.log(FlatEndArr([1,2,3,[4,5],[3,7,[6,8]],9]))