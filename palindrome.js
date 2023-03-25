// function palindrome(str){
// let i=0
// let j=str.length-1
// while(i<j){
//  if(str[i]!==str[j]){
//     return false
//  }  
//  i++
//  j--
// }
// return true
// }
// console.log(palindrome("abcha"))

function reverse(str){
   if(str.length<=1){
      return str
   }
   else{
      return reverse(str.slice(1))+str[0]
   }
}
function palindrome(str){
   if(str===reverse(str)){
      return "yes it is palindrome"
   }
   return "not a palindrome"
}
console.log(palindrome("madam"))