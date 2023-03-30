function LongSubstring(str,k){
   let i=0
   let j=0
   let mp=new Map()
   let dis=0
   while(j<str.length){
      if(mp.size<k){
      if(mp.has(str[j])){
         x=mp.get(str[j])
         x++
         mp.set(str[j],x)
      }
      else{
         mp.set(str[j],1)
      }
      j++
   }
      else if(mp.size===k){
         dis=Math.max(dis,j-i+1)
         j++
      }
      else if(mp.size>k ){
         while(mp.size>k){
        let y=mp.get(str[i])
        y--
        mp.set(str[i],y)
        if(mp.get(s[i])==0){
         mp.delete(s[i])
        }
      i++ 
         }
         
      }
      j++
     
   }
// return mp
}console.log(LongSubstring("abaceef",3))