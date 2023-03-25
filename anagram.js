// function anagram(str,str1){
// let fre={}
// let fre1={}
// for(let i=0;i<str.length;i++){
//     fre[str[i]]=(fre[str[i]]||0 )+ 1
// }
// for(let i=0 ;i<str1.length;i++){
//     fre1[str1[i]]=(fre1[str1[i]]||0 )+ 1
// }
// for(key in fre){
//     if(!fre1[key]){
//         return false
//     }
//     if(fre1[key]!==fre[key]){
//         return false
//     }
// }
// for(key in fre1){
//     if(!fre[key]){
//         return false
//     }
//     if(fre1[key]!==fre[key]){
//         return false
//     }
// }
// return true
// } console.log(anagram("tac","cat"))


// const arr=[-10,-8,-3,3,4,5]
// let  left = 0;
// let right = arr.length;

// while(left<right){
//     const sum = arr[left]+arr[right];
//     if(sum === 0){
//         console.log(arr[left])
//         console.log(arr[right])
//         break;

//     }else if(sum < 0){
//         left++
//     }else{
//         right--
//     }

// }

function ValidAnagram(str,str1){
  let fre={}
  let fre1={}
  for(let i=0;i<str.length;i++){
    fre[str[i]]=(fre[str[i]] ||0)+1
  }
  for(let j=0;j<str1.length;j++){
    fre1[str1[j]]=(fre1[str1[j]] ||0)+1
  }
  for(let key in fre){
    if(!fre1[key]){
        return false
    }
    if(fre[key]!==fre1[key]){
        return false
    }
  }
  for( key in fre1){
    if(!fre[key]){
        return false
    }
    if(fre[key]!==fre1[key]){
        return false
    }
  }
  return true
}
console.log(ValidAnagram("cat","cat"))