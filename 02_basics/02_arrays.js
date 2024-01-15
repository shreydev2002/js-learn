// if we direct apply push in an array then the jointis formed by joining the array as whole and not its elements

const fruits=['apple','orange','banana'];
const fruits2=['watermelon','papaya','pomengranate']; 
// fruits.push(fruits2);
// console.log(fruits);    // console.log(fruits[3]);

const allfruits = fruits.concat(fruits2); // The result of concat needs to be saved in a variable bcz the concatenation is not reflected in the original array
//  console.log(allfruits);
// console.log(fruits);

//spread method to join elements of the array
const newallfruits= [...fruits, ...fruits2]     //stores the spread out values of both arrays and stores them as a whole
// console.log(newallfruits);

//flat can be used when we we are given complex type of array
const anotherarray=[1,2,3,[4,5],6,7,[8,[9,10],11],12,13]   // a complex array
const real_anotherarray=anotherarray.flat(Infinity) // we give levels but here we are giving infinity
// console.log(real_anotherarray); 

//isArray() and from()
// console.log(Array.isArray("Hitesh"));     //checks if its array
// console.log(Array.from("Shreyansh"));          //converts to array

// console.log(Array.from({name: "hitesh"}))   // @@@@INTERESTING#####

const score1=100
const score2=200
const score3=300
// console.log(Array.of(score1,score2,score3));
