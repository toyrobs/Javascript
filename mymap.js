/*
map()

Without using the native “Array.prototype.map” method of JavaScript,
 compose a function titled “myMap” that will take in an array of elements and executes a callback 
 function on each of those elements.
*/  


function myMap(array,callback) 
{
	let newarray=[];
	for(let i =0; i< array.length; i++) 
		{
			newarr[i]=callback(arr[i]);
		}
		return newarray
}



