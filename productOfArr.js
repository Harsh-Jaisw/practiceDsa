// function productOfArr(arr,i){
//   if(i===arr.length){
//     return 1
//   }
//   else{
//     return arr[i]*productOfArr(arr)
//   }
// }
// console.log(productOfArr([1,2,3,4,5,6],0))

function productOfArr(arr){
    if(arr.length===0){
        return 1
    }
    else{
        return arr[0]*productOfArr(arr.slice(1))
    }
}
console.log(productOfArr([1,2,3,4,5,8]))