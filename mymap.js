/*
map()

Without using the native “Array.prototype.map” method of JavaScript,
 compose a function titled “myMap” that will take in an array of elements and executes a callback 
 function on each of those elements.
*/  

 const arr = [1,2,3,4];

function myMap(arr,callback)
{
	for(let i =0; i< arr.length; i++) 
		{
			callback(arr[i]);
		}
}


myMap([1,2,3,4], num =>console.log(num))
