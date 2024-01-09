/* File seems to be large but supports investigation study of different cases.
                
            !!   NOTES are present beneath.         SCROLL DOWN 
        Topic of OPERATIONS   is below*/
// typeof variable  &  typeof(variable)   both will give the same answer.


let score1 = "33"
// console.log(typeof score1);
let valueInNumber1=Number(score1);
// console.log(typeof valueInNumber1);
// console.log()

let score2= "33abc"
// console.log(typeof score2);
let valueInNumber2=Number(score2)
// console.log(typeof valueInNumber2)
// console.log(valueInNumber2)
// console.log();

let score3= null
// console.log(typeof score3);
let valueInNumber3=Number(score3)
// console.log(typeof valueInNumber3)
// console.log(valueInNumber3)
// console.log();

let score4= undefined
// console.log(typeof score4);
let valueInNumber4=Number(score4)
// console.log(typeof valueInNumber4)
// console.log(valueInNumber4)
// console.log();

let score5= true
// console.log(typeof score5);
let valueInNumber5=Number(score5)
// console.log(typeof valueInNumber5)
// console.log(valueInNumber5)
// console.log();

let score6= "DEV"
// console.log(typeof score6);
let valueInNumber6=Number(score6)
// console.log(typeof valueInNumber6)
// console.log(valueInNumber6)
// console.log();

/*      Notes related to above code i.e. conversion to number
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0  */


let isLoggedIn= 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// console.log();

/*      Notes related to above code i.e. conversion to boolean  
    1 => true; 0 => false
    "" => false
    "hitesh" => true    */

let somenumber = 33
let stringNumber = String(somenumber);
// console.log(typeof stringNumber)
// console.log(stringNumber)


// ***************************OPERATIONS******************************

let value=3
let negvalue= -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="Hello"
let str2=" World"
let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion