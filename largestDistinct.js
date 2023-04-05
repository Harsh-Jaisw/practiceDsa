function LargestDistinct(arr){
  let largest=-Infinity
  let secondLargest
  let thirdLargest
  for(let i=0;i<arr.length;i++){
    if(largest<arr[i]){
        thirdLargest=secondLargest
        secondLargest=largest
        largest=arr[i]
    }
    else if(secondLargest<arr[i]){
        thirdLargest=secondLargest
        secondLargest=arr[i]
    }
    else if(thirdLargest<arr[i]){
        thirdLargest=arr[i]
    }
  }
  return ({thirdLargest,secondLargest,largest})
}
console.log( LargestDistinct([10, 4, 3, 50, 23, 90]))