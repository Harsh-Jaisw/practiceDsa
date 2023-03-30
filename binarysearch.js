function BinarySearch(arr,target){
    let left=0
    let right=arr.length-1
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            right=mid-1
        }
        else{
            left=mid+1
        }   
    }
      
}console.log(BinarySearch([1,2,3,4],4))