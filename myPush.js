/*push()

Without using the native “Array.prototype.push” method of JavaScript, compose a function titled
 “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end
  of the array.
  */
  function myPush(array,element)
  {
  	
    let newarray =array
 	array[newarray.length]= element
 	return newarray
}
myPush([1,2,3,4], num =>console.log(num))