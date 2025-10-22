let arr=[3,4,98,2,8,6,11,56];
let max=0;
let min=arr[0];
for(let i=0; i<arr.length; i++)
{
  if(arr[i]>max)
  {
    max=arr[i];
  }
  else if(arr[i]<min)
  {
    min=arr[i];
  }

}
console.log("Maximum:",max)
console.log("Minimum:",min)