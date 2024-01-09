// console.log( 2 > 1);    console.log( 2 >= 1);   console.log( 2 < 1);    console.log( 2 == 1);
// console.log( 2 != 1);

// console.log("2" > 1);  console.log("02" > 1);  /*both result true as "2" & "02" are considered as no 2*/

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);    
/* In JS, comparisons(<,>,<=,>=) converts the null to a number i.e. 0    while equality doesn't.
    Both Comparision and Equality work in a different manner.   */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/* In the case of undefined all the results would be false */

/* === checks the values as well as the data type */
console.log("2" === 2)  // would result false as the data types don't match
    