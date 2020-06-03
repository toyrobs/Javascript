/*
reduce()

Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce”
 that will take in an array of elements and executes a callback function on each of those elements.*/


 function myReduce(arr,callback)
 {
 	
  for(let i=0; i<arr.length;i++)
  {
  	callback+=arr[i];

  }
 }
myReduce([1,2,3], obj =>console.log(obj))
