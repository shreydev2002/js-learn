const name = "Shreyansh"
const age = 20
// console.log(name + age + "Value")

// Another method to declare string is
const city= new String('Lucknow')

console.log(city[2]);               //gives the character at index 2
console.log(city.__proto__);        
console.log(city.length)            // gives the length of the string
console.log(city.toUpperCase());    //converts to upper case
console.log(city.charAt(2))         // gives out the character at the given index
console.log(city.indexOf('c'));    //tells index number of the given character

const newString = city.substring(0,4);
console.log(newString);
console.log(city.slice(-6,4));

const text='    Hello    '
console.log(text);
console.log(text.trim());

const url = "https://dev.com/dev%30shreyansh"
console.log(url.replace('%30','-'));

console.log(url.includes('shreyansh'));

const user='Sardar$Vallabhai$Patel'
console.log(user.split('$'));
