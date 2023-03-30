// function reverseStr(str){
//   if(str.length<=1){
//     return str
//   }
//   else{
//     return reverseStr(str.slice(1))+str[0]
//   }
// }
// console.log(reverseStr("madam"))

function ReverseString(str){
  if(str.length==0){
    return str
  }
  else{
    return ReverseString(str.slice(1))+str[0]
  }
}
console.log(ReverseString("mada"))