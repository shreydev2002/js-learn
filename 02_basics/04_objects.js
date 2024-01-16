/* Singleton and with help of constructors  */

//const user={}             //non-singleton     we discussed this is 03_objects
//const user= new Object()    //singleton

const tinderUser= {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// To show nested object declaration
const regularUser={ 
    email:"12@xyz.com",            
    fullname: {              //object fullname within obj regularUser
        userfullname: {          //obj userfullname within obj fullname within regularUser
            firstname: "Shreyansh",
            lastname: "Srivastava"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

// To combine two or more objects
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={5:"e", 6:"f"}
//const obj4= {obj1, obj2}     // it will not combine them correctly it justs add both objects as different
//const obj4= Object.assign({},obj1,obj2,obj3)     //it assigns all the object in a single object. we use {} otherwise if we use obj1 then the combination will be stored in obj4 but also in obj1

const obj4= {...obj1, ...obj2}      //spread method. WE WILL USE THIS most of the time
// console.log(obj4);

//In database we have array that contains objects
const users= [
    { id:1, email:"h@xyz.com"},
    // { id:2, email:"g@xyz.com"}
    { id:1, email:"h@xyz.com"},
    { id:1, email:"h@xyz.com"},
]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   //Object.keys(obj) gives the keys in the obj
// console.log(Object.values(tinderUser));     //Object.values(obj) gives the values in the obj
// console.log(Object.entries(tinderUser));      //Object.entries(obj) makes array of the different properties of the obj

// console.log(tinderUser.hasOwnProperty('name'));     //Determines whether an object has a property with the specified name


/* DESTRUCTURING --     */

const deo = {
        deoName : "Denver",
        price : 399,
        SellerName : "Vmart"
}
// deo.SellerName       //the method that we've so used to access obj for once in console.log
const {SellerName: seller} = deo            //we can use it many times by the name seller
console.log(seller);

/* JSON         */
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]