function prefixSum(arr,n){
   let pre=new Array(n)
   pre[0]=arr[0]
   for(let i=1;i<n;i++){
    pre[i]=pre[i-1]+arr[i]
   }
  return pre
}
console.log(prefixSum([4 ,2 ,-3 ,1 ,6],5))