function ClosestSum(arr,k){
 let l=0
 let r=arr.length-1
 let diff=Infinity
 let a
 let b
 while(l<r){
   
    let currdiff=Math.abs(arr[l]+arr[r]-k)
    if(currdiff<diff){
      diff=currdiff
      a=arr[l]
      b=arr[r]
    }
    if(arr[l]+arr[r]>k){
        r--
    }
    else{
        l++
    }
 }
 return [a,b]
}
console.log(ClosestSum([1,2,3,4,5,5],10))