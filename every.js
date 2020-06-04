/*
every()

Without using the native “Array.prototype.every” method of JavaScript, 
compose a function titled “myEvery” that will take in an array of elements and executes a 
callback function on each of those elements.
*/
function myEvery(array,callback)
{
	for(let i = 0; i< array.length;i++)
	{
		if(!callback(array[i]))
		{
			return false
		}
	}
	
}