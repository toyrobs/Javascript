/*
forEach()

Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled 
“myEach” that will take in an array of elements and executes any callback function on each of those elements.
*/


function myEach(array,callback)
{
	for(let i =0; i< array.length; i++) 
		{
			callback(arr[i]);
		}
}

myEach([1,2,3,4], num =>console.log(num))



//array1.forEach(element => console.log(element))