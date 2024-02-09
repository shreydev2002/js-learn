//for of

// ["" , "", ""]                     //Array of strings
// [ {}, {} , {}]                       //Array of objects

myArr=[1,2,3,4,5]
for (const i of myArr) {
    // console.log(i);
}

greetings="Namaste Sir"
for(greets of greetings){
    // console.log(greets);
}

// MAPS

const map= new Map()
map.set("IN", "India")
map.set("UK","United Kingdom")
map.set("EUR","Europe")
// map.set("IN","India")    //Same entry wont register as new in the map 
// console.log(map);

for(const [key,value] of map)
{
    console.log(key, ':-' ,value);
}

const myObject = {          //We try to iterate object the same way we did with map but it would not work
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {       //Won't work and shows the object is not iterable
//     console.log(key, ':-', value);
    
// }

//For-of loop does not work for Objects but works for maps   
//To iterate Objects we use For-in   C.T.O