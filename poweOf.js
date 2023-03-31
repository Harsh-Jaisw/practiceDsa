function powerOf(n){
    if(n===1){
        return true
    }
    else if(n<1 || n%4!==0){
        return false
    }
    else{
        return powerOf(n/4)
    }
}
console.log(powerOf(24)) 

// function power(n,i){
//     if(i===0){
//         return 1
//     }
//     else{
//         return n*power(n,i-1)
//     }
// }
// console.log(power(2,2))