function sort012(arr,n){
        for (let i = 0; i < n-1; i++)
{
    for (let j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
         
        }
    }
}
 return arr    
}console.log(sort012([23,56,12,745,11]),5)