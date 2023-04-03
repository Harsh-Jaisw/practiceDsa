let str="Harsh is a good boy"
let s=" "
let arr=str.split(" ")
let newArr=[]
console.log(arr)
for(let i=1;i<arr.length;i++){
    newArr.push(arr[i])
}
console.log(str,',',newArr.join(" "))