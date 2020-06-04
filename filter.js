 /*

filter()

Without using the native “Array.prototype.filter” method of JavaScript, compose a 
function titled “myFilter” that will take in an array of elements and executes a 
callback function on each of those elements.
*/

function myFilter(array,callback)
{
let newarray=[];
	for(let i =0; i< array.length; i++) 
		{
			if(callback(arr[i]))
			{
			newarray[i]=push(arr[i]);	
			}
			
		}
		return newarray
}