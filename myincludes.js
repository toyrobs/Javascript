/*
includes()
Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled
 “myIncludes” that will take in an array of elements and indicates whether or not a target element is
  contained within the input array. This returns a boolean.
 */
 function myIncludes(array,targ)
 {
 	for(let i=0;array.length;i++)
 	{
     if((array[i]==targ))

   return true
 	}
 }