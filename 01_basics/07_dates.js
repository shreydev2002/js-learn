// Dates

let myDate= new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof Mydate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   // to get seconds

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth() +1); // +1 bcz it takes Jan as 0 so for user understanding
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})