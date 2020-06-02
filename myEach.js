/*
forEach()

Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled 
“myEach” that will take in an array of elements and executes any callback function on each of those elements.
*/
/*var numbers = [65, 44, 12, 4];*/
const arr = [1,2,3,4];

function myEach(arr,callback)
{
	for(let i =0; i< arr.length; i++) 
		{
			callback(arr[i]);
		}
}

myEach([1,2,3,4], num =>console.log(num))



