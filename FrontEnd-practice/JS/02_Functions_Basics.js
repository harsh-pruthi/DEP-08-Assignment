
// function numParams(num1){
//     return num1;
// }

// function numParams(...num1){
//     return num1;
// }

function numParams(val1, val2, ...num1){
    return num1;
}


console.log(numParams(5, 10, 20));

function objInter(anyObj){
    console.log(anyObj);
    return `Hello my name is ${anyObj.name} and age is ${anyObj.age}`;
}

console.log(objInter({
    name:"harsh", 
    age:"16"
}))
