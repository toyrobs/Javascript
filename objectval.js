/*Object.values()

Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take
 in an object and return all of the values of the key:value pairs of that object.
 */

 
 function grabValues(obj)
 {
 	let valuearr = []
   for(key in obj)
   {
   	
   		valuearr.push(obj[key])
   	
   }
   return valuearr
 }