function deleteEle(arr,k){
//   let mp=new Map()
//   for(let i=0;i<arr.length;i++){
//     if(mp.has(arr[i])){
//         mp.set(arr[i],mp.get(arr[i])+1)
//     }
//     else{
//         mp.set(arr[i],1)
//     }
//   }
//   console.log(mp)
//   let newArr=[]
//   mp.forEach((value,key)=>{
//   if(key!==k){
//      newArr.push(key)
//   }
// })
// return newArr
let i=0
let j=0
while(i<arr.length){
    if(arr[i]!==k){
      arr[j]=arr[i]
      j++
    }
    i++
}
arr.length=j
return arr
}
console.log(deleteEle([3,2,2,3],3))
// ["tree","treeee","treea"]