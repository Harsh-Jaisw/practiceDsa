function DigitSum(num){
  if(num==0){
    return 0
  }   
  else{
    return num%10+DigitSum(Math.floor(num/10))
  }
}
console.log(DigitSum(678))