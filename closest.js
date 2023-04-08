function ClosestSum(arr,k){
 let l=0
 let r=arr.length-1
 let diff=Infinity
 let a
 let b
 while(l<r){
   
    let currdiff=Math.abs(arr[l]+arr[r]-k)
    if(currdiff<diff){//3,2,1
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
console.log(ClosestSum([1,2,3,3,5,6],10))