function LargestSum(arr){
   let large=-Infinity
   let SecondLarge=-Infinity
   let sum=0
   for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        SecondLarge=large
        large=arr[i]
    }
    else if(SecondLarge<arr[i]){
        SecondLarge=arr[i]
    }
   }
   sum=SecondLarge+large
   return sum
}
console.log(LargestSum([12,3,45,56,1,34]))