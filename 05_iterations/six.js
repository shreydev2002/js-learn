const coding = ["Java","Python","C++","HTML"]

// const values = coding.forEach( (items) => {
//     //   console.log(items);
//     return items             //forEach DOESN'T RETURN ANYTHING
// })

// console.log(values);

const myArray=[1,2,3,4,5,6,7,8,9,10]
// const result =myArray.filter( (num) => num > 4)             //Unlike forEach, filter returns a value and it needs to be stored. 
// console.log(result);

// const result=myArray.filter( (num) => {             //If we use {} then scope forms so we need to use (return) 
//     return(num > 4)
// } )
//    console.log(result);

//Doing the above using forEach         by pushing values in an empty array
const newarray=[]           //Creating an empty array so that can we push in values
myArray.forEach( (num) => {
    if(num > 4) { newarray.push(num)  }             //Condition for num>4 and pushing in the values that are true
} )
// console.log(newarray);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbook = books.filter( (bk) => bk.genre == "History" )
userbook = books.filter( (bk)=> { return (bk.publish > 1995 && bk.genre == "History") })         // Wheneve we use {} i.e. scope we need (return)
console.log(userbook );