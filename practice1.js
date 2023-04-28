// let arr=[-25,-3,78,4,58,-14,-6,-9]
// //kadane's Algorithum
// let max_sum=-Infinity
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
//     max_sum=Math.max(max_sum,sum)
//     if(sum<0){
//         sum=0
//     }

// }
// console.log(max_sum)

// function isAnagram(s1,s2){
//     if(s1.length!== s2.length){
//         return false;
//     }
//     let map = {};
//     for(let i = 0; i < s1.length; i++){
//         map[s1[i]]=(map[s1[i]]||0)+1
//     }
//     for(let i = 0; i < s2.length; i++){
//         if(!map[s2[i]]){
//             return false;
//         }else{
//             map[s2[i]]++;
//         }
//     }
//     return true;
// }
// console.log(isAnagram('hrahs','harsh'))



// for hold solution is not appropriate
// function Anagram(str1, str2) {
//   let mp = new Map();
//   let mp1 = new Map();
//   for (let i = 0; i < str1.length; i++) {
//     if (mp.has(str1[i])) {
//       mp.set(str1[i], mp.get(str1[i]) + 1);
//     } else {
//       mp.set(str1[i], 1);
//     }
//   }

//   for (let i = 0; i < str2.length; i++) {
//     if (mp1.has(str2[i])) {
//       mp1.set(str2[i], mp1.get(str2[i]) + 1);
//     } else {
//       mp1.set(str2[i], 1);
//     }
//   }
//   mp.forEach((value, key) => {
//     if (mp1.get(key)!==value) {
//       return false;
//     }
//   });
//   mp1.forEach((value, key) => {
//     if (mp.get(key)!==value) {
//       return false;
//     }
//   });
//   return true;
// }
// console.log(Anagram("madam", "maadc"));
