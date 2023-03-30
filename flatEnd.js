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

// function FlatEndArr(arr){
//   let flat=[]
//  for(let i=0;i<arr.length;i++){
//   if(Array.isArray(arr[i])===false){
//     flat.push(arr[i])
//   }
//   else{
//     flat=flat.concat(FlatEndArr(arr[i]))
//   }
//  }
//  return flat
// }
// console.log(FlatEndArr([1,2,3,[4,5],[3,7,[6,8]],9]))


// function flatEnd(arr){
//   let flat=[]
//    for(let i=0;i<arr.length;i++){
//      if(Array.isArray(arr[i])===false){
//       flat.push(arr[i])
//      }
//      flat=flat.concat(flatEnd(arr[i]))
//    }
//    return flat
// }
// console.log(flatEnd([1,2,3,[4,5],[6,[7,8,[0,[[7],9]]]]]))

function flatEnd(arr){
   if(arr.length<=1){
    return arr
   }
   let flat=[]
   for(let i=0;i<arr.length;i++){
    if(!Array.isArray(arr[i])){
        flat.push(arr[i])
    }
    else{
        flat=flat.concat(flatEnd(arr[i]))
    }
   }
   return flat
}
console.log(flatEnd([0,[],[0],{89:[9]}]))