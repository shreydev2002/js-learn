//singleton
//object.create()  //  this is constructor method
// we will talk abt it later

//  OBJECT LITERALS

const mySym=Symbol("key1")  //symbol declaration
//obj declaration
const user={                //KEY : VALUE
    name: "Shreyansh",
    "full name":"Shreyansh Srivastava",   //the key full name is in "", a string so there is no way we can access it using dot
    age: 20,
    [mySym]: "MYkey1",      //we use [] or it would change the return type from symbol to string
    location:"Lucknow",
    email:"dev@xyz.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Wednesday']
}

/* ACCESSING  OBJECTS */
// console.log(user.email);
// console.log(user["email"]);             //we use "" bcz in object email,name,age and all keys are stored as string
// console.log(user["full name"]);       //if we declared a key as "" string in obj declaration then to access it we will have to use this square brkt method. If we directly give user.full name or user."full name" then it wont work
console.log(user[mySym]);              //mySym is symbol so we use it in []. If we use user.mySym then it results undefined and not its value "MYkey1"

/*  we access using dot notation for making any changes */
user.email="dev@google.com"  //to change value of the key 'email' in the object user
//console.log(user);

// Object.freeze(user)         //after FREEZE any changes we make to the object would not modify it as the object is freezed
// user.email="DEV@123.com"
// console.log(user);

/* Function in object           */
user.greeting = function(){
    console.log("Hello Dear");
}
user.greetingNew = function()
{
    console.log(`Hello Dear, ${this.name}`);        // to access the object same as that of function we use 'this' keyword
} 
// console.log(user.greeting());
// console.log(user.greetingNew());
// console.log(user);


/* Most of the times we use dot(.) to access object's values but there are some cases where we have to use square bracket */