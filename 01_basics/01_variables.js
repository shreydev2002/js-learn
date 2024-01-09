const accountId=234
let accountEmail="dev@gmail.com"
var accountPassword = "123"
accountCity= "Jaipur"
let accountState

/*
accountId= 532    This will give error as we cannot change value of constant 
*/ 
accountEmail="xyz@google.com"
accountPassword="234"
accountCity="Mumbai"

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);

// Here the value of accountState is not defined therefore "undefined" will be the output

/* 
Prefer not use var 
because of functional scope and block scope 
    */