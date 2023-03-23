// function reverse(s){
//     let reverseStr=""
//     for(i=s.length-1;i>=0;i--){
//         reverseStr=reverseStr.concat(s[i])
//     }
//     return reverseStr
//   }
// function ValidPalindrome(str){
//   if(reverse(str)===str){
//     return true
//   }
//   return false
// }
// console.log(ValidPalindrome("madam"))

function reverse(str){
  if(str.length<=1) return str
  else return reverse(str.slice(1))+str[0]
}
function ValidPalindrome(str){
   if(reverse(str)===str){
    return true
   }
   return false
}
console.log(ValidPalindrome("cat"))