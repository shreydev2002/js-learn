// array

const myarr=[0,1,2,3,4,5]
const arr= new Array(21,22,23,24,25)   // another method to declare an array
// console.log(myarr);
// console.log(arr[2]);

// Array Methods

// myarr.push(6)      // Adds 6 to the end of array
// myarr.pop()       // Deletes the last value from the array

// myarr.unshift(23)     //Adds 23 to the starting of the array
// myarr.shift()         //Deletes the first value from the array

// console.log(myarr.includes(9))     // Checks if the number (9) is present in the array
// console.log(myarr.indexOf(3), myarr.indexOf(9)) // Tells the position of the element in the array. If element not present then results -1

// console.log(myarr.join());   //Joins converts the elements of array as a collective string


//Slice,Splice

console.log("Initial Array ", myarr);
const ar1=myarr.slice(1,3)
console.log("Slice result ", ar1);
console.log("Array after slice ", myarr);
const ar2=myarr.splice(1,3)
console.log("Splice result ",ar2)
console.log("Array after splice ", myarr);