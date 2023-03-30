// function BinarySearch(arr,target){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         mid=Math.floor((left+right)/2)
//         if(arr[mid]===target){
//             return mid
//         }
//         else if(arr[mid]>target){
//             right=mid-1
//         }
//         else{
//             left=mid+1
//         }   
//     }
      
// }console.log(BinarySearch([1,2,3,4],4))

function BinarySearch(arr,target){
   let start=0
   let end=arr.length-1
   while(start<=end){
    mid=Math.floor((start+end)/2)
    if(arr[mid]===target){
        return true
    }
    else if(arr[mid]>target){
        end=mid-1
    }
    else{
       start=mid+1
    }
   }
  return false
}
console.log(BinarySearch([1,2,3,4,5,6,7],8))