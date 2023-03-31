// var a=[1,4,7,9]
// var n = a.length;
// var b = [10,20,30,40]
// var m=b.length
// var target = 40;
// let i=0;
// let j=m-1

// let x=a[i]
// let y=b[j]

// while(i<n&&j>=0){
//     let diff=Math.abs((a[i]+b[j])-target)
//     if(diff<(Math.abs((x+y)-target))){
//         x=a[i]
//         y=b[j]
//     }
//     if(a[i]+b[j]==target){
//         break
//     } else if(a[i]+b[j]>target){
//        j-- 
//     } else{
//         i++
//     }
// }
// console.log(x,y)

function closestSum(arr1,arr2,target){
   let i=0
   let j=arr2.length-1
   let x=arr1[i]
   let y=arr2[j]
   while(i<arr1.length && j>=0){
    let diff=Math.abs(arr1[i]+arr2[j]-target)
    if(diff<Math.abs(x+y-target)){
        x=arr1[i]
        y=arr2[j]
    }
    if(diff===Math.abs(arr1[i]+arr2[j]-target)){
        break
    }
    else if(arr1[i]+arr2[j]>target){
        j--
    }
    else{
        i++
    }
   }
   console.log(x,y)
}
console.log(closestSum([1,2,3,6],[7,8,9,11],17))