function Missing(arr){
   let mp=new Map()
    for(let i=0;i<arr.length;i++){
     if(mp.has(arr[i])){
        mp.set(arr[i],mp.get(arr[i])+1)
     }
     else{
        mp.set(arr[i],1)
     }
   }
//    console.log(mp)
   for(let i=1;i<=arr.length+1;i++){
    if(mp.has(i)==false){
        return i
    }
   }
}
console.log(Missing([1, 2, 4, 6, 3, 7, 5]))