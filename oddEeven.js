let arr=[2,4,3,5,6,8,12];
let even=[];
let odd=[];
for(let i=0; i<arr.length; i++)
{
    if(arr[i]%2==0)
    {
      even.push(arr[i])
    }
    else{
        odd.push(arr[i])
    }
    
}
console.log("Tolal Even number =",even.length)
console.log("Even Number",even)
console.log("Total Odd number",odd.length)
console.log("Odd number",odd)