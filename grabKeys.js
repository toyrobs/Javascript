/*
Object.keys()

Without using the native “Object.keys()” method of JavaScript,
 compose a function titled “grabKeys” that will take 
in an object and return all of the keys of the key:value pairs of that object.
*/
 
 function grabKeys(obj)
 {
 	let valuearr = []
   for(key in obj)
   {
   	
   		valuearr.push(obj[key])
   	
   }
   return valuearr
 }