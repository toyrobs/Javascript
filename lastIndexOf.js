/*
lastIndexOf()

Without using the native “Array.prototype.lastIndexOf” method of JavaScript, 
compose a function titled “myUnshift” (typo) that will take in an array of elements and
 returns the index of the last encounter of a target element (if it is found) 
 or -1 if that element does not exist within the input array.
*/
function myindexOf(array,targ)
{
	for(let i=0;array.length;i++)
 	{
     if((array[i]==targ))

   return i
 	}
return -1
}