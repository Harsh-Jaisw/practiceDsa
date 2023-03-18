function checkDistinct(ch){
    fre={}
    for(let j=0;j<ch.length;j++){
      fre[ch[j]]=(fre[ch[j]]||0)+1
    }
    return Object.values(fre).every(x => x === 1)
  } console.log( checkDistinct("xyzaa"))