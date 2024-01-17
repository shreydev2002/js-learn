//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}
// console.log("OUTER: ", a);

/* In JS, If we use {} with function,if,loop etc. then the content within{} have a different scope than rest of the program     */
// console.log(a);
// console.log(b);

/*  Scope in nested functions   */
function one(){
    const username = "DEV"
    function two(){                     //two() is child and it can use properties of one() parent
        const website = "YOUTUBE"
        // console.log(username);
    }
    // console.log(website);            //Gives Error
    two()
}
one()

/*  Scope in if     */
if(true)
{
    const username = "DEV"
    if(username === "DEV")
    {
        const website = "YOUTUBE"
        // console.log(username + website);
    }
    // console.log(website);            // Gives Error
}
// console.log(username);               // Gives Error



//  +++++++++++++++++INTERESTING+++++++++++++++++++++++++++++

//we will discuss about two ways we can declare function

// console.log(addone(5));
function addone(num){
    return num+3
}

//console.log(addtwo(5));         //It would give error as we have used it before intialisation of addtwo
const addtwo=function(num){
    return num + 2
}