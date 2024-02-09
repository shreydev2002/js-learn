// for-in loop      is used for iterating Object
const myObj= {
    js : "Javascipt",
    cpp: "C++",
    swift : "Swift by apple"
}

for (const key in myObj)
{
    // console.log(key, "-->", myObj[key]);
}


const lang=['ruby','Javascipt','html','java'] // if we use for in with array and just give keys then it would give index
for (const key in lang)
{
    console.log(lang[key])
}

//we can't use for-in loop for MAPS