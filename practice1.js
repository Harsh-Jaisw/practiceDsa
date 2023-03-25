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