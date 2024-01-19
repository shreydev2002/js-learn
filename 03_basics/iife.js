// Immediately Invoked Function Expressions (IIFE)

//we use iife to remove global scope variable pollution and to immediately execute

(function display(){
    //It is a NAMED iife bcz we have display as name 
    console.log('CONNECTED');
})() ;          //we have to use ; to end context of iife

// Syntax- ()()         1st () is for function def and 2nd is for execution 

/* Using Arrow          */
( (user) => {           //UNNAMED iife
    console.log(`CONNECTED, Hello ${user}`);
})("SHREYANSH") ;                   //just like we would use FUNCTION_NAME("SHREYANSH ")