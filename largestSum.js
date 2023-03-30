function LargestSum(arr){
   let large=-Infinity
   let SecondLarge=-Infinity
   let thirdLarge=-Infinity
   let sum=0
   for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        thirdLarge=SecondLarge
        SecondLarge=large
        large=arr[i]
    }
    else if(SecondLarge<arr[i]){
        thirdLarge=SecondLarge
        SecondLarge=arr[i]
    }
    else if(thirdLarge<arr[i]){
        thirdLarge=arr[i]
    }
   }
   sum=SecondLarge+large+thirdLarge
   return sum
}
console.log(LargestSum([12,3,45,56,1,34]))