function fibo(n){
    if(n==1||n==0){
        return n
    }
    else{
        return fibo(n-1)+fibo(n-2)
    }
}
console.log(fibo(2))