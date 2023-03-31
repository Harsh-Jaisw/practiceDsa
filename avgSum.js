function AvgSum(arr,k){
    let sum=0
    let maxSum=0
   for(let i=0;i<k;i++){
    sum+=arr[i]
   }
   maxSum=sum
   let currSum=0
   for(let i=0;i<arr.length-k;i++){
     currSum=maxSum-arr[i]+arr[i+k]
     console.log(currSum)
     if(currSum>maxSum){
        maxSum=currSum
     }
   }
//    return maxSum
}
console.log(AvgSum([12,34,56,56,78,23,56],3))