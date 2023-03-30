function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([2, 3, 1, 5, 9, 22, 8, 78, 12]));

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < ( arr.length - i -1 ); j++){
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
