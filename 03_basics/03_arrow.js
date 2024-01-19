//This in objects for context
const user= {
    username : "Dev",
    price: 5400,

    welcomeMsg: function(){
        console.log(`${this.username}, Welcome Back`);
        // console.log(this);
    }
}
// user.welcomeMsg()
// user.username="Raj"
// user.welcomeMsg()

// console.log(this);      // RETURN {} 

/* (This) in function    cant be used to refer context          */

// function chai(){
//     let username = "Shri Ram"
//     console.log(this.username);       //Gives undefined
//                                 //We cannot use (this) for context in functions, the way we can for objects
// }
// chai()                   //would print undefined

// const chai= function(){
//     let username="Shri Ram"
//     console.log(this.username);              //undefined
// }
// chai()

// const chai= () => {                      //ARROW 
//     let username="Shri Ram"
//     console.log(this);                       //THIS in arrow does not return anything {} while in object return its elements
//     console.log(this.username)                   //undefined
// }
// chai()

/*  ARROW SYNTAX -    () => {}              */

// const addTwo = (num1,num2) => {
//     return num1+num2                     //These are explicit return where we use return keyword
// }
// console.log(addTwo(3,5));

//While using ARROW if we wrap in {} then we will have to use RETURN

/* Implicit return          - we dont use return */
// const addNum = (num1,num2) => num1 + num2
//  const addNum = (num1,num2) => (num1+num2)
//  const addNum = (num1, num2) => ({username: "hitesh"})         //For Object its compulosry to use {} "CURLY BRACES"
//  console.log(addNum(4,2)); 


 // const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()