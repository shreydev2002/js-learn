/* Based on the way memory is stored and accessed, datatypes are categorized into two- Primitive and Reference
    Primitive(7)
    Reference (Non-Primitive) - Arrays, Object, Functions   */

//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null  //Data type of null will result as Object
let userEmail;              // Data type of undefined will result as undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);   //result-false as symbol gives unique identity even if the values are same
// console.log(typeof anotherId);


const bigNumber = 3456543576654356754n   // BigInt



// Reference (Non primitive)

// They are - Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];     //Array

let myObj = {
    name: "hitesh",
    age: 22,
}   //Object

const myFunction = function(){
    console.log("Hello world");
} // Function

/* Return type of all non-primitive datatypes is object  other than for function it displays function only
    but it is object function in actual */

// https://262.ecma-international.org/5.1/#sec-11.4.3