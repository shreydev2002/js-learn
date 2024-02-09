const coding = ["Java","Python","C++","HTML"]
// coding.forEach( function(item){
//     console.log(item);
// })

/*Using Arrow for same as above             () => {} */
// coding.forEach( (item) => {
//     console.log(item);
// })

//we can also iterate in for Each using function declaration
// function printMe(item){
//     console.log(item);
// }
// coding.forEach( printMe)


// coding.forEach( (item, index, arr) => {          //we can also pass( Values, Index , Array)  all the three in for Each
//     console.log( item, index, arr);
// })


//Objects in Array and using forEach 
const LangInfo = [
    {
        langname: "JavaScript",
        short: "JS"
    },
    {
        langname: "Python",
        short: "py"
    },
    {
        langname: "C++",
        short: "cpp"
    }
]

LangInfo.forEach( (item) => {
    console.log(item.langname);
})