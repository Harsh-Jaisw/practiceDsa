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

// function reverse(str){
//   if(str.length<=1) return str
//   else return reverse(str.slice(1))+str[0]
// }
// function ValidPalindrome(str){
//    if(reverse(str)===str){
//     return true
//    }
//    return false
// }
// console.log(ValidPalindrome("cat"))

// function ValidPalindrome(str){
//   if(str.length<=1){
//     return true
//   }
//   if(str[0]===str.slice(-1)) {
//     // console.log(str.slice(1,-1))
//     return ValidPalindrome(str.slice(1,-1))
//   }
//   return false
// }
// console.log(ValidPalindrome("madam"))

// function IsAlphaNumeric(str){
//   return /^[a-z0-9]+$/gi.test(str)
// }
// function reveseStr(str){
//   if(str.length<=1){
//     return str
//   }
//   else{
//     return reveseStr(str.slice(1))+str[0]
//   }
// }
// function ValidPalindrome(str){
//   let newStr=""
//   for(let i=0;i<str.length;i++){
//     if(IsAlphaNumeric(str[i])){
//       newStr+=str[i]
//     }
//   }
//   if(newStr===reveseStr(newStr)){
//     return true
//   }
//   return false
// }
// console.log(ValidPalindrome("madam, madam"))

function IsAlphanumeric(str) {
  return /^[a-z0-9]+$/gi.test(str);
}
function ReverseStr(str) {
  if (str.length <= 1) return str;
  else {
    return ReverseStr(str.slice(1)) + str[0];
  }
}
function ValidPalindrome(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (IsAlphanumeric(str[i])) {
      newStr += str[i];
    }
  }
  if (newStr === ReverseStr(newStr)) {
    return true;
  }
  return false;
}
console.log(ValidPalindrome("madamnnnnn"));
