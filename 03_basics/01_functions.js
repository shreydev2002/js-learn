/* function FUNCTION_NAME( PARAMETERS ) {
    FUNCTION_DEFINITION
}       */

function print(){
    console.log("W");
    console.log("E");
    console.log("B");
}
// print()

// function addNum(num1, num2){
//     console.log(num1 + num2);
// }
// addNum(2,5)

function addNum(num1, num2){
    let res = num1+num2
    return res
}
const result=addNum(2,6)
// console.log("Result of addition = ", result );

function loginMsg(username /*= "Sam"*/){            //Here we give a default value "Sam"
    if(!username)                               //If we do not pass any argument in loginMsg() then it would be undefined and enter the if block 
    {                                           //but here we use "Sam" as default so if there's no value passed then Sam is considered. So we would never in the if block here.
        console.log("Please enter a username");
        return                  
    }
    return `Welcome ${username}, You are logged in`
}
// console.log(loginMsg("Shreyansh"));

function calculateCartPrice(...num1){              //Here ... is rest operator it bundles the elements in an array
    return num1
}
// console.log(calculateCartPrice( 200,600,400 ));

//Objects in function
const user = {
    username: "DEV",
    price: 2500
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)
//We can also pass object values in the function call */
/*handleObject({
    username: "Om",
    price: 300
})*/

//We can also pass array in function
const myArray = [100,400,200,700]
function getSecondValue(getArray){
    return getArray[1]
}
// console.log(getSecondValue(myArray));
//  // console.log(getSecondValue([400,2300,40,54]));      // we can also pass array in function argument like this



//we will discuss about two ways we can declare function

// console.log(addone(5));
function addone(num){
    return num+4
}

//console.log(addtwo(5));         //It would give error as we have used it before intialisation of addtwo
const addtwo=function(num){
    return num + 2
}