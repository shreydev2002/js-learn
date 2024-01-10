const num=400
const num2=new Number(200)      // a method for declaring number
// console.log(num)
// console.log(num2);

// console.log(num2.toString().length);
// console.log(num2.toFixed(2));

const othernum=24.2722
// console.log(othernum.toPrecision(3));

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

// *********************** MATHS *********************************

// console.log(Math.abs(-4));
// console.log(Math.round(5.3));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(5.3));

// console.log(Math.min(3,7,4,2));
// console.log(Math.max(3,7,4,2));

// console.log(Math.random());                           //Gives random values between 1 to 10
// console.log((Math.random() * 10) + 1);                //Gives random values but neglects 0  
// console.log(Math.floor((Math.random() * 10) + 1));    //Removes the decimal part

const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1 ))+ min );