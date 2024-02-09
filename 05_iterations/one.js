//For

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {         //First this msg will be printed and then the value 5
        // console.log("5 is best number");
    }
    // console.log(element);     
    
}
// console.log(element);  //error

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(i + '*' + j + ' = ' + i*j );
   }    
}

let myArr=['Samsung','Xiaomi','Apple']
let len=myArr.length
for (let i = 0; i < len; i++) {
    const element = myArr [i];
    // console.log(element);
}

//BREAK and CONTINUE

// for(i=1;i<=10;i++)
// {
//     if(i==5){
//         console.log("5 is best");
//         break;
//     }
//     console.log(i);
// }


// for(i=1;i<=10;i++)
// {
//     if(i==5){
//         console.log("5 is best");
//         continue;           //continue sends the control direct to the increment part
//     }
//     console.log(i);
// }