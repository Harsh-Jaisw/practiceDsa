function subarrayWithMax(arr,n){
    // prefix sum + hashing
   let pre=[]
   let mp=new Map()
   let ans=0
   pre[0]=arr[0]
   for(i=1;i<n;i++){
    pre[i]=pre[i-1]+arr[i]
   }
   for(let j=0;j<n;j++){
    if(pre[j]==0){
      ans++
    } 
    if(mp.has(pre[j])){
        ans+=mp.get(pre[j])
        mp.set(pre[j],mp.get(pre[j])+1)
    }
    else{
        mp.set(pre[j],1)
    }
   }
   console.log(mp,pre, ans)
}
console.log(subarrayWithMax([4,2,-2,-6,6],5))