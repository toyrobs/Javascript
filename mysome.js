/*some() (aka any())

Without using the native “Array.prototype.some” method of JavaScript,
 compose a function titled “mySome” that will take in an array of elements and executes
  a callback function on each of those elements.
  */

function mySome(arr,callback,)
{
 for(let i=0;i<arr.length;i++)
	 {
     	if(callback(arr[i]))
     	{
     		return true
     	} 	
      }
   
}
console.log(mySome([1,2,3,4], element=>element %2 === 0))
