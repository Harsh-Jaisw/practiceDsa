function reverse(arr,i,j){
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++
        j--
    }
    return arr
}
function rotate(arr,k){
   arr=reverse(arr,0,arr.length-1)
   arr=reverse(arr,0,k)
   arr=reverse(arr,k+1,arr.length-1)

return arr
}
console.log(rotate([1,2,3,4,5,6,7],3))