var removeDuplicates = function(nums) {
    let mp=new Map();
    for(let i=0;i<nums.length;i++){
        let x=nums[i];
        if(mp.has(x)==true){
            let v=mp.get(x)
            v++
            mp.set(x,v)
        }else{
            mp.set(x,1)
        };
        
    }
    console.log(mp)
    let index=0;
    mp.forEach((_,key)=>{
        nums[index]=key;  //[1,2,6]  
        index++
    })
    console.log(nums)
      return index;
    
};
console.log(removeDuplicates([1,1,2,2,6]))