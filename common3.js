// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}

function commonthree(arr1,arr2,arr3,n1,n2,n3) {
    let final=Math.max(n1,n2,n3)
    let i=0
    let finalArr=[]
    while(i<final){
        if(arr2.includes(arr3[i]) && arr1.includes(arr3[i])){
            finalArr.push(arr3[i])
        }
        i++
    }
    return finalArr.join()
}
console.log(
  commonthree(
    [1, 5, 10, 20, 40, 80],
    [6, 7, 20, 80, 100],
    [3, 4, 15, 20, 30, 70, 80, 120],
    6,
    5,
    8
  )
);
